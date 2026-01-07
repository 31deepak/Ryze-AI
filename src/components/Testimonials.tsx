import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Got back so many hours each week from reporting. The AI handles everything I used to spend days on.",
    author: "Marketing Director",
    company: "E-commerce Brand",
    result: "+63% ROAS",
  },
  {
    quote: "We can now do audits for potential clients 5x faster. It's become our secret weapon for closing deals.",
    author: "Agency Owner",
    company: "Digital Marketing Agency",
    result: "5x Faster Audits",
  },
  {
    quote: "CTR basically doubled after Ryze AI identified and fixed our campaign structure. The results speak for themselves.",
    author: "Performance Marketer",
    company: "SaaS Company",
    result: "2x CTR Increase",
  },
  {
    quote: "ROAS up 45% just from identifying wasted spend. We're now spending smarter, not harder.",
    author: "Growth Lead",
    company: "B2B Tech Startup",
    result: "+45% ROAS",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-cyan-400">Marketing Leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how businesses and agencies are transforming their advertising performance with Ryze AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cyan-400 opacity-50" />
              </div>

              <p className="text-lg text-slate-200 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold text-sm">{testimonial.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
