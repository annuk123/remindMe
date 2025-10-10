// convex/crons.ts
import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// ✅ Runs every minute to check and send due reminders
crons.interval(
  "processDueRemindersEveryMinute",   // Job name
  { minutes: 1 },                     // Interval
  internal.reminders.processDueReminders
);

export default crons;
