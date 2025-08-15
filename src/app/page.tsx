'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeView, setActiveView] = useState<'brands' | 'creators'>('brands')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Toggle */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveView('brands')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeView === 'brands'
                    ? 'bg-forge-orange text-white shadow-md'
                    : 'text-forge-charcoal hover:text-forge-orange'
                }`}
              >
                For Brands
              </button>
              <button
                onClick={() => setActiveView('creators')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeView === 'creators'
                    ? 'bg-forge-orange text-white shadow-md'
                    : 'text-forge-charcoal hover:text-forge-orange'
                }`}
              >
                For Creators
              </button>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="text-center">
            {activeView === 'brands' ? (
              // For Brands View
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-forge-charcoal mb-6">
                  Connect with the Right Creator
                  <span className="block text-forge-orange">for Your Brand</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  We help brands connect with authentic, high-impact creators.
                </p>

                {/* Featured Creator Card */}
                <div className="max-w-2xl mx-auto mb-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-forge-orange">
                    <Image
                      src="/assets/images/plumbhero.jpeg"
                      alt="Plumb Hero Profile Picture"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-forge-charcoal mb-4">Featured Creator</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-forge-orange mb-1">1M+</div>
                      <div className="text-sm text-gray-600">Total Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-forge-orange mb-1">50M+</div>
                      <div className="text-sm text-gray-600">Video Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-forge-orange mb-1">3</div>
                      <div className="text-sm text-gray-600">Platforms</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-forge-charcoal mb-2">Focus Areas:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-forge-orange text-white px-3 py-1 rounded-full text-sm font-medium">Trades</span>
                      <span className="bg-forge-orange text-white px-3 py-1 rounded-full text-sm font-medium">Tools</span>
                      <span className="bg-forge-orange text-white px-3 py-1 rounded-full text-sm font-medium">Blue-Collar Industry</span>
                    </div>
                  </div>
                </div>

                {/* Future Creators Placeholder */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-12">
                  <div className="text-gray-500 text-lg font-medium">More amazing creators coming soon...</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors">
                    Start Your Campaign
                  </Link>
                  <Link href="/clients" className="border-2 border-forge-orange text-forge-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange hover:text-white transition-colors">
                    View Portfolio
                  </Link>
                </div>
              </>
            ) : (
              // For Creators View
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-forge-charcoal mb-6">
                  Forge Stronger
                  <span className="block text-forge-orange">Brand Partnerships</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  We negotiate, manage, and grow your brand deals so you can focus on creating.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-xl font-bold text-forge-charcoal mb-3">Deal Negotiation & Contract Management</h3>
                    <p className="text-gray-600">We handle the business side so you get fair deals and clear terms.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-forge-charcoal mb-3">Brand Matchmaking</h3>
                    <p className="text-gray-600">Connect with brands that align with your content and audience.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-bold text-forge-charcoal mb-3">Content Performance Tracking</h3>
                    <p className="text-gray-600">Data-driven insights to optimize your content and partnerships.</p>
                  </div>
                </div>

                {/* Brand Logos Placeholder */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-forge-charcoal mb-6">Brands in Our Target Niche</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-100 rounded-lg h-20 flex items-center justify-center border border-gray-200">
                        <span className="text-gray-400 font-medium">Brand Logo {i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors">
                    Apply for Representation
                  </Link>
                  <Link href="/services" className="border-2 border-forge-orange text-forge-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange hover:text-white transition-colors">
                    Learn More
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Forge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forge-charcoal mb-4">
              Why Choose Forge?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeView === 'brands' 
                ? 'We connect you with authentic creators who drive real results'
                : 'We handle the business so you can focus on what you do best'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeView === 'brands' ? (
              <>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Authentic Reach</h3>
                  <p className="text-gray-600">Our creators have genuine engagement with audiences that trust their recommendations</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Proven Results</h3>
                  <p className="text-gray-600">Track record of successful campaigns with measurable ROI</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Full Service</h3>
                  <p className="text-gray-600">From strategy to execution, we handle every aspect of your creator partnerships</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Better Deals</h3>
                  <p className="text-gray-600">We negotiate higher rates and better terms than you could get on your own</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">⏰</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Save Time</h3>
                  <p className="text-gray-600">No more back-and-forth emails or contract headaches</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-forge-charcoal mb-3">Grow Faster</h3>
                  <p className="text-gray-600">Focus on creating while we handle the business side of your career</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forge-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {activeView === 'brands' 
              ? 'Ready to Launch Your Next Campaign?'
              : 'Ready to Level Up Your Creator Career?'
            }
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            {activeView === 'brands'
              ? 'Connect with creators who can authentically represent your brand and drive real results.'
              : 'Join our roster and let us handle the business while you focus on creating amazing content.'
            }
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-forge-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            {activeView === 'brands' ? 'Get Started Today' : 'Apply Now'}
          </Link>
        </div>
      </section>
    </div>
  )
}