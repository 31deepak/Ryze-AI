import { Brain, Clock, TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Optimization',
    description: 'Autonomous AI continuously analyzes and optimizes your campaigns for maximum performance and ROI.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Never miss an opportunity. Our AI works around the clock to audit and improve your ad accounts.',
  },
  {
    icon: Zap,
    title: 'Automated Actions',
    description: 'From pausing underperforming keywords to reallocating budgets, AI handles optimization automatically.',
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Advanced keyword optimization and audience segmentation to reach the right people at the right time.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Boost',
    description: 'Clients see an average of 45-63% improvement in ROAS and significant increases in CTR.',
  },
  {
    icon: BarChart3,
    title: 'Instant Insights',
    description: 'ChatGPT-like interface lets you ask questions and get actionable insights from your marketing data.',
  },
];

export default function Features() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to <span className="text-cyan-600">Scale Your Ads</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful AI capabilities that work together to maximize your advertising performance across all channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-cyan-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
