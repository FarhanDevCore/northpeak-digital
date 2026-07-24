'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-2">Let's Build Something Great</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
            <p className="font-bold text-lg mb-1">✓ Thank you!</p>
            <p className="text-sm text-emerald-700">Your message has been received. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Project Budget</label>
              <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-700">
                <option value="">Select a tier...</option>
                <option value="growth">Growth Launchpad ($1,999)</option>
                <option value="scale">Scale Accelerator ($3,999)</option>
                <option value="enterprise">Enterprise Headless ($7,499)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-md transition-colors text-sm">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}