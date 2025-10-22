"use client";

import { useState } from "react";
import { X, CalendarPlus, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import { useSession } from "next-auth/react";
import { Id } from "../../../convex/_generated/dataModel";

export default function CreateReminderModal({
  isOpen,
  onClose,
  userId,
}: {
  isOpen: boolean;
  onClose: () => void;
  userId?: Id<"users">;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !date) {
      toast.error("Please enter a title and date.");
      return;
    }

    if (!session?.user?.email) {
      toast.error("You must be logged in.");
      return;
    }

    if (!userId) {
      toast.error("User not found. Please refresh.");
      return;
    }

    setLoading(true);
    try {
      const user = await fetchQuery(api.users.getUserByEmail, {
        email: session.user.email,
      });

      if (!user) {
        throw new Error("User not found");
      }

      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const remindAtIso = new Date(date).toISOString();

      await fetchMutation(api.reminders.createReminder, {
        userId: user._id,
        title,
        description,
        remindAt: remindAtIso,
        timeZone,
      });

      toast.success("Reminder created 🎉");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create reminder");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-0">
      <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-5">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg text-white shadow">
            <CalendarPlus className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Create Reminder
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Reminder title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm sm:text-base shadow-sm bg-white"
          />

          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none h-24 text-sm sm:text-base shadow-sm bg-white"
          />

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-sm sm:text-base shadow-sm bg-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-3 mt-2 font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5 mr-2" /> Saving...
              </>
            ) : (
              "Save Reminder →"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
