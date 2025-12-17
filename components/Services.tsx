'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Lightning-Fast Infrastructure',
    description: 'Deploy globally with sub-100ms latency. Our edge computing network ensures your applications run at the speed of thought, not the speed of geography.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, zero-trust architecture, and real-time threat detection. Protect what matters with security built into every layer.',
  },
  {
    icon: Rocket,
    title: 'Seamless Scaling',
    description: 'From startup to unicorn. Auto-scale from 10 to 10 million users without touching a line of code. Pay only for what you use.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Understand your users instantly. Get actionable insights with millisecond precision. Make data-driven decisions at the speed of your business.',
  },
];

function ServiceCard({
  service,
  index,
  isLarge,
}: {
  service: (typeof services)[0];
  index: number;
  isLarge: boolean;
}) {
  const IconComponent = service.icon;

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${
        isLarge ? 'md:col-span-2' : ''
      } ${
        index === 3 ? 'bg-slate-900' : 'bg-white'
      } rounded-3xl shadow-sm ${
        index === 3 ? 'border border-slate-800' : 'border border-slate-100'
      } p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-80`}
    >
      <div
        className={`${
          index === 3
            ? 'bg-violet-600'
            : 'bg-violet-50'
        } rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}
      >
        <IconComponent
          className={`w-8 h-8 ${
            index === 3 ? 'text-white' : 'text-violet-600'
          }`}
        />
      </div>
      <h3
        className={`${
          isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        } font-semibold tracking-tight leading-[1.3] ${
          index === 3 ? 'text-white' : 'text-slate-900'
        } mb-4`}
      >
        {service.title}
      </h3>
      <p
        className={`${
          index === 3 ? 'text-slate-400 text-lg' : 'text-slate-500'
        } leading-relaxed`}
      >
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Everything you need to scale
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Built for teams that refuse to compromise. Infrastructure that grows with your ambition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isLarge={index === 0 || index === 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}