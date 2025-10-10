"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Bell } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact-us", label: "Contact Us" }, 
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="RemindMe Home"
        >
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-3 rounded-xl shadow-md group-hover:rotate-6 transition-transform duration-300">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text tracking-tight group-hover:scale-105 transition-transform">
              RemindMe
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Never Miss What Matters
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className="relative text-slate-700 hover:text-blue-600 transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r from-blue-500 to-indigo-500 after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 font-medium rounded-xl"
            >
              Log In
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:shadow-blue-200/50 transition-transform duration-300 hover:scale-[1.05]">
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-xl rounded-b-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col px-6 py-5 space-y-5 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-3">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/get-started">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white shadow-md">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
