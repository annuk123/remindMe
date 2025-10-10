"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto z-10"
        >
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Your privacy matters to us.  
            This page explains how{" "}
            <span className="font-semibold text-blue-600">RemindMe</span>{" "}
            collects, uses, and protects your information — so you can stay
            organized with complete peace of mind.
          </p>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="relative max-w-4xl w-full mx-auto px-6 pb-24 text-slate-700">
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you sign up or use{" "}
              <span className="font-medium text-blue-600">RemindMe</span>, we
              collect basic details such as your name, email, and the tasks or
              reminders you create.  
              We may also gather non-personal data like device type, browser,
              and general usage analytics to improve the user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your data helps us deliver, personalize, and improve{" "}
              <span className="font-medium text-blue-600">RemindMe</span>.  
              We use it to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Send reminders and app notifications you’ve set.</li>
              <li>Provide updates, improvements, and support.</li>
              <li>Analyze anonymized usage patterns to enhance features.</li>
            </ul>
            <p className="mt-2">
              We <span className="font-semibold">do not sell</span> your personal
              information to anyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              3. Data Security
            </h2>
            <p>
              We use modern encryption and security practices to protect your
              information. However, no online service is completely immune to
              risk. We recommend keeping your account credentials private and
              avoiding reuse of passwords across different sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              4. Cookies & Tracking
            </h2>
            <p>
              We use cookies to keep you signed in, remember preferences, and
              understand how people use{" "}
              <span className="font-medium text-blue-600">RemindMe</span>.  
              You can disable cookies through your browser settings, but some
              features may not work properly without them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party services for analytics, hosting,
              and email notifications. These providers handle your data only as
              needed to perform their services and follow their own privacy
              policies.  
              Examples include email delivery platforms and analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              6. Your Rights
            </h2>
            <p>
              You can request to access, update, or delete your personal data
              anytime by contacting us.  
              We believe you should always be in control of your own
              information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may occasionally update this Privacy Policy to reflect product
              improvements or legal requirements.  
              When we make changes, we’ll update the “Last updated” date below
              and, where necessary, notify users through the app or email.
            </p>
          </div>
        </div>

        {/* Contact + Last Updated */}
        <div className="mt-16 text-center border-t border-blue-100 pt-10">
          <p className="text-slate-600">
            Have privacy concerns or questions?{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 font-medium hover:underline"
            >
              Contact our team
            </Link>{" "}
            — we respond personally to every request.
          </p>
          <p className="text-xs text-slate-500 mt-4">
            Last updated: <span className="font-medium">October 10, 2025</span>
          </p>
        </div>
      </section>
    </div>
  );
}
