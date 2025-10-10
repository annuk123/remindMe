"use client";

import { Check, X } from "lucide-react";

const features = [
  {
    feature: "Setup Time",
    manual: "Manual entry",
    generic: "Takes effort",
    remindMe: "Instant setup, smooth flow",
  },
  {
    feature: "Reminder Management",
    manual: "Unorganized list",
    generic: "Basic task list",
    remindMe: "Clean, categorized reminders",
  },
  {
    feature: "Recurring Reminders",
    manual: <X className="w-5 h-5 text-red-500 mx-auto" />,
    generic: "Limited options",
    remindMe: <Check className="w-5 h-5 text-green-600 mx-auto" />,
  },
  {
    feature: "Notifications",
    manual: "None",
    generic: "Simple alerts",
    remindMe: "Smart email & web reminders",
  },
  {
    feature: "Data Privacy",
    manual: "N/A",
    generic: "Basic security",
    remindMe: "Encrypted, safe & private",
  },
];

export function ComparisonTable() {
  return (
    <section className="mb-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-3">
        Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">RemindMe</span>?
      </h2>
      <p className="text-center text-slate-600 mb-10 text-sm md:text-base max-w-2xl mx-auto">
        See how RemindMe compares to traditional methods and generic apps.  
        Simple, focused, and built for real-world productivity.
      </p>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-full rounded-3xl shadow-lg overflow-hidden border border-blue-100">
          <div className="grid grid-cols-4 bg-blue-50 text-gray-900 font-semibold text-sm uppercase tracking-wide">
            <div className="py-4 px-6 border-r border-blue-100 text-left">Feature</div>
            <div className="py-4 px-6 border-r border-blue-100 text-center">Manual</div>
            <div className="py-4 px-6 border-r border-blue-100 text-center">Generic App</div>
            <div className="py-4 px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-500 text-center font-bold">
              RemindMe
            </div>
          </div>

          {features.map((f, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 ${
                i % 2 === 0 ? "bg-white" : "bg-blue-50/40"
              } border-b border-blue-100 hover:bg-blue-50 transition duration-200`}
            >
              <div className="py-4 px-6 font-medium text-slate-900 text-sm">
                {f.feature}
              </div>
              <div className="py-4 px-6 text-slate-600 text-center text-sm">
                {f.manual}
              </div>
              <div className="py-4 px-6 text-slate-600 text-center text-sm">
                {f.generic}
              </div>
              <div className="py-4 px-6 text-center text-sm font-medium text-blue-700">
                {f.remindMe}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-md p-5 space-y-3 border border-blue-100"
          >
            <h3 className="font-semibold text-slate-900 text-base">
              {f.feature}
            </h3>
            <div className="flex justify-between text-slate-600 text-sm">
              <span>Manual:</span>
              <span>{f.manual}</span>
            </div>
            <div className="flex justify-between text-slate-600 text-sm">
              <span>Generic:</span>
              <span>{f.generic}</span>
            </div>
            <div className="flex justify-between text-blue-700 font-medium text-sm">
              <span>RemindMe:</span>
              <span>{f.remindMe}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
