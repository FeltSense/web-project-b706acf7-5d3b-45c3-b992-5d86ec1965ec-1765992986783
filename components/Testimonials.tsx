'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'VP of Engineering, TechVenture',
    quote: 'Synapse transformed how our team collaborates. We shipped features 40% faster.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    company: 'TechVenture',
  },
  {
    name: 'Maya Patel',
    role: 'Product Director, CloudScale',
    quote: 'The integration was seamless. Our developers were productive on day one.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    company: 'CloudScale',
  },
  {
    name: 'James Morrison',
    role: 'CTO, InnovateLabs',
    quote: 'Best decision we made. Synapse became the backbone of our infrastructure.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    company: 'InnovateLabs',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by leading tech companies
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join hundreds of teams that use Synapse to build faster, ship smarter, and scale with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                <span className="text-xs font-medium text-slate-500">{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
