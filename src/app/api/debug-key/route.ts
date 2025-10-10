import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.JWT_PRIVATE_KEY;
  if (!key) {
    return NextResponse.json({ error: "JWT_PRIVATE_KEY not found" }, { status: 500 });
  }

  return NextResponse.json({
    length: key.length,
    startsWith: key.slice(0, 30),
    endsWith: key.slice(-30),
  });
}
