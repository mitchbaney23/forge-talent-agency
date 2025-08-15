import Link from 'next/link'

export default function Testimonials() {
  const creatorTestimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      handle: "@emmalifestyle",
      category: "Lifestyle Creator",
      image: "🌟",
      quote: "Forge Talent Agency transformed my career. In just 8 months, they helped me grow from 500K to 3.2M followers and secure partnerships with my dream brands. Their team genuinely cares about my creative vision.",
      metrics: "5x follower growth • $250K annual revenue"
    },
    {
      id: 2,
      name: "Marcus Chen",
      handle: "@marcusfitness",
      category: "Fitness Creator",
      image: "💪",
      quote: "The support I get from Forge is incredible. They don't just find me brand deals - they help me build a sustainable business. My income has tripled since joining, and I finally feel like a real entrepreneur.",
      metrics: "3x revenue increase • 15 brand partnerships"
    },
    {
      id: 3,
      name: "Sofia Beauty",
      handle: "@sofiaglam",
      category: "Beauty Creator",
      image: "💄",
      quote: "Working with Forge has been a game-changer. They helped me negotiate my first six-figure brand deal and guided me through launching my own product line. I couldn't have done it without their expertise.",
      metrics: "First $100K deal • Own product line launch"
    }
  ]

  const brandTestimonials = [
    {
      id: 1,
      company: "Nike",
      position: "Marketing Director",
      name: "Sarah Williams",
      logo: "👟",
      quote: "Forge Talent Agency consistently delivers authentic creators who truly connect with our target audience. Their campaign management is top-notch, and the ROI speaks for itself.",
      metrics: "300% ROI • 15M+ impressions"
    },
    {
      id: 2,
      company: "Sephora",
      position: "Influencer Partnerships Lead",
      name: "Jessica Park",
      logo: "💋",
      quote: "The quality of creators Forge represents is exceptional. They understand our brand values and only connect us with influencers who are genuine fits. The collaboration feels natural and authentic.",
      metrics: "25% conversion rate • 5M reach"
    },
    {
      id: 3,
      company: "Airbnb",
      position: "Content Marketing Manager",
      name: "David Chen",
      logo: "🏠",
      quote: "Forge's creators produce content that genuinely inspires travel. Their storytelling ability and engagement rates are consistently above industry benchmarks. We've renewed our partnership three times.",
      metrics: "40% above benchmark • 3 renewals"
    }
  ]

  const successStories = [
    {
      title: "From 10K to 2M in 12 Months",
      creator: "Luna Art",
      category: "Art Creator",
      story: "Luna joined Forge with just 10,000 followers and a passion for digital art. Through strategic content planning, brand partnerships with art supply companies, and tutorial series, she grew to 2M followers and now earns $150K annually.",
      image: "🎨",
      metrics: ["2M followers", "$150K revenue", "20+ partnerships"]
    },
    {
      title: "Viral Campaign Reaches 50M Views",
      creator: "Tyler Tech",
      category: "Tech Creator",
      story: "Tyler's collaboration with a major smartphone brand became one of the year's most viral tech reviews. Forge's campaign strategy and Tyler's authentic review style resulted in 50M views and drove significant sales for the brand.",
      image: "📱",
      metrics: ["50M views", "$500K deal", "15% sales lift"]
    },
    {
      title: "Creator Launches Successful Business",
      creator: "Maya Foodie",
      category: "Food Creator",
      story: "With Forge's business development support, Maya launched her own line of cooking sauces. The launch campaign across TikTok and Instagram generated $2M in first-year sales and established her as a food entrepreneur.",
      image: "🍜",
      metrics: ["$2M sales", "50K customers", "3 product lines"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the creators and brands who have transformed their businesses with Forge Talent Agency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
              <div className="text-lg text-gray-600">Avg. Follower Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$5M+</div>
              <div className="text-lg text-gray-600">Creator Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg text-gray-600">Partnership Renewals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Creators Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from creators who have transformed their careers with our support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 font-medium">{testimonial.handle}</p>
                    <p className="text-gray-500 text-sm">{testimonial.category}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium text-sm">{testimonial.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Brands Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading brands trust us to connect them with authentic creators who drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.company}</h3>
                    <p className="text-gray-600">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium text-sm">{testimonial.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showing how we've helped creators and brands achieve extraordinary results.
            </p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-5xl mb-6">{story.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-blue-600 font-medium mr-2">{story.creator}</span>
                    <span className="text-gray-500">• {story.category}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{story.story}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-900">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{story.image}</div>
                      <p className="text-gray-600 font-medium">Success Story</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from our creators and brand partners about their experience working with Forge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Emma Rodriguez", title: "Creator Journey", duration: "2:30" },
              { name: "Nike Partnership", title: "Brand Success", duration: "1:45" },
              { name: "Agency Overview", title: "Team Interview", duration: "3:15" }
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{video.name}</h3>
                <p className="text-gray-600 text-sm">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join the creators and brands who are already transforming their businesses with Forge Talent Agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today
            </Link>
            <Link href="/clients" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              See Our Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}