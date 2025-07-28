import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Blessing Godson - A passionate graphic designer with expertise in branding, web design, and visual identity, delivering design solutions marked by simplicity and excellence.",
  openGraph: {
    title: "About Blessing Godson",
    description:
      "Learn more about Blessing Godson - A passionate graphic designer with expertise in branding, web design, and visual identity.",
  },
}

export const dynamic = "force-static"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Meet Me Section - Full Width */}
      <section className="pt-6 pb-8 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">Meet Me</h1>
              <p className="text-lg leading-8 text-primary-50 mb-6">
                I am <strong className="text-white">Blessing Godson</strong>, a Graphic Designer and the visionary
                behind <strong className="text-white">Blessed Designs</strong>.
              </p>
              <p className="text-lg leading-8 text-primary-50 mb-6">
                With over 3 years of experience, I've honed my craft with a dedication to delivering design solutions
                marked by simplicity and excellence.
              </p>
              <p className="text-lg leading-8 text-primary-50">
                My creative skills reflect a deep commitment to bringing every project to life with precision, beauty,
                and purpose. One of my key goals as a designer is to ensure that communication is clear and impactful,
                allowing every design to speak meaningfully to its audience.
              </p>
              <p className="mt-4 text-lg leading-8 text-primary-50">
                I believe that design is not just about aesthetics, but also about creating meaningful connections and
                enhancing communication through visual storytelling.
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96">
                {" "}
                <Image
                  src="/images/blessing-godson-cover.webp"
                  alt="Blessing Godson - Graphic Designer"
                  width={384} 
                  height={384}
                  className="rounded-lg object-cover w-full h-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-lg p-8 shadow-sm border border-primary-200">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience & Skills</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experience</h3>
                <div className="space-y-8">
                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Graphic Designer & Founder</h4>
                    <p className="text-gray-600">Blessed Designs • 2024 - Present</p>
                    <p className="mt-2 text-gray-600">
                      Founded Blessed Designs with a vision to create impactful design solutions that inspire, uplift,
                      and communicate purpose through simplicity and excellence.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Graphic Designer Team Lead</h4>
                    <p className="text-gray-600">Skill Migraine Solutions Community • 2024 - Present</p>
                    <p className="mt-2 text-gray-600">
                      Specialized in digital design and marketing materials for individuals and established
                      businesses.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Graphic Designer</h4>
                    <p className="text-gray-600">Xerxos Media • 2023 - 2024</p>
                    <p className="mt-2 text-gray-600">
                      Built foundation in design principles while working with small businesses and local organizations.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Tools</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Design Software</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Adobe Photoshop", "Canva", "PixelLab"].map(
                        (skill) => (
                          <span key={skill} className="tag-primary px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Brand Identity",
                        "Logo Design",
                        "Flyer Design",
                        "Thumbnails Design",
                        "Invitation Design",
                        "Color Theory",
                      ].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary text-white rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Project Management", "Client Relations", "Team Leadership", "Creative Direction"].map(
                        (skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center border border-primary-200">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Design Philosophy</h2>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed">
              "A lover of God and creativity, I blend my faith with a drive for excellence, ensuring that each design
              serves not only as a visual expression but also as a bridge for meaningful connection. Passionate about
              creating great work, I strive to exceed expectations, consistently producing designs that inspire, uplift,
              and communicate purpose."
            </blockquote>
            <p className="mt-8 text-lg text-gray-600">
              I believe in collaborative design processes, continuous learning, and the power of simplicity to create
              lasting impressions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
