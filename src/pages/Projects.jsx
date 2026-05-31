import { useState } from "react";
import { projects } from "../data";

const cats = ["All", "Websites", "Mobile Apps", "Software Products", "Branding", "Digital Marketing"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag mb-4">Portfolio</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A showcase of our best work across web, mobile, software, branding, and marketing.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass text-gray-400 hover:text-primary hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="glass rounded-2xl overflow-hidden card-hover group">
              {/* Image/Graphic */}
              <div className={`h-48 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                <span className="text-6xl">{p.icon}</span>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-3 right-3">
                  <span className="tag text-xs">{p.cat}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-primary text-xs font-semibold mb-3">{p.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                  ))}
                </div>
                <button className="w-full py-2 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-all">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 inline-block">
            <p className="text-gray-400 mb-4">Have a project in mind?</p>
            <a href="/contact" className="btn-primary">Start Your Project 🚀</a>
          </div>
        </div>
      </div>
    </div>
  );
}
