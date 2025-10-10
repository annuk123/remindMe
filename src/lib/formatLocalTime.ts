export function formatLocalTime(
  isoString: string,
  timeZone?: string,
): string {
  try {
    // 1️⃣ Detect user's locale from browser
    const userLocale =
      typeof navigator !== "undefined"
        ? navigator.language // e.g., "en-IN", "en-US", "fr-FR"
        : "en-US"; // fallback if running on server or email renderer

    // 2️⃣ Detect timezone if not explicitly passed
    const userTimeZone =
      timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;

    // 3️⃣ Format the date according to user's locale + timezone
    return new Date(isoString).toLocaleString(userLocale, {
      timeZone: userTimeZone,
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch (error) {
    console.error("❌ Failed to format local time:", error);
    return new Date(isoString).toLocaleString(); // fallback
  }
}
