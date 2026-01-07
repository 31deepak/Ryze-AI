const integrations = [
  { name: 'Google Ads', color: 'from-blue-500 to-blue-600' },
  { name: 'Meta Ads', color: 'from-blue-600 to-blue-700' },
  { name: 'LinkedIn', color: 'from-cyan-600 to-cyan-700' },
  { name: 'Shopify', color: 'from-green-500 to-green-600' },
  { name: 'Google Analytics', color: 'from-orange-500 to-orange-600' },
  { name: 'Amazon Ads', color: 'from-orange-600 to-yellow-600' },
  { name: 'ChatGPT', color: 'from-teal-500 to-teal-600' },
  { name: 'Perplexity', color: 'from-slate-600 to-slate-700' },
];

export default function Integrations() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Works With Your <span className="text-cyan-600">Favorite Platforms</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Seamlessly integrate with all major advertising and analytics platforms. One dashboard to rule them all.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-transparent hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {integration.name.charAt(0)}
              </div>
              <div className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                {integration.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            And many more integrations coming soon. <a href="#" className="text-cyan-600 font-semibold hover:underline">Request an integration →</a>
          </p>
        </div>
      </div>
    </div>
  );
}
