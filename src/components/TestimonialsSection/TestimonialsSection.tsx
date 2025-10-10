'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder @ SaaSly',
    text: 'Updatr saves me hours every month. My investors love the clean updates.',
    avatar: '/avatars/aarav.jpg', // put your own avatar images in /public/avatars
  },
  {
    name: 'Sofia Patel',
    role: 'Angel Investor',
    text: 'Investor updates are finally clear and consistent. A must-have for any founder.',
    avatar: '/avatars/sofia.jpg',
  },
  {
    name: 'Rahul Gupta',
    role: 'CEO @ MetricsHub',
    text: 'Our team sends updates 3× faster and looks way more professional.',
    avatar: '/avatars/rahul.jpg',
  },
];

const logos = [
  '/logos/logo1.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/logo4.svg',
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-24 mb-24">
      {/* Logos row */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-70">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Image src={logo} alt={`Logo ${i + 1}`} width={120} height={40} className="h-8 w-auto object-contain" />
          </motion.div>
        ))}
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white border border-indigo-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={60}
              height={60}
              className="rounded-full mb-4"
            />
            <p className="text-slate-600 text-sm mb-4 italic">“{t.text}”</p>
            <h4 className="text-slate-800 font-semibold">{t.name}</h4>
            <span className="text-slate-500 text-xs">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
