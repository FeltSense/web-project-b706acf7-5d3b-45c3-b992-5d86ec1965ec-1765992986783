'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Nexus
            </Link>
            <p className="text-slate-400 mt-4">
              Next-generation technology platform for modern teams.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-violet-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-slate-400 hover:text-violet-600 transition">
                About
              </Link>
              <Link href="#services" className="block text-slate-400 hover:text-violet-600 transition">
                Services
              </Link>
              <Link href="#testimonials" className="block text-slate-400 hover:text-violet-600 transition">
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-3">
              <Link href="#contact" className="block text-slate-400 hover:text-violet-600 transition">
                Contact
              </Link>
              <Link href="#pricing" className="block text-slate-400 hover:text-violet-600 transition">
                Pricing
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-violet-600 transition">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-slate-400 hover:text-violet-600 transition">
                Privacy
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-violet-600 transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
