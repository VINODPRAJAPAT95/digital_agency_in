import { Link } from "react-router-dom";
import { pricingPlans } from "../data";

export default function Pricing() {
  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag mb-4">Pricing</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            No hidden fees. No surprises. Choose the plan that fits your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 flex flex-col relative overflow-hidden ${
              plan.highlight
                ? "bg-gradient-to-b from-primary/20 to-secondary/20 border-2 border-primary/50 shadow-xl shadow-primary/20"
                : "glass border border-white/10"
            }`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              )}
              {plan.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">⭐ Most Popular</span>
                </div>
              )}
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>
                <div className="font-display font-bold text-4xl text-gradient mb-6">{plan.price}</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`text-center py-3 px-6 rounded-xl font-display font-bold transition-all ${
                plan.highlight
                  ? "btn-primary"
                  : "btn-outline"
              }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need something specific? We build custom packages for every budget.</p>
          <Link to="/contact" className="btn-primary">Get Custom Quote</Link>
        </div>
      </div>
    </div>
  );
}
