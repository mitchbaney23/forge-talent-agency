'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { featuredCreator } from '@/data/creators'
import {
  IconHandshake,
  IconTarget,
  IconTrendingUp,
  IconBanknote,
  IconClock,
} from '@/components/icons'

function FeatureTile({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 rounded-xl bg-forge-mist text-forge-orange flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-forge-ink mb-3">{title}</h3>
      <p className="text-forge-body leading-body">{children}</p>
    </div>
  )
}

export default function Home() {
  const [activeView, setActiveView] = useState<'brands' | 'creators'>('brands')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Toggle */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-forge-mist border border-forge-line rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveView('brands')}
                aria-pressed={activeView === 'brands'}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeView === 'brands'
                    ? 'bg-white text-forge-orange-dark shadow-sm'
                    : 'text-forge-body hover:text-forge-ink'
                }`}
              >
                For Brands
              </button>
              <button
                onClick={() => setActiveView('creators')}
                aria-pressed={activeView === 'creators'}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeView === 'creators'
                    ? 'bg-white text-forge-orange-dark shadow-sm'
                    : 'text-forge-body hover:text-forge-ink'
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
                <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-heading-tight leading-heading text-forge-ink mb-6">
                  Connect with the right creator
                  <span className="block text-forge-orange">for your brand</span>
                </h1>
                <p className="text-xl md:text-2xl text-forge-body leading-body max-w-3xl mx-auto mb-12">
                  We help brands connect with authentic, high-impact creators.
                </p>

                {/* Featured Creator Card */}
                {featuredCreator && (
                <Link
                  href={`/creators/${featuredCreator.slug}`}
                  className="group block max-w-2xl mx-auto mb-12 bg-white border border-forge-line rounded-2xl p-8 hover:shadow-md hover:border-forge-orange/40 transition-all"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden ring-2 ring-forge-orange/60">
                    <Image
                      src={featuredCreator.avatar}
                      alt={`${featuredCreator.name} profile picture`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-semibold text-forge-muted mb-1">Featured Creator</div>
                  <h2 className="text-2xl font-heading font-semibold text-forge-ink mb-1">
                    {featuredCreator.name}
                  </h2>
                  <p className="text-forge-orange-dark font-medium mb-6">{featuredCreator.handle}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-heading font-semibold text-forge-orange mb-1">
                        {featuredCreator.stats.followers}
                      </div>
                      <div className="text-sm text-forge-muted">Total Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-heading font-semibold text-forge-orange mb-1">
                        {featuredCreator.stats.totalViews}
                      </div>
                      <div className="text-sm text-forge-muted">Video Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-heading font-semibold text-forge-orange mb-1">
                        {featuredCreator.platforms.length}
                      </div>
                      <div className="text-sm text-forge-muted">Platforms</div>
                    </div>
                  </div>
                  <div className="bg-forge-mist rounded-xl p-4">
                    <div className="font-semibold text-forge-ink mb-2 text-sm">Focus Areas</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {featuredCreator.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="bg-white border border-forge-line text-forge-ink px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors"
                  >
                    Start Your Campaign
                  </Link>
                  <Link
                    href="/creators"
                    className="border border-forge-line text-forge-ink px-8 py-4 rounded-lg text-lg font-semibold hover:border-forge-orange hover:text-forge-orange transition-colors"
                  >
                    Meet Our Creators
                  </Link>
                </div>
              </>
            ) : (
              // For Creators View
              <>
                <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-heading-tight leading-heading text-forge-ink mb-6">
                  Forge stronger
                  <span className="block text-forge-orange">brand partnerships</span>
                </h1>
                <p className="text-xl md:text-2xl text-forge-body leading-body max-w-3xl mx-auto mb-12">
                  We negotiate, manage, and grow your brand deals so you can focus on creating.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white border border-forge-line rounded-2xl p-6 text-left">
                    <div className="w-12 h-12 rounded-xl bg-forge-mist text-forge-orange flex items-center justify-center mb-4">
                      <IconHandshake className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-forge-ink mb-3">
                      Deal Negotiation & Contract Management
                    </h2>
                    <p className="text-forge-body leading-body">
                      We handle the business side so you get fair deals and clear terms.
                    </p>
                  </div>
                  <div className="bg-white border border-forge-line rounded-2xl p-6 text-left">
                    <div className="w-12 h-12 rounded-xl bg-forge-mist text-forge-orange flex items-center justify-center mb-4">
                      <IconTarget className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-forge-ink mb-3">
                      Brand Matchmaking
                    </h2>
                    <p className="text-forge-body leading-body">
                      Connect with brands that align with your content and audience.
                    </p>
                  </div>
                  <div className="bg-white border border-forge-line rounded-2xl p-6 text-left">
                    <div className="w-12 h-12 rounded-xl bg-forge-mist text-forge-orange flex items-center justify-center mb-4">
                      <IconTrendingUp className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-forge-ink mb-3">
                      Content Performance Tracking
                    </h2>
                    <p className="text-forge-body leading-body">
                      Data-driven insights to optimize your content and partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors"
                  >
                    Apply for Representation
                  </Link>
                  <Link
                    href="/about"
                    className="border border-forge-line text-forge-ink px-8 py-4 rounded-lg text-lg font-semibold hover:border-forge-orange hover:text-forge-orange transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Forge Section */}
      <section className="py-20 bg-forge-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-forge-ink mb-4">
              Why Choose Forge?
            </h2>
            <p className="text-xl text-forge-body leading-body max-w-2xl mx-auto">
              {activeView === 'brands'
                ? 'We connect you with authentic creators who drive real results'
                : 'We handle the business so you can focus on what you do best'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeView === 'brands' ? (
              <>
                <FeatureTile icon={<IconTarget className="w-6 h-6" />} title="Authentic Reach">
                  Our creators have genuine engagement with audiences that trust their recommendations
                </FeatureTile>
                <FeatureTile icon={<IconTrendingUp className="w-6 h-6" />} title="Proven Results">
                  Track record of successful campaigns with measurable ROI
                </FeatureTile>
                <FeatureTile icon={<IconHandshake className="w-6 h-6" />} title="Full Service">
                  From strategy to execution, we handle every aspect of your creator partnerships
                </FeatureTile>
              </>
            ) : (
              <>
                <FeatureTile icon={<IconBanknote className="w-6 h-6" />} title="Better Deals">
                  We negotiate higher rates and better terms than you could get on your own
                </FeatureTile>
                <FeatureTile icon={<IconClock className="w-6 h-6" />} title="Save Time">
                  No more back-and-forth emails or contract headaches
                </FeatureTile>
                <FeatureTile icon={<IconTrendingUp className="w-6 h-6" />} title="Grow Faster">
                  Focus on creating while we handle the business side of your career
                </FeatureTile>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forge-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-white mb-4">
            {activeView === 'brands'
              ? 'Ready to launch your next campaign?'
              : 'Ready to level up your creator career?'}
          </h2>
          <p className="text-xl text-white/70 leading-body max-w-2xl mx-auto mb-8">
            {activeView === 'brands'
              ? 'Connect with creators who can authentically represent your brand and drive real results.'
              : 'Join our roster and let us handle the business while you focus on creating amazing content.'}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors"
          >
            {activeView === 'brands' ? 'Get Started Today' : 'Apply Now'}
          </Link>
        </div>
      </section>
    </div>
  )
}
