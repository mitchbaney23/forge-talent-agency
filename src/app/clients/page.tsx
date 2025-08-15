import Link from 'next/link'
import SocialMediaEmbed from '@/components/SocialMediaEmbed'

export default function Clients() {
  const creators = [
    {
      id: 1,
      name: "Emma Rodriguez",
      handle: "@emmalifestyle",
      followers: "3.2M",
      platforms: ["TikTok", "Instagram"],
      category: "Lifestyle",
      description: "Fashion and lifestyle content creator with authentic storytelling that resonates with Gen Z audiences.",
      image: "🌟",
      videoThumb: "https://example.com/emma-video-thumb.jpg",
      embedData: {
        platform: 'tiktok' as const,
        videoId: '7123456789012345678'
      }
    },
    {
      id: 2,
      name: "Marcus Chen",
      handle: "@marcusfitness",
      followers: "1.8M",
      platforms: ["TikTok", "Instagram"],
      category: "Fitness",
      description: "Fitness coach and nutrition expert creating motivational content and workout tutorials.",
      image: "💪",
      videoThumb: "https://example.com/marcus-video-thumb.jpg",
      embedData: {
        platform: 'instagram' as const,
        postUrl: 'https://www.instagram.com/p/ABC123DEF456/'
      }
    },
    {
      id: 3,
      name: "Sofia Beauty",
      handle: "@sofiaglam",
      followers: "2.7M",
      platforms: ["Instagram", "TikTok"],
      category: "Beauty",
      description: "Beauty influencer specializing in makeup tutorials, skincare routines, and product reviews.",
      image: "💄",
      videoThumb: "https://example.com/sofia-video-thumb.jpg",
      embedData: {
        platform: 'tiktok' as const,
        videoId: '7234567890123456789'
      }
    },
    {
      id: 4,
      name: "Alex Travel",
      handle: "@alexadventures",
      followers: "1.5M",
      platforms: ["TikTok", "Instagram"],
      category: "Travel",
      description: "Adventure traveler sharing hidden gems and budget-friendly travel tips worldwide.",
      image: "✈️",
      videoThumb: "https://example.com/alex-video-thumb.jpg",
      embedData: {
        platform: 'instagram' as const,
        postUrl: 'https://www.instagram.com/p/DEF456GHI789/'
      }
    },
    {
      id: 5,
      name: "Maya Foodie",
      handle: "@mayaeats",
      followers: "2.1M",
      platforms: ["TikTok", "Instagram"],
      category: "Food",
      description: "Food content creator focusing on easy recipes, restaurant reviews, and cooking hacks.",
      image: "🍜",
      videoThumb: "https://example.com/maya-video-thumb.jpg",
      embedData: {
        platform: 'tiktok' as const,
        videoId: '7345678901234567890'
      }
    },
    {
      id: 6,
      name: "Tyler Tech",
      handle: "@tylertechtalks",
      followers: "950K",
      platforms: ["TikTok", "Instagram"],
      category: "Technology",
      description: "Tech reviewer and digital lifestyle creator making technology accessible to everyone.",
      image: "📱",
      videoThumb: "https://example.com/tyler-video-thumb.jpg",
      embedData: {
        platform: 'tiktok' as const,
        videoId: '7456789012345678901'
      }
    },
    {
      id: 7,
      name: "Luna Art",
      handle: "@lunaartistry",
      followers: "1.3M",
      platforms: ["Instagram", "TikTok"],
      category: "Art",
      description: "Digital artist and creative director sharing art tutorials and design inspiration.",
      image: "🎨",
      videoThumb: "https://example.com/luna-video-thumb.jpg",
      embedData: {
        platform: 'instagram' as const,
        postUrl: 'https://www.instagram.com/p/GHI789JKL012/'
      }
    },
    {
      id: 8,
      name: "Ryan Music",
      handle: "@ryanbeats",
      followers: "2.4M",
      platforms: ["TikTok", "Instagram"],
      category: "Music",
      description: "Musician and producer creating original music content and behind-the-scenes content.",
      image: "🎵",
      videoThumb: "https://example.com/ryan-video-thumb.jpg",
      embedData: {
        platform: 'tiktok' as const,
        videoId: '7567890123456789012'
      }
    }
  ]

  const categories = ["All", "Lifestyle", "Fitness", "Beauty", "Travel", "Food", "Technology", "Art", "Music"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Creators
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented creators we're proud to represent across TikTok and Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-sm text-gray-600">Total Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Brand Deals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {creators.map((creator) => (
              <div key={creator.id} className="group">
                {/* Social Media Embed */}
                <div className="mb-4">
                  <SocialMediaEmbed
                    platform={creator.embedData.platform}
                    videoId={creator.embedData.platform === 'tiktok' ? creator.embedData.videoId : undefined}
                    postUrl={creator.embedData.platform === 'instagram' ? creator.embedData.postUrl : undefined}
                    thumbnail={creator.videoThumb}
                    title={`${creator.name} - ${creator.category}`}
                    creator={creator.handle}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Creator Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{creator.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{creator.handle}</p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{creator.description}</p>
                  
                  {/* Platform badges */}
                  <div className="flex space-x-2">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaign Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our creators are making impact with leading brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                brand: "Nike",
                creator: "Marcus Chen",
                campaign: "Summer Fitness Challenge",
                results: "2.5M views, 15% engagement rate"
              },
              {
                brand: "Sephora",
                creator: "Sofia Beauty",
                campaign: "New Product Launch",
                results: "1.8M views, 12% conversion rate"
              },
              {
                brand: "Airbnb",
                creator: "Alex Travel",
                campaign: "Hidden Gems Series",
                results: "3.1M views, 25% save rate"
              }
            ].map((campaign, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.brand} × {campaign.creator}</h3>
                <p className="text-gray-600 mb-3">{campaign.campaign}</p>
                <p className="text-sm text-blue-600 font-medium">{campaign.results}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Roster CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Roster?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We're always looking for talented creators who are passionate about their craft 
            and ready to take their influence to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Apply to Join
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}