import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="Digital Agency India" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-display font-bold text-base text-gradient">Digital Agency India</div>
                <div className="text-xs text-gray-500">digital_agency.in</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Transforming ideas into powerful digital solutions. Your trusted technology partner in India.
            </p>
            <div className="flex gap-3">
              {[
                { label: "in", href: "#", color: "bg-blue-600" },
                { label: "ig", href: "#", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
                { label: "fb", href: "#", color: "bg-blue-700" },
                { label: "tw", href: "#", color: "bg-sky-500" },
              ].map((s) => (
                <a key={s.label} href={s.href} className={`w-8 h-8 ${s.color} rounded-lg flex items-center justify-center text-white text-xs font-bold uppercase hover:scale-110 transition-transform`}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[["Home", "/"], ["Services", "/services"], ["Projects", "/projects"], ["Careers", "/careers"], ["FAQs", "/faqs"], ["Contact", "/contact"]].map(([l, p]) => (
                <li key={p}><Link to={p} className="text-gray-400 text-sm hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "App Development", "Software Development", "Graphic Design", "Digital Marketing", "SEO Services", "CRM Solutions"].map((s) => (
                <li key={s}><Link to="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919075018523" className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors">
                <span>📞</span> +91 9075018523
              </a>
              <a href="mailto:info@digital_agency.in" className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors">
                <span>✉️</span> info@digital_agency.in
              </a>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <span>📍</span> India
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              <a href="tel:+919075018523" className="flex-1 text-center py-2 px-3 rounded-lg bg-primary/20 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/30 transition-all">
                📞 Call
              </a>
              <a href="https://wa.me/919075018523" target="_blank" rel="noreferrer" className="flex-1 text-center py-2 px-3 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/30 transition-all">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Digital Agency India. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs">Built with ❤️ in India • digital_agency.in</p>
        </div>
      </div>
    </footer>
  );
}
