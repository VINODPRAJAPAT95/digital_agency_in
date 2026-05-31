import { useState } from "react";
import { services } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag mb-4">Get In Touch</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
            Let's Build Something <span className="text-gradient">Together</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Tell us about your project and we'll provide a free consultation and quote within 24 hours.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="tel:+919075018523" className="flex items-center justify-center gap-3 glass rounded-xl px-8 py-4 border border-primary/30 hover:bg-primary/10 transition-all">
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <div className="text-xs text-gray-500">Call Us</div>
              <div className="font-display font-bold text-white">+91 9075018523</div>
            </div>
          </a>
          <a href="https://wa.me/919075018523" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 glass rounded-xl px-8 py-4 border border-green-500/30 hover:bg-green-500/10 transition-all">
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <div className="text-xs text-gray-500">WhatsApp</div>
              <div className="font-display font-bold text-white">Chat Now</div>
            </div>
          </a>
          <a href="mailto:info@digital_agency.in" className="flex items-center justify-center gap-3 glass rounded-xl px-8 py-4 border border-secondary/30 hover:bg-secondary/10 transition-all">
            <span className="text-2xl">✉️</span>
            <div className="text-left">
              <div className="text-xs text-gray-500">Email</div>
              <div className="font-display font-bold text-white">info@digital_agency.in</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-7">
              <h3 className="font-display font-bold text-xl text-white mb-6">Company Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <div className="font-semibold text-white">Digital Agency India</div>
                    <div className="text-gray-400 text-sm">digital_agency.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold text-white">+91 9075018523</div>
                    <div className="text-gray-400 text-sm">Mon–Sat, 9am–7pm IST</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold text-white">info@digital_agency.in</div>
                    <div className="text-gray-400 text-sm">Reply within 2–4 hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold text-white">India</div>
                    <div className="text-gray-400 text-sm">Serving clients globally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                title="Digital Agency India Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.04088282736!2d73.72226827062502!3d18.524564153491667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 neon-border">
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Inquiry Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. We'll get back to you within 24 hours with a free consultation.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-white mb-2">Send Inquiry</h2>
                  <p className="text-gray-400 text-sm mb-7">Free consultation. No obligations.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label>Full Name *</label>
                        <input required placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div>
                        <label>Email Address *</label>
                        <input required type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label>Phone Number *</label>
                        <input required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      </div>
                      <div>
                        <label>Service Required</label>
                        <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label>Message *</label>
                      <textarea required rows={5} placeholder="Tell us about your project, budget, and timeline..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="submit" className="btn-primary flex-1">Send Inquiry 🚀</button>
                      <a href="tel:+919075018523" className="btn-outline text-center">📞 Call Now</a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
