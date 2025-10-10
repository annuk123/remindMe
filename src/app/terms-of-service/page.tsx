"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
            <ShieldCheck className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">RemindMe</span>.  
            We’re building a simple, smart reminder app to help students and professionals stay organized.  
            Please take a moment to understand how we handle your trust.
          </p>
        </motion.div>
      </section>

      {/* Terms Content */}
      <section className="relative max-w-4xl w-full mx-auto px-6 pb-24 text-slate-700">
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using{" "}
              <span className="font-medium text-blue-600">RemindMe</span>,
              you agree to these Terms of Service. If you do not agree, please refrain from using the app.  
              These terms ensure a respectful and secure experience for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              2. Your Account & Responsibility
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password, and for all activities under your account.
              Please notify us immediately if you suspect unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              3. Fair Use of the Service
            </h2>
            <p>
              RemindMe is designed to help you manage tasks, deadlines, and
              subscriptions. You agree not to use the platform for harmful,
              unlawful, or abusive activities that could affect others’ usage or our systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              4. Ownership & Intellectual Property
            </h2>
            <p>
              All content, features, and code within{" "}
              <span className="font-medium text-blue-600">RemindMe</span> are
              owned by its creators. You retain ownership of the data you add,
              while granting us the right to process it solely to provide and
              improve the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              5. Data Privacy
            </h2>
            <p>
              We value your privacy deeply. Your personal data is never sold,
              and is only used to deliver core app functionality.  
              You can learn more in our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              RemindMe is provided <em>“as is”</em>.  
              While we aim for reliability, we cannot guarantee uninterrupted service or accuracy of reminders.  
              We are not liable for losses resulting from missed reminders, technical issues, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              7. Suspension or Termination
            </h2>
            <p>
              We may suspend or terminate accounts that violate these terms,
              abuse the platform, or pose a security risk.  
              You can delete your account anytime through your profile settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              8. Updates to These Terms
            </h2>
            <p>
              We may revise these Terms periodically to reflect product updates
              or legal requirements. Continued use of RemindMe means you accept
              the latest version. The most recent update date will always be listed below.
            </p>
          </div>
        </div>

        {/* Contact + Last Updated */}
        <div className="mt-16 text-center border-t border-blue-100 pt-10">
          <p className="text-slate-600">
            Have questions about these terms?{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 font-medium hover:underline"
            >
              Contact our team
            </Link>{" "}
            — we’re here to help.
          </p>
          <p className="text-xs text-slate-500 mt-4">
            Last updated: <span className="font-medium">October 10, 2025</span>
          </p>
        </div>
      </section>
    </div>
  );
}
