import { NextResponse } from "next/server";
import { fetchAction } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";

export async function POST(req: Request) {
  const { email } = await req.json();
  try {
    await fetchAction(api.actions.auth.sendResetPasswordEmail, { email });
    return NextResponse.json({ success: true });
  } catch (err) {
  const message =
    err instanceof Error ? err.message : "Something went wrong";
  return NextResponse.json({ error: message }, { status: 400 });
}

}
