import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,000+', label: 'Active Clients' },
  { icon: TrendingUp, value: '700+', label: 'Agency Partners' },
  { icon: Globe, value: '23+', label: 'Countries' },
  { icon: DollarSign, value: '$500M+', label: 'Ad Spend Managed' },
];

export default function Stats() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
