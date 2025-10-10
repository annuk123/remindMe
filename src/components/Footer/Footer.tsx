"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/40 to-blue-100/60 border-t border-blue-100 mt-24 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        {/* Brand + CTA */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Never forget what matters. ✨
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Stay ahead of deadlines, tasks, and goals with{" "}
            <span className="font-semibold text-blue-600">RemindMe</span> — your
            simple, smart reminder companion.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-blue-300/40 text-lg transition-all"
          >
            Get Started Free
          </Link>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-blue-600 transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-blue-600 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-blue-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-600 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">
              Connect
            </h4>
            <p className="text-slate-600 text-sm mb-4">
              Follow RemindMe for updates, stories, and product insights.
            </p>
            <div className="flex justify-center sm:justify-start space-x-5">
  {[
    {
      Icon: Twitter,
      href: "https://x.com/Annu66126617", // 🔗 replace with your Twitter/X
      label: "Twitter",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/annu-kumari-540337237/", // 🔗 replace with your LinkedIn
      label: "LinkedIn",
    },
    {
      Icon: Mail,
      href: "mailto:anuk35168@gmail.com", // 🔗 or your contact email
      label: "Email",
    },
  ].map(({ Icon, href, label }, i) => (
    <motion.a
      key={i}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.4 }}
      className="text-slate-500 hover:text-blue-600 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  ))}
</div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} RemindMe. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with 💙 by <span className="font-medium text-blue-600">Annu</span>
          </p>
        </div>
      </div>

      {/* Decorative Gradient Blur */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}
