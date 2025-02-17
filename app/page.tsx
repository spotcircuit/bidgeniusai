import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2A2F8F]">
      {/* Header/Navigation */}
      <header className="bg-[#1E2562]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[120px] h-[120px] relative">
                <Image
                  src="/images/bidgeniuslogo.png"
                  alt="BidGenius AI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <nav className="flex space-x-8">
              <a href="#features" className="text-white hover:text-blue-200">Features</a>
              <a href="#process" className="text-white hover:text-blue-200">Process</a>
              <a href="#demo" className="text-white hover:text-blue-200">Demo</a>
              <a href="/contact" className="px-4 py-2 rounded-md bg-[#4285F4] text-white hover:bg-blue-400">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#2A2F8F]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your</span>
              <span className="block text-[#99CCFF]">RFP Response Process</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-200">
              AI-powered platform that streamlines government RFP analysis, response generation,
              and compliance management.
            </p>
            <div className="mt-10 relative max-w-2xl mx-auto bg-white p-8 rounded-lg">
              <Image
                src="/images/rfp-transformation.png"
                alt="AI RFP Transformation Process"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bridge Section */}
      <div className="bg-[#1E2562]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
                Bridging the Gap
              </h3>
              <p className="mt-3 text-lg text-gray-200">
                Our AI-driven platform connects traditional RFP processes with modern automation, making proposal management efficient and effective.
              </p>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  src="/images/bridgegap.png"
                  alt="Bridging the RFP Gap"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="bg-[#2A2F8F]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-[#99CCFF] font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              Intelligent RFP Processing
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {/* AI Analysis - Wide Format */}
            <div className="relative bg-white p-6 rounded-lg">
              <Image
                src="/images/rfptransition3.png"
                alt="AI Analysis"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">AI Analysis</h3>
            </div>
            {/* Document Processing and Response Generation in 2 columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative bg-white p-6 rounded-lg">
                <Image
                  src="/images/rfp-transition2.png"
                  alt="Document Processing"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Document Processing</h3>
              </div>
              <div className="relative bg-white p-6 rounded-lg">
                <Image
                  src="/images/rfptransition4.png"
                  alt="Response Generation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Response Generation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Drive Section */}
      <div className="bg-[#1E2562]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  src="/images/aidrive.png"
                  alt="AI-Driven Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-white">
                AI-Driven Excellence
              </h2>
              <p className="mt-3 text-lg text-gray-200">
                Our advanced AI engine processes, analyzes, and generates responses with unprecedented accuracy and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Target Section */}
      <div className="bg-[#2A2F8F]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-white">
                Hitting the Mark
              </h2>
              <p className="mt-3 text-lg text-gray-200">
                Precisely target RFP requirements and deliver winning proposals with our AI-powered platform.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg">
                <Image
                  src="/images/targetai.png"
                  alt="Targeted AI Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-[#1E2562]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#99CCFF] font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              Intelligent RFP Processing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
              From document ingestion to final submission, we automate every step of the RFP process.
            </p>
          </div>
        </div>
      </div>

      {/* MVP Sections */}
      <div className="bg-[#2A2F8F]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Development Roadmap
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto"></div>
          </div>
          
          {/* MVP Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MVP 1 Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MVP 1</h3>
                  <p className="text-[#99CCFF]">Document Processing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Automated RFP document ingestion and analysis system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Upload and parse various document formats (PDF, DOC, DOCX)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">OCR capability for scanned documents</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Extract structured data from RFP documents</span>
                </li>
              </ul>
            </div>

            {/* MVP 2 Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MVP 2</h3>
                  <p className="text-[#99CCFF]">Analysis Engine</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Intelligent analysis of RFP requirements and compliance criteria.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Section identification and categorization</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Requirements extraction and classification</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Compliance criteria identification</span>
                </li>
              </ul>
            </div>

            {/* MVP 3 Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MVP 3</h3>
                  <p className="text-[#99CCFF]">Response Generation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                AI-powered proposal response generation and management.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Template management system</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">AI-powered content generation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="text-gray-200">Compliance-focused response drafting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1E2562]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-[#99CCFF]">Transform your RFP process today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="/demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4285F4] hover:bg-blue-400">
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#4285F4] bg-white hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
