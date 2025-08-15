import Link from 'next/link'
import SocialMediaEmbed from '@/components/SocialMediaEmbed'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Smart Creativity for
              <span className="block text-blue-600">Inspired Influencers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Premier talent management for TikTok and Instagram creators. 
              We connect brands with authentic voices and help influencers build lasting careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
              <Link href="/clients" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-lg text-gray-600">Combined Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-lg text-gray-600">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Brand Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of the talented creators we're proud to represent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured creators with social media embeds */}
            {[
              {
                id: 1,
                name: "Emma Rodriguez",
                handle: "@emmalifestyle",
                followers: "3.2M",
                platform: "tiktok" as const,
                videoId: "7123456789012345678",
                platforms: ["TikTok", "Instagram"]
              },
              {
                id: 2,
                name: "Marcus Chen", 
                handle: "@marcusfitness",
                followers: "1.8M",
                platform: "instagram" as const,
                postUrl: "https://www.instagram.com/p/ABC123DEF456/",
                platforms: ["Instagram", "TikTok"]
              },
              {
                id: 3,
                name: "Sofia Beauty",
                handle: "@sofiaglam", 
                followers: "2.7M",
                platform: "tiktok" as const,
                videoId: "7234567890123456789",
                platforms: ["TikTok", "Instagram"]
              },
              {
                id: 4,
                name: "Alex Travel",
                handle: "@alexadventures",
                followers: "1.5M", 
                platform: "instagram" as const,
                postUrl: "https://www.instagram.com/p/DEF456GHI789/",
                platforms: ["Instagram", "TikTok"]
              },
              {
                id: 5,
                name: "Maya Foodie",
                handle: "@mayaeats",
                followers: "2.1M",
                platform: "tiktok" as const, 
                videoId: "7345678901234567890",
                platforms: ["TikTok", "Instagram"]
              },
              {
                id: 6,
                name: "Ryan Music",
                handle: "@ryanbeats",
                followers: "2.4M",
                platform: "tiktok" as const,
                videoId: "7567890123456789012", 
                platforms: ["TikTok", "Instagram"]
              }
            ].map((creator) => (
              <div key={creator.id} className="group">
                <div className="mb-4">
                  <SocialMediaEmbed
                    platform={creator.platform}
                    videoId={creator.platform === 'tiktok' ? creator.videoId : undefined}
                    postUrl={creator.platform === 'instagram' ? creator.postUrl : undefined}
                    title={`${creator.name} content`}
                    creator={creator.handle}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{creator.name}</h3>
                <p className="text-gray-600">{creator.handle} • {creator.followers} followers</p>
                <div className="flex space-x-2 mt-2">
                  {creator.platforms.map((platform) => (
                    <span
                      key={platform}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        platform === "TikTok"
                          ? "bg-pink-100 text-pink-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/clients" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              View All Creators
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive talent management services for the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Partnerships</h3>
              <p className="text-gray-600">Connect with top brands that align with your audience and values</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Strategy</h3>
              <p className="text-gray-600">Data-driven strategies to grow your following and engagement</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Creation</h3>
              <p className="text-gray-600">Creative support and resources to elevate your content</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Your Influence to the Next Level?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join our community of successful creators and start building your empire today.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}