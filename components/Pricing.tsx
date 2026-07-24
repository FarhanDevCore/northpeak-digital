export default function Pricing() {
  const tiers = [
    { name: "Growth Launchpad", price: "$1,999", desc: "Perfect for new brands.", features: ["Standard custom Shopify setup", "Essential integrations", "Fully responsive design"] },
    { name: "Scale Accelerator", price: "$3,999", desc: "For established brands.", features: ["Advanced performance optimization", "Custom features & apps", "Conversion rate tuning"], popular: true },
    { name: "Enterprise Headless", price: "$7,499", desc: "Full custom stack.", features: ["Full Next.js frontend", "Custom headless backend", "Maximum scalability & 24/7 support"] }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Choose the perfect plan to accelerate your e-commerce growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div key={index} className={`flex flex-col p-8 rounded-2xl border ${tier.popular ? 'bg-slate-900 border-blue-500 relative shadow-xl shadow-blue-500/10' : 'bg-slate-900/50 border-slate-800'} transition-transform duration-300 hover:-translate-y-1`}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{tier.desc}</p>
              <p className="text-4xl font-extrabold mb-6">{tier.price}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-slate-300 text-sm flex items-center gap-3">
                    <span className="text-blue-400 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${tier.popular ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}