export default function Services() {
  const servicesList = [
    { title: "Custom Shopify Development", desc: "Hand-coded themes built without clunky apps to keep your store lightning fast." },
    { title: "Headless Commerce (Next.js)", desc: "Ultra-premium, blazingly fast frontend experiences for global brands." },
    { title: "UI/UX Conversion Design", desc: "Wireframing and interfaces designed strictly to improve your add-to-cart rates." },
    { title: "Page Speed Optimization", desc: "Crushing heavy scripts and heavy images to push your Lighthouse score straight to 95+." },
    { title: "Third-Party API Integration", desc: "Seamlessly connecting ERPs, custom CRMs, and complex loyalty programs." },
    { title: "SEO & Core Web Vitals Audit", desc: "Making sure your products rank organically on Google and AI search engines." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Everything you need to outperform your competition in modern e-commerce.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}