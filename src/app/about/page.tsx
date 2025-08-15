import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Forge Talent Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're redefining talent management for the social media generation, 
              connecting authentic creators with brands that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Forge Talent Agency emerged from a simple observation: 
                  the traditional talent management model wasn't built for the digital age. 
                  Social media creators needed representation that understood their unique challenges 
                  and opportunities.
                </p>
                <p>
                  We started with a handful of TikTok creators and a vision to build authentic 
                  partnerships between influencers and brands. Today, we represent over 100 creators 
                  across TikTok and Instagram, managing partnerships with Fortune 500 companies 
                  and emerging brands alike.
                </p>
                <p>
                  Our approach is different. We don't just secure deals—we build careers. 
                  We help creators develop their personal brand, grow their audience organically, 
                  and create sustainable income streams that extend far beyond social media.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core beliefs about creator empowerment and authentic storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authenticity First</h3>
              <p className="text-gray-600">
                We believe authentic content creates genuine connections. 
                Our partnerships are built on shared values, not just follower counts.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Creator Empowerment</h3>
              <p className="text-gray-600">
                Creators are at the center of everything we do. We provide the tools, 
                support, and opportunities they need to thrive on their own terms.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & Growth</h3>
              <p className="text-gray-600">
                The social media landscape evolves rapidly. We stay ahead of trends 
                and help our creators adapt and grow with the platforms they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise in talent management, 
              digital marketing, and content creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member placeholders */}
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">👩‍💼</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sarah Chen</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former talent manager at CAA with 8 years of experience in digital media.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-blue-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">👨‍💻</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Marcus Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Head of Partnerships</p>
              <p className="text-gray-600 text-sm">
                Brand partnership expert with 6 years at top influencer marketing agencies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">👩‍🎨</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Emma Thompson</h3>
              <p className="text-blue-600 font-medium mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">
                Award-winning content creator turned strategist, specializing in viral campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Awards & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Influencer Marketing Awards 2023</h3>
              <p className="text-gray-600 text-sm">Best Talent Management Agency</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">TechCrunch Feature</h3>
              <p className="text-gray-600 text-sm">"Rising Stars in Creator Economy"</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Forbes 30 Under 30</h3>
              <p className="text-gray-600 text-sm">Sarah Chen, Media Category 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you're a creator looking for representation or a brand seeking 
            authentic partnerships, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Started
            </Link>
            <Link href="/clients" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}