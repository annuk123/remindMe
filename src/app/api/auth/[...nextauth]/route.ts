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
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          // Step 1: Check if user exists in Convex
          const user = await fetchQuery(api.users.getUserByEmail, {
            email: credentials.email,
          });

          // Step 2: If user exists
          if (user) {
            // Case: old user without password → auto set password
            if (!user.password) {
              await fetchAction(api.actions.updateUserPasswordAction, {
                userId: user._id,
                password: credentials.password,
              });
              return { id: user._id, name: user.name, email: user.email };
            }

            // Case: normal user → check password
            const isValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (!isValid) throw new Error("Invalid password");

            return { id: user._id, name: user.name, email: user.email };
          }

          // Step 3: If new user → create one automatically
          await fetchAction(api.actions.createUserAction, {
            name: credentials.name || credentials.email.split("@")[0],
            email: credentials.email,
            password: credentials.password,
          });

          // Step 4: Fetch the newly created user
          const newUser = await fetchQuery(api.users.getUserByEmail, {
            email: credentials.email,
          });

          if (!newUser) {
            throw new Error("Failed to create or fetch new user");
          }

          return {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          };
        } catch (err) {
          console.error("Authorize error:", err);
          throw new Error("Something went wrong");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
