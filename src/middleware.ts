import { withAuth } from "next-auth/middleware";

// Protect specific routes (like /dashboard)
export default withAuth({
  pages: {
    signIn: "/login", // redirect here if not authenticated
  },
});

// Apply middleware only to dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
