// components/ConvexClientProvider/ConvexClientProvider.tsx
"use client";

import { ConvexReactClient, ConvexProvider } from "convex/react";
import React from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
