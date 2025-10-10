"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Get started with basics — perfect for early projects.",
    features: [
      "Up to 2 investor updates / month",
      "Basic AI drafting",
      "Email sending",
    ],
    buttonText: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 290,
    description: "For founders who want polished, professional updates.",
    features: [
      "Unlimited updates",
      "Advanced AI writing",
      "Analytics & engagement tracking",
      "Priority email support",
    ],
    buttonText: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Team",
    monthly: 79,
    yearly: 790,
    description: "For startups managing multiple founders and investors.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom branding",
      "Dedicated success manager",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-4 md:px-6 lg:px-12 overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-indigo-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.08),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 z-10 py-30 w-full">     
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your stage. Start free, upgrade when
            you&apos;re ready.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "monthly"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "yearly"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            const period = billing === "monthly" ? "/month" : "/year";
            const discount = billing === "yearly" && plan.monthly > 0 ? Math.round(((plan.monthly * 12 - plan.yearly) / (plan.monthly * 12)) * 100) : 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl shadow-sm border p-8 flex flex-col justify-between ${
                  plan.highlighted
                    ? "border-violet-600 shadow-md bg-white"
                    : "bg-white"
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billing + plan.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-bold text-gray-900"
                      >
                        ${price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-600">{period}</span>
                  </div>

                  {/* Discount badge */}
                  {discount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 inline-block bg-violet-100 text-violet-800 px-2 py-1 text-xs font-semibold rounded-full"
                    >
                      Save {discount}%
                    </motion.div>
                  )}

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-violet-600" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link href="/signup">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-violet-600 hover:bg-violet-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-600">
            Not sure which plan fits you?{" "}
            <Link href="/contact" className="text-violet-600 font-medium">
              Talk to us →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
