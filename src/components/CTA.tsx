import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free account audit',
  'No credit card required',
  'Setup in under 5 minutes',
  'Cancel anytime',
];

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Advertising?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join 2,000+ businesses already using AI to optimize their ad campaigns and maximize ROI.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 mx-auto">
            <span>Start Free Audit Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-slate-400 text-sm mt-4">
            Trusted by agencies and businesses worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
