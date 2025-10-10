"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import ConvexClientProvider from "@/components/ConvexClientProvider/ConvexClientProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </SessionProvider>
  );
}
