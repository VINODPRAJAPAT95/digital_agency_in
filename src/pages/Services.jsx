import { Link } from "react-router-dom";
import { services } from "../data";

export default function Services() {
  return (
    <div className="pt-24 pb-20 relative z-10">
      {/* Header */}
      <div className="container-custom text-center mb-16">
        <div className="orb orb-1" style={{ opacity: 0.08 }} />
        <span className="tag mb-4">Our Services</span>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
          Digital Services That <span className="text-gradient">Drive Growth</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          From design to deployment, we offer end-to-end digital services tailored for Indian businesses at competitive prices.
        </p>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} className="glass rounded-2xl p-7 card-hover group relative overflow-hidden">
              {s.tag && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {s.tag}
                </div>
              )}
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-primary text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Starting from</div>
                  <div className="font-display font-bold text-primary text-lg">{s.price}</div>
                </div>
                <Link to="/contact" className="btn-primary text-sm !py-2 !px-4">Get Quote</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Teaser */}
        <div className="mt-20 glass rounded-3xl p-10 text-center neon-border">
          <h2 className="font-display font-bold text-3xl mb-4">Need a Custom Package?</h2>
          <p className="text-gray-400 mb-6">We create tailored solutions based on your specific requirements and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get Custom Quote</Link>
            <a href="https://wa.me/919075018523" target="_blank" rel="noreferrer" className="btn-outline">💬 WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
