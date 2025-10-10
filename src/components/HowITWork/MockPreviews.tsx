"use client";

import { Card } from "@/components/ui/card";

// Step 1: Fake input form preview
export function MetricsPreview() {
  return (
    <Card className="h-56 p-6 flex flex-col gap-3 bg-white shadow-md rounded-2xl border border-gray-200">
      <div className="h-4 w-28 bg-gray-200 rounded" />
      <input
        className="h-10 px-3 rounded-lg border border-gray-300"
        placeholder="MRR: $25,000"
        disabled
      />
      <input
        className="h-10 px-3 rounded-lg border border-gray-300"
        placeholder="New Users: +240"
        disabled
      />
      <input
        className="h-10 px-3 rounded-lg border border-gray-300"
        placeholder="Highlights: Launched AI feature"
        disabled
      />
    </Card>
  );
}

// Step 2: Fake AI email preview
export function EmailPreview() {
  return (
    <Card className="h-65 p-6 bg-white shadow-md rounded-2xl border border-gray-200">
      <p className="text-sm text-gray-500 mb-2">Preview Email</p>
      <div className="space-y-2">
        <div className="h-4 w-36 bg-gray-200 rounded" />
        <div className="h-4 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded" />
      </div>
      <div className="mt-2 text-gray-700 text-sm">
        Hi Investors 👋 <br />
        This month we grew MRR by 18%, added 240 new users, and launched our new
        AI feature.
      </div>
    </Card>
  );
}

// Step 3: Fake send preview
export function SendPreview() {
  return (
    <Card className="h-56 p-6 bg-white shadow-md rounded-2xl border border-gray-200 flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-2">Send To</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">Investor A</span>
            <span className="text-gray-400 text-xs">✓</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">Investor B</span>
            <span className="text-gray-400 text-xs">✓</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">Investor C</span>
            <span className="text-gray-400 text-xs">✓</span>
          </div>
        </div>
      </div>
      <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg text-sm font-medium">
        Send Update 
      </button>
    </Card>
  );
}
