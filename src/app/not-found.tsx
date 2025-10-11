"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ArrowLeft, Bell } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const { status } = useSession();

  const handleGoBack = () => {
    if (status === "authenticated") {
      router.push("/dashboard"); // 🔐 Authenticated users → Dashboard
    } else {
      router.push("/"); // 🏠 Guests → Landing Page
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* 🪄 Logo/Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 p-4 shadow-lg"
        >
          <Bell className="h-8 w-8 text-white" />
        </motion.div>

        <h1 className="text-8xl font-extrabold text-gray-900 tracking-tight">
          404
        </h1>

        <p className="mt-4 text-xl text-gray-600 max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoBack}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </motion.button>

        {/* Decorative SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <svg
            width="180"
            height="140"
            viewBox="0 0 180 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M20 120 C40 80, 140 80, 160 120"
              stroke="url(#grad)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 5"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="180" y2="0">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            <circle cx="90" cy="60" r="12" stroke="#4F46E5" strokeWidth="2" />
            <circle cx="80" cy="58" r="2" fill="#4F46E5" />
            <circle cx="100" cy="58" r="2" fill="#4F46E5" />
            <path
              d="M83 65 Q90 70 97 65"
              stroke="#4F46E5"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>

        <p className="mt-2 text-sm text-gray-500">
          Looks like you took a wrong turn 🗺️
        </p>
      </motion.div>
    </div>
  );
}
