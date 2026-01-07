import { Search, Lightbulb, TrendingUp, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Continuous Analysis',
    description: 'AI scans your ad accounts 24/7, identifying optimization opportunities and performance issues instantly.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Recommendations',
    description: 'Get actionable insights on keyword bids, budget allocation, creative performance, and audience targeting.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Execution',
    description: 'AI automatically implements optimizations like pausing low performers and boosting winning campaigns.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Watch your ROAS improve while reducing wasted spend and freeing up hours of manual work each week.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How Ryze AI Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Set it up once, then let AI handle the rest. It's that simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent -ml-4"></div>
              )}
              <div className="relative bg-slate-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
