'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Real-time analytics dashboard',
  'Advanced API access',
  'Priority support (24/7)',
  'Custom integrations',
  'Unlimited team members',
  'Enterprise-grade security',
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 29;
  const yearlyPrice = 290;
  const yearlySavings = monthlyPrice * 12 - yearlyPrice;

  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const priceLabel = isYearly ? '/year' : '/month';

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Start free. Scale as you grow. No credit card required.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${
              isYearly ? 'bg-violet-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 inline-block bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full"
            >
              Save ${yearlySavings}
            </motion.span>
          )}
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 hover:shadow-md transition-all duration-300"
        >
          {/* Price Display */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl md:text-7xl font-bold text-slate-900">
                ${displayPrice}
              </span>
              <span className="text-lg text-slate-500 font-semibold">
                {priceLabel}
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-3">
              {isYearly ? 'Billed once per year' : 'Billed monthly'}
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00')}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md mb-4"
          >
            Get Started Now
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => (window.location.href = '#contact')}
            className="w-full border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
          >
            Talk to Sales
          </button>

          {/* Footer Text */}
          <p className="text-center text-xs text-slate-500 mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 font-semibold mb-4">
            Everything you need to build, ship, and scale
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['API Access', 'Analytics', 'Support', 'Integrations', 'Security'].map((item) => (
              <span
                key={item}
                className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
