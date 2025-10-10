'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-24 mb-24">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Choose the plan that fits your team. No hidden fees, cancel anytime.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <motion.div
          className="bg-white border border-indigo-100 rounded-2xl shadow-sm p-6 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Starter</h3>
          <p className="text-slate-500 mb-4">For solo founders & small updates</p>
          <div className="text-3xl font-bold text-slate-800 mb-4">$0</div>
          <ul className="space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> Send up to 3 updates/month</li>
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> Basic AI drafting</li>
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> 100 investor emails</li>
          </ul>
          <Button variant="outline" className="mt-6 rounded-xl">Get Started</Button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          className="bg-indigo-600 text-white border border-indigo-600 rounded-2xl shadow-lg p-6 flex flex-col scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-1">Pro</h3>
          <p className="opacity-80 mb-4">For growing teams & frequent updates</p>
          <div className="text-3xl font-bold mb-4">$29<span className="text-base font-medium">/mo</span></div>
          <ul className="space-y-2 text-sm flex-1">
            <li className="flex items-center gap-2"><Check size={16}/> Unlimited updates</li>
            <li className="flex items-center gap-2"><Check size={16}/> Advanced AI drafting</li>
            <li className="flex items-center gap-2"><Check size={16}/> 5,000 investor emails</li>
            <li className="flex items-center gap-2"><Check size={16}/> Analytics dashboard</li>
          </ul>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 rounded-xl font-semibold">Start Pro</Button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          className="bg-white border border-indigo-100 rounded-2xl shadow-sm p-6 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Enterprise</h3>
          <p className="text-slate-500 mb-4">Custom needs & dedicated support</p>
          <div className="text-3xl font-bold text-slate-800 mb-4">Contact Us</div>
          <ul className="space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> Unlimited everything</li>
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> Dedicated CSM</li>
            <li className="flex items-center gap-2"><Check className="text-indigo-500" size={16}/> Custom integrations</li>
          </ul>
          <Button variant="outline" className="mt-6 rounded-xl">Contact Sales</Button>
        </motion.div>
      </div>
    </section>
  );
}
