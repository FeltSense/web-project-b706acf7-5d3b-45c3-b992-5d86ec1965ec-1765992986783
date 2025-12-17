'use client';

import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-24">
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-violet-600/30 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">
              Introducing Nexus Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Ship faster. Scale smarter.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Build, deploy, and monitor production-grade infrastructure in minutes. Nexus handles the complexity so you can focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-violet-600/50 text-white font-semibold rounded-xl hover:bg-violet-600/10 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              See Demo
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-amber-400 rounded-full" />
                ))}
              </div>
              <span>4.9 from 2,400+ reviews</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-700" />
            <span>Join 50,000+ developers</span>
            <div className="hidden sm:block w-px h-6 bg-slate-700" />
            <span>99.99% uptime SLA</span>
          </div>
        </div>

        {/* Dashboard preview image */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-amber-400/10 to-violet-600/20 rounded-2xl blur-2xl opacity-75" />

          {/* Image container */}
          <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80"
              alt="Nexus dashboard showing infrastructure monitoring and deployment controls"
              width={1200}
              height={675}
              priority
              className="w-full h-auto"
            />

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating feature cards */}
          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lg p-6 border border-slate-100 max-w-xs hidden lg:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-violet-600 rounded-full" />
              <span className="font-semibold text-slate-900">Real-time Monitoring</span>
            </div>
            <p className="text-sm text-slate-600">
              Track your entire infrastructure with live metrics and instant alerts
            </p>
          </div>

          <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-6 border border-slate-100 max-w-xs hidden lg:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full" />
              <span className="font-semibold text-slate-900">Auto-scaling</span>
            </div>
            <p className="text-sm text-slate-600">
              Automatically adjust resources based on demand in seconds
            </p>
          </div>
        </div>

        {/* Bottom stats section */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              10M+
            </div>
            <p className="text-slate-400">
              Deployments per month
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              150+
            </div>
            <p className="text-slate-400">
              Countries served
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              &lt; 50ms
            </div>
            <p className="text-slate-400">
              Average latency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
