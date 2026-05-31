import { useState } from "react";
import { careers } from "../data";

export default function Careers() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", position: "", resume: null });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", mobile: "", position: "", resume: null });
    setSelected(null);
  };

  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag mb-4">Join Our Team</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
            Build Your Career With <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Join a passionate team of designers, developers, and marketers creating next-gen digital products.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: "🏠", label: "Remote Friendly" },
            { icon: "📈", label: "Growth Opportunities" },
            { icon: "🎓", label: "Learning Budget" },
            { icon: "🎉", label: "Fun Culture" },
          ].map((p) => (
            <div key={p.label} className="glass rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="text-sm font-semibold text-gray-300">{p.label}</div>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {careers.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-7 card-hover group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">{c.title}</h3>
                <span className="tag text-xs">{c.type}</span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                <span>📍 {c.loc}</span>
                <span>🏆 {c.exp}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {c.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">{s}</span>
                ))}
              </div>
              <button
                onClick={() => setSelected(c.title)}
                className="btn-primary w-full text-sm"
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="apply-form" className="glass rounded-3xl p-8 md:p-12 neon-border max-w-2xl mx-auto">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Application Sent!</h3>
              <p className="text-gray-400">We'll review your application and get back to you within 2-3 business days.</p>
            </div>
          ) : (
            <>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">Apply Now</h2>
              <p className="text-gray-400 mb-8">Fill the form below and we'll get back to you.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label>Full Name *</label>
                  <input required placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label>Email Address *</label>
                  <input required type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
                <div>
                  <label>Mobile Number *</label>
                  <input required placeholder="+91 XXXXX XXXXX" value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
                </div>
                <div>
                  <label>Position Applying For *</label>
                  <select required value={form.position} onChange={e => setForm({...form, position: e.target.value})}>
                    <option value="">Select a position</option>
                    {careers.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                  </select>
                </div>
                <div>
                  <label>Upload Resume (PDF/DOC) *</label>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={e => setForm({...form, resume: e.target.files[0]})} />
                </div>
                <button type="submit" className="btn-primary w-full">Submit Application 🚀</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
