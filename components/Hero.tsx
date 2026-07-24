export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-24 px-6 md:py-32 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-900/50 mb-6 inline-block">
          Next.js & Shopify Experts
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">High-Converting</span> Shopify Stores That Scale.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop losing customers to slow load times and confusing checkouts. NorthPeak Digital turns ordinary traffic into loyal buyers with custom Next.js & Shopify architecture.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
          Get a Free Store Audit
        </button>
      </div>
    </section>
  );
}