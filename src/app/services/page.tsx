import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive talent management services designed to elevate creators 
              and connect brands with authentic voices.
            </p>
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From content strategy to brand partnerships, we provide everything you need to build a successful creator career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Connect with brands that align with your values and audience. We negotiate deals, 
                manage contracts, and ensure fair compensation for your work.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Sponsored content opportunities</li>
                <li>• Long-term brand ambassador programs</li>
                <li>• Product collaboration deals</li>
                <li>• Campaign performance tracking</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                Data-driven strategies to grow your following, increase engagement, 
                and build a loyal community around your content.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Audience analysis and insights</li>
                <li>• Content optimization strategies</li>
                <li>• Cross-platform growth planning</li>
                <li>• Trending hashtag research</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">🎬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Creation Support</h3>
              <p className="text-gray-600 mb-4">
                Creative resources, equipment access, and production support to help you 
                create high-quality content that stands out.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Creative brainstorming sessions</li>
                <li>• Equipment and studio access</li>
                <li>• Video editing support</li>
                <li>• Trend forecasting and planning</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Development</h3>
              <p className="text-gray-600 mb-4">
                Build sustainable income streams beyond social media through merchandise, 
                courses, speaking engagements, and more.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Merchandise development</li>
                <li>• Course creation guidance</li>
                <li>• Speaking opportunity booking</li>
                <li>• Personal brand strategy</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive performance tracking across all platforms with actionable 
                insights to optimize your content strategy.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• ROI tracking and analysis</li>
                <li>• Audience demographic insights</li>
                <li>• Competitive analysis</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal & Protection</h3>
              <p className="text-gray-600 mb-4">
                Protect your brand and content with comprehensive legal support, 
                contract reviews, and intellectual property guidance.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Contract negotiation and review</li>
                <li>• Copyright protection assistance</li>
                <li>• Crisis management support</li>
                <li>• Platform policy guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with authentic creators who align with your brand values and reach your target audience effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Influencer Matching</h3>
              <p className="text-gray-600 mb-6">
                We connect you with creators who genuinely align with your brand values and have authentic engagement with your target demographic.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Detailed audience analysis and demographic matching
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Brand alignment assessment and values matching
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Performance history and engagement quality review
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-6">📋</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Campaign Management</h3>
              <p className="text-gray-600 mb-6">
                End-to-end campaign management from strategy development to execution and performance analysis.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Campaign strategy and creative brief development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Content approval and quality assurance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Performance tracking and optimization
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">ROI Optimization</h3>
              <p className="text-gray-600 mb-6">
                Maximize your influencer marketing ROI with data-driven insights and strategic optimization.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Real-time performance monitoring and reporting
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  A/B testing and content optimization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Audience sentiment analysis and feedback
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partnership Development</h3>
              <p className="text-gray-600 mb-6">
                Build long-term relationships with creators for sustained brand growth and authentic storytelling.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Long-term ambassador program development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Collaborative product development opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Exclusive partnership and co-creation deals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results for creators and brands alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We start by understanding your goals, audience, and brand vision through detailed consultation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Develop a customized strategy based on data insights and industry best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                Implement the strategy with careful attention to quality, timing, and brand alignment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">
                Continuously monitor performance and refine strategies for maximum impact and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you're a creator looking to monetize your content or a brand seeking authentic partnerships, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Your Journey
            </Link>
            <Link href="/clients" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}