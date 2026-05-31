import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { services, techStack, testimonials } from "../data";

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      a: Math.random() * 0.5 + 0.2,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14,165,233,${p.a})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(14,165,233,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" />;
}

function StatCard({ num, label }) {
  return (
    <div className="glass rounded-2xl p-6 text-center neon-border hover:neon-glow transition-all duration-300">
      <div className="font-display font-bold text-3xl text-gradient mb-1">{num}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

function FloatingIcon({ icon, style }) {
  return (
    <div className="absolute w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl animate-float opacity-70" style={style}>
      {icon}
    </div>
  );
}

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[idx];
  return (
    <div className="glass rounded-2xl p-8 neon-border max-w-2xl mx-auto text-center">
      <div className="text-3xl mb-4">{"⭐".repeat(t.rating)}</div>
      <p className="text-gray-300 leading-relaxed mb-6 text-lg italic">"{t.review}"</p>
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white font-display">
          {t.initials}
        </div>
        <div className="text-left">
          <div className="font-semibold font-display text-white">{t.name}</div>
          <div className="text-gray-400 text-sm">{t.company}</div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-primary w-6" : "bg-white/20"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <ParticleCanvas />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Floating tech icons */}
        <FloatingIcon icon="⚛️" style={{ top: "20%", left: "5%", animationDelay: "0s" }} />
        <FloatingIcon icon="📱" style={{ top: "40%", left: "2%", animationDelay: "1s" }} />
        <FloatingIcon icon="🚀" style={{ top: "70%", left: "7%", animationDelay: "2s" }} />
        <FloatingIcon icon="💻" style={{ top: "20%", right: "5%", animationDelay: "0.5s" }} />
        <FloatingIcon icon="🎨" style={{ top: "50%", right: "3%", animationDelay: "1.5s" }} />
        <FloatingIcon icon="☁️" style={{ top: "75%", right: "8%", animationDelay: "2.5s" }} />

        <div className="container-custom relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-primary/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300 font-mono">🇮🇳 India's Premium Digital Agency</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-5xl mx-auto">
            Transforming Ideas Into{" "}
            <span className="text-gradient">Powerful Digital</span>{" "}
            Solutions
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We build websites, mobile applications, software products, and digital marketing solutions that help businesses grow faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact" className="btn-primary text-base">🚀 Start Your Project</Link>
            <Link to="/projects" className="btn-outline text-base">🎯 View Portfolio</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard num="100+" label="Projects Delivered" />
            <StatCard num="50+" label="Happy Clients" />
            <StatCard num="5+" label="Years Experience" />
            <StatCard num="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="tag mb-4">What We Do</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">From web development to digital marketing, we cover every digital need for your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s) => (
              <div key={s.id} className="glass rounded-2xl p-6 card-hover group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc.slice(0, 80)}...</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold font-mono text-sm">From {s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="tag mb-4">Our Stack</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-4">
              Technologies We <span className="text-gradient">Use</span>
            </h2>
          </div>
          {Object.entries(techStack).map(([cat, techs]) => (
            <div key={cat} className="mb-10">
              <h3 className="font-display font-semibold text-primary mb-4 text-sm uppercase tracking-wider">{cat}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {techs.map((t) => (
                  <div key={t.name} className="tech-badge">
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-xs text-gray-300 text-center">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="tag mb-4">Why Us</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-4">
              Why <span className="text-gradient">Choose</span> Digital Agency India
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👨‍💻", title: "Experienced Team", desc: "5+ years of experience building digital products across diverse industries." },
              { icon: "⚡", title: "Modern Technologies", desc: "We use cutting-edge tech stacks to build fast, scalable, and future-proof solutions." },
              { icon: "💰", title: "Affordable Pricing", desc: "Premium quality at competitive Indian market prices. Best ROI guaranteed." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We respect deadlines. 98% of our projects are delivered on or before time." },
              { icon: "🛟", title: "Dedicated Support", desc: "24/7 support with dedicated account managers for every client." },
              { icon: "✅", title: "Quality Assurance", desc: "Rigorous QA testing before every launch. Zero-bug guarantee on delivery." },
            ].map((f) => (
              <div key={f.title} className="glass rounded-2xl p-7 card-hover border border-white/5">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="tag mb-4">Client Love</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden neon-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Ready to Build Something <span className="text-gradient">Amazing?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let's discuss your project and create a digital solution that drives real results.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">Get Free Consultation 🚀</Link>
                <a href="tel:+919075018523" className="btn-outline">📞 +91 9075018523</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
