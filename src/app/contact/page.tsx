'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formType, setFormType] = useState<'creator' | 'brand'>('creator')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    handle: '',
    followers: '',
    platform: '',
    category: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { type: formType, data: formData })
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Whether you're a creator looking for representation or a brand seeking partnerships, 
                  we're here to help you succeed.
                </p>
              </div>

              {/* Form Type Toggle */}
              <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setFormType('creator')}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    formType === 'creator'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  I'm a Creator
                </button>
                <button
                  onClick={() => setFormType('brand')}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    formType === 'brand'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  I'm a Brand
                </button>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {formType === 'creator' ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="handle" className="block text-sm font-medium text-gray-700 mb-2">
                          Social Media Handle
                        </label>
                        <input
                          type="text"
                          id="handle"
                          name="handle"
                          value={formData.handle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="@yourhandle"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-2">
                          Follower Count
                        </label>
                        <select
                          id="followers"
                          name="followers"
                          value={formData.followers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Platform
                        </label>
                        <select
                          id="platform"
                          name="platform"
                          value={formData.platform}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select platform</option>
                          <option value="tiktok">TikTok</option>
                          <option value="instagram">Instagram</option>
                          <option value="both">Both TikTok & Instagram</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Content Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select category</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="beauty">Beauty</option>
                          <option value="fitness">Fitness</option>
                          <option value="travel">Travel</option>
                          <option value="food">Food</option>
                          <option value="technology">Technology</option>
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
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Campaign Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={formType === 'creator' 
                      ? "Tell us about your content, goals, and what kind of partnerships you're looking for..."
                      : "Tell us about your brand, campaign goals, and what kind of creators you're looking to partner with..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">hello@forgetalentagency.com</p>
                      <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📱</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600">
                        123 Creator Boulevard<br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🌐</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Social Media</h4>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
                        <a href="#" className="text-blue-600 hover:text-blue-700">TikTok</a>
                        <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about working with Forge Talent Agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How do I apply to become a Forge creator?</h3>
                <p className="text-gray-600 text-sm">
                  Fill out our creator application form above or email us at hello@forgetalentagency.com 
                  with your media kit and social media handles. We review all applications within 48 hours.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What's the minimum follower requirement?</h3>
                <p className="text-gray-600 text-sm">
                  While we typically work with creators who have 10K+ followers, we evaluate each 
                  application based on engagement, content quality, and growth potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Do you charge creators any fees?</h3>
                <p className="text-gray-600 text-sm">
                  We operate on a commission-based model. We only make money when you do, 
                  aligning our success with yours. No upfront fees or hidden costs.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How do brand partnerships work?</h3>
                <p className="text-gray-600 text-sm">
                  We connect brands with creators who align with their values and target audience. 
                  We handle negotiations, contracts, and campaign management for optimal results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What's your average campaign timeline?</h3>
                <p className="text-gray-600 text-sm">
                  Campaign timelines vary based on scope and complexity. Simple sponsored posts 
                  can be executed within 1-2 weeks, while comprehensive campaigns may take 4-6 weeks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Can I work with other agencies?</h3>
                <p className="text-gray-600 text-sm">
                  We typically work on an exclusive basis with our creators to ensure the best 
                  opportunities and avoid conflicts. However, we're open to discussing flexible arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Don't wait – the best opportunities are for those who act fast. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More About Our Services
            </Link>
            <Link href="/clients" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              See Our Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}