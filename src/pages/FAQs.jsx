import { useState } from "react";
import { faqs } from "../data";

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag mb-4">FAQ</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-5">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Got questions? We've got answers. If you don't find what you're looking for, reach out to us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faqs.map((f, i) => (
            <div key={i} className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "neon-border" : "border border-white/5"}`}>
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-white pr-4">{f.q}</span>
                <span className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`accordion-content ${open === i ? "open" : ""}`}>
                <p className="text-gray-400 leading-relaxed px-6 pb-6">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center neon-border max-w-2xl mx-auto">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="font-display font-bold text-2xl mb-3">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6">Our team is available 24/7 to help you with any queries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Send a Message</a>
            <a href="https://wa.me/919075018523" target="_blank" rel="noreferrer" className="btn-outline">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
