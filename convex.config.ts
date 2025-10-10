import { defineApp } from "convex/server";
import betterAuth from "@convex-dev/better-auth/convex.config";

const app = defineApp();

// Register the Better Auth component
app.use(betterAuth);

export default app;
