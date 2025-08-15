import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-6">
              About Forge Talent Agency
            </h1>
            <div className="w-24 h-1 bg-[#D35400] mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Turning Real Skills Into Real Influence */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-8">
              Turning Real Skills Into Real Influence
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Forge Talent Agency was founded to bridge the gap between hardworking creators and the brands that align with their craft. We believe in authentic storytelling — the kind that resonates because it's built on real skill, real passion, and real people.
              </p>
              <p>
                Right now, Forge is a boutique agency — small by design — focused on giving every client dedicated attention and custom deal-making. Our first represented creator has already built a community of over <strong className="text-[#D35400]">1 million followers</strong> and generated <strong className="text-[#D35400]">tens of millions of organic views</strong> by sharing his expertise in the trades.
              </p>
              <p>
                We help brands connect with creators who bring genuine authority to their industries, and we help creators turn their audience into sustainable partnerships.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-[#D35400] mb-16"></div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
                  <span className="text-[#D35400]">•</span> Hands-on Representation
                </h3>
                <p className="text-gray-700">
                  Work directly with Mitch, the founder of Forge Talent Agency.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
                  <span className="text-[#D35400]">•</span> Tailored Brand Partnerships
                </h3>
                <p className="text-gray-700">
                  Matching the right creator with the right brand, every time.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
                  <span className="text-[#D35400]">•</span> Full-Service Deal Management
                </h3>
                <p className="text-gray-700">
                  From negotiation to execution, all the details are handled so creators can focus on creating.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#D35400] mb-16"></div>

          {/* Founder's Note */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-8">Founder's Note</h2>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#D35400]">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                "When I started Forge Talent Agency, my goal was simple: help talented people get the recognition and opportunities they deserve without losing the authenticity that made them stand out in the first place.
              </blockquote>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                With a background in sales and business development, I know how to build relationships that last — and how to negotiate deals that work for both creators and brands.
              </blockquote>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                Whether you're a creator ready to grow your partnerships or a company looking for a trusted voice in your industry, I'm here to make sure every connection counts."
              </blockquote>
              <div className="mt-6">
                <p className="text-xl font-bold text-[#1E1E1E]">— Mitch, Founder of Forge Talent Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're a creator looking for representation or a brand seeking 
            authentic partnerships, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#D35400] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8451A] transition-colors">
              Get Started
            </Link>
            <Link href="/clients" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#1E1E1E] transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}