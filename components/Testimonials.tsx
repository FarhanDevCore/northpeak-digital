export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Proven Results</h2>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">+42%</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Average Conversion Increase</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">&lt;1.2s</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Average Page Load Time</p>
          </div>
        </div>

        {/* Client Quote */}
        <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-3xl border border-blue-100/50">
          <p className="text-lg md:text-xl italic text-slate-700 leading-relaxed mb-6">
            "NorthPeak completely rebuilt our checkout flow using Next.js. Our bounce rate dropped instantly, and sales went up by 30% in the first month."
          </p>
          <p className="font-bold text-slate-900">— Sarah K., Founder of AuraGlow</p>
        </div>
      </div>
    </section>
  );
}