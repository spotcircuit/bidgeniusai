import Image from 'next/image'

const DataSources = [
  {
    name: 'SAM.gov',
    description: 'Official source for U.S. federal RFPs and procurement notices',
    features: [
      'Real-time federal contract opportunities',
      'Comprehensive RFP documentation',
      'Official government source',
      'Free with API key registration'
    ],
    status: 'Integrated',
    icon: '🏛️'
  },
  {
    name: 'Data.gov',
    description: 'Central hub for government procurement datasets',
    features: [
      'Various procurement datasets',
      'Historical contract data',
      'Public accessibility',
      'Multiple data formats'
    ],
    status: 'Coming Soon',
    icon: '📊'
  },
  {
    name: 'FPDS-NG',
    description: 'Federal Procurement Data System – Next Generation',
    features: [
      'Detailed federal procurement activity',
      'Historical spending data',
      'Procurement trends analysis',
      'Free API access'
    ],
    status: 'Planned',
    icon: '📈'
  },
  {
    name: 'USASpending.gov',
    description: 'Comprehensive federal spending data platform',
    features: [
      'Contract award information',
      'Agency spending patterns',
      'Detailed financial data',
      'Regular data updates'
    ],
    status: 'Planned',
    icon: '💰'
  }
]

export default function DataSourcesPage() {
  return (
    <div className="bg-[#2A2F8F] min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Data Sources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We aggregate RFP data from multiple authoritative government sources to provide comprehensive coverage of opportunities.
          </p>
          <div className="w-24 h-1 bg-[#4285F4] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {DataSources.map((source) => (
            <div 
              key={source.name}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{source.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    {source.name}
                    <span className={`ml-3 text-sm px-2 py-1 rounded-full ${
                      source.status === 'Integrated' 
                        ? 'bg-green-500/20 text-green-400'
                        : source.status === 'Coming Soon'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {source.status}
                    </span>
                  </h3>
                  <p className="text-[#99CCFF] mt-1">{source.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {source.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform continuously monitors these sources to provide you with the most up-to-date and relevant RFP opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}
