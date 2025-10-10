"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Plus, LogOut, Bell, Trash2, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import CreateReminderModal from "@/components/CreateReminderModal/CreateReminderModal";
import { api } from "../../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { formatLocalTime } from "@/lib/formatLocalTime"; // ✅ imported helper

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🧠 Redirect if not logged in
  if (status === "unauthenticated") {
    router.push("/login");
  }

  // 🕒 Get logged-in user's data (reactively)
  const user = useQuery(api.users.getUserByEmail, {
    email: session?.user?.email ?? "",
  });

  // 🔄 Real-time reminders for user
  const reminders = useQuery(
    api.reminders.getRemindersByUser,
    user ? { userId: user._id } : "skip"
  );

  // ⚡ Mutations
  const deleteReminder = useMutation(api.reminders.deleteReminder);

  if (status === "loading" || reminders === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 text-gray-900 flex flex-col relative">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl text-white">
            <Bell className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            RemindMe
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600 hidden sm:block">
            {session?.user?.email}
          </p>
          <button
            onClick={() => {
              signOut();
              toast.success("Signed out successfully 👋");
            }}
            className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start flex-1 px-4 py-10">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {session?.user?.name?.split(" ")[0]} {" "}
            </span>  👋
          </h2>
          <p className="text-gray-500 mb-8">
            Stay organized and never miss what matters.  
            Your reminders — simple, clean, and fast
          </p>

          {/* Reminder list */}
          {!reminders || reminders.length === 0 ? (
            <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-10 shadow-md flex flex-col items-center justify-center">
              <Clock className="w-12 h-12 text-indigo-500 mb-3" />
              <p className="text-gray-500 text-lg mb-2">No reminders yet.</p>
              <p className="text-sm text-gray-400 mb-4">
                Click the + button below to add your first reminder.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 mt-8">
              {reminders.map((r) => {
                // 🕒 Convert to user’s local time using shared helper
                const localTime = formatLocalTime(r.remindAt, r.timeZone);

                return (
                  <div
                    key={r._id}
                    className="group bg-white/80 p-4 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition relative"
                  >
                    <button
                      onClick={() =>
                        toast.promise(deleteReminder({ reminderId: r._id }), {
                          loading: "Deleting...",
                          success: "Reminder deleted 🗑️",
                          error: "Failed to delete",
                        })
                      }
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <h3 className="text-lg font-medium text-gray-800">
                      {r.title}
                    </h3>
                    {r.description && (
                      <p className="text-sm text-gray-500 mt-1">
                    <Calendar className="inline-block w-4 h-4 mr-1" /> {r.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      <Clock className="inline-block w-4 h-4 mr-1" /> {localTime}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        aria-label="Add Reminder"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-400 border-t">
        Made with 💙 by <span className="font-medium text-indigo-600">Annu</span>
      </footer>

      {/* Modal */}
      <CreateReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={user?._id}
      />
    </div>
  );
}
