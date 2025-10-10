// // lib/convex.ts
// export async function queryConvex(functionName: string, args: any) {
//   if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
//     throw new Error("NEXT_PUBLIC_CONVEX_URL is not defined");
//   }

//   const res = await fetch(`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/query`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       path: functionName,
//       args,
//       format: "json",
//     }),
//   });

//   const text = await res.text();

//   if (!res.ok) {
//     console.error("Convex query failed:", text);
//     throw new Error(`Convex query failed: ${functionName}`);
//   }

//   try {
//     return JSON.parse(text);
//   } catch {
//     console.error("Invalid JSON from Convex:", text);
//     throw new Error("Invalid JSON response from Convex");
//   }
// }
