import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { fetchQuery, fetchAction } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },
async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) {
    throw new Error("Missing credentials");
  }

  try {
    const user = await fetchQuery(api.users.getUserByEmail, {
      email: credentials.email,
    });

    if (user) {
      // Case: user exists
      if (!user.password) {
        // old account without password
        const newHash = await bcrypt.hash(credentials.password, 10);
        await fetchAction(api.actions.updateUserPasswordAction, {
          userId: user._id,
          password: newHash,
        });
        return { id: user._id, name: user.name, email: user.email };
      }

      //  Auto-detect old plaintext password (no bcrypt prefix)
      const maybePlain = !user.password.startsWith("$2");

      if (maybePlain && user.password === credentials.password) {
        // rehash and update
        const newHash = await bcrypt.hash(credentials.password, 10);
        await fetchAction(api.actions.updateUserPasswordAction, {
          userId: user._id,
          password: newHash,
        });
        console.log(`Auto-migrated user ${user.email} to hashed password`);
        return { id: user._id, name: user.name, email: user.email };
      }

      // Case: normal user
      const isValid = await bcrypt.compare(
        credentials.password,
        user.password
      );
      if (!isValid) throw new Error("Invalid password");

      return { id: user._id, name: user.name, email: user.email };
    }

    // Case: new user
    const hashedPassword = await bcrypt.hash(credentials.password, 10);
    await fetchAction(api.actions.createUserAction, {
      name: credentials.name || credentials.email.split("@")[0],
      email: credentials.email,
      password: hashedPassword,
    });

    const newUser = await fetchQuery(api.users.getUserByEmail, {
      email: credentials.email,
    });

    if (!newUser) throw new Error("Failed to create or fetch new user");

    return {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
  }  catch (err: unknown) {
  console.error("Authorize error:", err);

  // Only access message safely if it's an Error
  if (
    err instanceof Error &&
    ["Invalid password", "Missing credentials", "Failed to create or fetch new user"].includes(
      err.message
    )
  ) {
    throw new Error(err.message);
  }

  throw new Error("Internal server error");
}
}

    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };