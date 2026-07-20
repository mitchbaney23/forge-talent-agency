'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconMail, IconMapPin, IconGlobe } from '@/components/icons'

type FormStatus =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; message: string }
  | { state: 'error'; message: string }

const emptyFormData = {
  name: '',
  email: '',
  company: '',
  handle: '',
  followers: '',
  platform: '',
  category: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [formType, setFormType] = useState<'creator' | 'brand'>('creator')
  const [formData, setFormData] = useState(emptyFormData)
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ state: 'submitting' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: formType, data: formData }),
      })

      const result = await response.json().catch(() => ({}))

      if (response.ok && result.success) {
        setStatus({
          state: 'success',
          message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        })
        setFormData(emptyFormData)
      } else {
        setStatus({
          state: 'error',
          message:
            result?.message ||
            'There was an error sending your message. Please email us directly at mitch@forgetalentagency.com.',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        state: 'error',
        message:
          'There was a network error sending your message. Please email us directly at mitch@forgetalentagency.com.',
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-forge-mist to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-heading-tight leading-heading text-forge-ink mb-6">
              Let&apos;s <span className="text-forge-orange">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-forge-body leading-body max-w-3xl mx-auto">
              Ready to take your influence to the next level? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-semibold tracking-heading-tight leading-heading text-forge-ink mb-4">Get in <span className="text-forge-orange">Touch</span></h2>
                <p className="text-forge-body leading-body">
                  Whether you're a creator looking for representation or a brand seeking partnerships, 
                  we're here to help you succeed.
                </p>
              </div>

              {/* Form Type Toggle */}
              <div className="flex mb-8 bg-forge-mist border border-forge-line rounded-lg p-1">
                <button
                  onClick={() => setFormType('creator')}
                  aria-pressed={formType === 'creator'}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    formType === 'creator'
                      ? 'bg-white text-forge-orange-dark font-semibold shadow-sm'
                      : 'text-forge-body hover:text-forge-ink'
                  }`}
                >
                  I'm a Creator
                </button>
                <button
                  onClick={() => setFormType('brand')}
                  aria-pressed={formType === 'brand'}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    formType === 'brand'
                      ? 'bg-white text-forge-orange-dark font-semibold shadow-sm'
                      : 'text-forge-body hover:text-forge-ink'
                  }`}
                >
                  I'm a Brand
                </button>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forge-body mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forge-body mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {formType === 'creator' ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="handle" className="block text-sm font-medium text-forge-body mb-2">
                          Social Media Handle
                        </label>
                        <input
                          type="text"
                          id="handle"
                          name="handle"
                          value={formData.handle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                          placeholder="@yourhandle"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="followers" className="block text-sm font-medium text-forge-body mb-2">
                          Follower Count
                        </label>
                        <select
                          id="followers"
                          name="followers"
                          value={formData.followers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="10k-50k">10K - 50K</option>
                          <option value="50k-100k">50K - 100K</option>
                          <option value="100k-500k">100K - 500K</option>
                          <option value="500k-1m">500K - 1M</option>
                          <option value="1m+">1M+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="platform" className="block text-sm font-medium text-forge-body mb-2">
                          Primary Platform
                        </label>
                        <select
                          id="platform"
                          name="platform"
                          value={formData.platform}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                        >
                          <option value="">Select platform</option>
                          <option value="tiktok">TikTok</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                          <option value="facebook">Facebook</option>
                          <option value="multiple">Multiple platforms</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-forge-body mb-2">
                          Content Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                        >
                          <option value="">Select category</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="beauty">Beauty</option>
                          <option value="fitness">Fitness</option>
                          <option value="travel">Travel</option>
                          <option value="food">Food</option>
                          <option value="technology">Technology</option>
                          <option value="trades-diy">Trades, DIY & Home</option>
                          <option value="art">Art & Design</option>
                          <option value="music">Music</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-forge-body mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-forge-body mb-2">
                          Campaign Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-25k">$5K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k+">$100K+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forge-body mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-forge-line rounded-lg focus:ring-2 focus:ring-forge-orange/60 focus:border-transparent"
                    placeholder={formType === 'creator' 
                      ? "Tell us about your content, goals, and what kind of partnerships you're looking for..."
                      : "Tell us about your brand, campaign goals, and what kind of creators you're looking to partner with..."
                    }
                  />
                </div>

                {status.state === 'success' && (
                  <div
                    role="status"
                    className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                  >
                    {status.message}
                  </div>
                )}
                {status.state === 'error' && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="w-full bg-forge-orange text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-forge-mist border border-forge-line rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-heading font-semibold text-forge-ink mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white border border-forge-line text-forge-orange flex items-center justify-center mr-4 shrink-0">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-forge-ink mb-1">Email</h4>
                      <p>
                        <a href="mailto:mitch@forgetalentagency.com" className="text-forge-body hover:text-forge-orange-dark transition-colors">
                          mitch@forgetalentagency.com
                        </a>
                      </p>
                      <p className="text-forge-muted text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white border border-forge-line text-forge-orange flex items-center justify-center mr-4 shrink-0">
                      <IconMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-forge-ink mb-1">Location</h4>
                      <p className="text-forge-body">
                        Raleigh, NC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white border border-forge-line text-forge-orange flex items-center justify-center mr-4 shrink-0">
                      <IconGlobe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-forge-ink mb-1">Social Media</h4>
                      <div className="flex space-x-3 mt-2">
                        <a href="https://www.instagram.com/forge.talent.agency" className="text-forge-orange-dark hover:text-forge-orange font-medium">Instagram</a>
                        <a href="https://www.tiktok.com/@forge.talent" className="text-forge-orange-dark hover:text-forge-orange font-medium">TikTok</a>
                        <a href="https://linkedin.com/company/forge-talent-agency" className="text-forge-orange-dark hover:text-forge-orange font-medium">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-forge-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-forge-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-forge-body max-w-2xl mx-auto">
              Get quick answers to common questions about working with Forge Talent Agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">How do I apply to become a Forge creator?</h3>
                <p className="text-forge-body text-sm">
                  Fill out our creator application form above or email us at{' '}
                  <a href="mailto:mitch@forgetalentagency.com" className="text-forge-orange-dark hover:underline">mitch@forgetalentagency.com</a>{' '}
                  with your media kit and social media handles. We review all applications within 48 hours.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">What's the minimum follower requirement?</h3>
                <p className="text-forge-body text-sm">
                  While we typically work with creators who have 10K+ followers, we evaluate each 
                  application based on engagement, content quality, and growth potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">Do you charge creators any fees?</h3>
                <p className="text-forge-body text-sm">
                  We operate on a commission-based model. We only make money when you do, 
                  aligning our success with yours. No upfront fees or hidden costs.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">How do brand partnerships work?</h3>
                <p className="text-forge-body text-sm">
                  We connect brands with creators who align with their values and target audience. 
                  We handle negotiations, contracts, and campaign management for optimal results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">What's your average campaign timeline?</h3>
                <p className="text-forge-body text-sm">
                  Campaign timelines vary based on scope and complexity. Simple sponsored posts 
                  can be executed within 1-2 weeks, while comprehensive campaigns may take 4-6 weeks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h3 className="font-heading font-semibold text-forge-ink mb-2">Can I work with other agencies?</h3>
                <p className="text-forge-body text-sm">
                  We typically work on an exclusive basis with our creators to ensure the best 
                  opportunities and avoid conflicts. However, we're open to discussing flexible arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forge-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-white mb-4">
            Ready to start your <span className="text-forge-orange-light">journey?</span>
          </h2>
          <p className="text-xl text-white/70 leading-body max-w-2xl mx-auto mb-8">
            Don&apos;t wait – the best opportunities are for those who act fast.
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors">
              Learn More About Our Agency
            </Link>
            <Link href="/creators" className="border border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-forge-ink transition-colors">
              Meet Our Creators
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}