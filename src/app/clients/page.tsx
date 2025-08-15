import Link from 'next/link'
import Image from 'next/image'
import SocialMediaEmbed from '@/components/SocialMediaEmbed'

export default function Clients() {
  // Featured creator - Plumb Hero
  const featuredCreator = {
    name: "Plumb Hero",
    handle: "@plumb.hero",
    followers: "1M+",
    platforms: ["TikTok", "Instagram", "YouTube", "Facebook"],
    category: "Plumbing & Trades",
    description: "Expert plumber sharing professional tips, tool reviews, and behind-the-scenes trade content that educates and entertains both professionals and homeowners.",
    image: "🔧",
    totalViews: "50M+",
    engagement: "8.5%",
    demographics: "25-54 years, 65% male, blue-collar professionals"
  }

  // Featured video for "Most Recent Viral Hit" section
  const featuredVideo = {
    title: "Latest Viral Plumbing Tip",
    videoId: "7498894934058061098", // Replace with actual featured video ID
    views: "1.5M",
    engagement: "22.1%",
    description: "His most recent viral hit that's taking TikTok by storm"
  }

  // Plumb Hero's top 3 videos (you'll need to replace these with actual TikTok video IDs)
  const topVideos = [
    {
      id: 1,
      title: "How to Replace Tub Spout. Easy",
      videoId: "7445044110823525674", // Replace with actual video ID
      views: "22.7M",
      engagement: "15.2%",
      description: "Educational content showing the #1 mistake that causes expensive plumbing repairs"
    },
    {
      id: 2,
      title: "Fixing a Main Back Up on a house",
      videoId: "7374179038476209450", // Replace with actual video ID
      views: "2.1M",
      engagement: "12.8%",
      description: "Customer complains about consistent drainage issues"
    },
    {
      id: 3,
      title: "Main Water Line leak on PolyP pipe",
      videoId: "7416496548118301998", // Replace with actual video ID
      views: "4.3M",
      engagement: "18.5%",
      description: "Imagine your being featured on a popular TikTok channel that showcases your expertise and connects you with a wider audience."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-forge-charcoal mb-6">
              Our Featured Creator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet an authentic voice helping to lead blue-collar content on social media
            </p>
          </div>
        </div>
      </section>

      {/* Plumb Hero Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Creator Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full mr-6 overflow-hidden ring-4 ring-forge-orange">
                  <Image
                    src="/assets/images/plumbhero.jpeg"
                    alt="Plumb Hero Profile Picture"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-forge-charcoal">{featuredCreator.name}</h2>
                  <p className="text-xl text-forge-orange font-semibold">{featuredCreator.handle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {featuredCreator.description}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-forge-orange mb-1">{featuredCreator.followers}</div>
                  <div className="text-sm text-gray-600">Total Followers</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-forge-orange mb-1">{featuredCreator.totalViews}</div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-forge-orange mb-1">{featuredCreator.engagement}</div>
                  <div className="text-sm text-gray-600">Avg Engagement</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-forge-orange mb-1">3</div>
                  <div className="text-sm text-gray-600">Platforms</div>
                </div>
              </div>
              
              {/* Platform badges */}
              <div className="flex space-x-3 mb-8">
                {featuredCreator.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="bg-forge-orange text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              
              {/* Audience Demographics */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-forge-charcoal mb-3">Target Audience</h3>
                <p className="text-gray-600">{featuredCreator.demographics}</p>
              </div>
            </div>
            
            {/* Featured Video */}
            <div>
              <h3 className="text-2xl font-bold text-forge-charcoal mb-6">Most Recent Viral Hit</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <SocialMediaEmbed
                  platform="tiktok"
                  videoId={featuredVideo.videoId}
                  title={featuredVideo.title}
                  creator={featuredCreator.handle}
                  className="mb-4"
                />
                <h4 className="text-lg font-semibold text-forge-charcoal mb-2">{featuredVideo.title}</h4>
                <p className="text-gray-600 mb-4">{featuredVideo.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-forge-orange font-semibold">{featuredVideo.views} views</span>
                  <span className="text-forge-orange font-semibold">{featuredVideo.engagement} engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Videos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forge-charcoal mb-4">
              Top Performing Content
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These viral videos showcase the authentic expertise and engaging personality that drives results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topVideos.map((video, index) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-forge-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      View Count
                    </span>
                    <span className="text-forge-orange font-semibold">{video.views}</span>
                  </div>
                  
                  <SocialMediaEmbed
                    platform="tiktok"
                    videoId={video.videoId}
                    title={video.title}
                    creator={featuredCreator.handle}
                    className="mb-4"
                  />
                  
                  <h3 className="text-lg font-semibold text-forge-charcoal mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Engagement Rate</span>
                    <span className="text-forge-orange font-semibold">{video.engagement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-forge-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Authentic Trade Professionals?
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Connect with creators who have real expertise and genuine relationships with blue-collar audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-forge-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Your Campaign
            </Link>
            <Link href="https://www.tiktok.com/@plumb.hero" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-forge-orange transition-colors">
              View @plumb.hero
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}