import { Suspense } from "react";
import ResetPasswordClient from "@/components/ResetPassword/ResetPasswordClient";

export default function ResetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}
