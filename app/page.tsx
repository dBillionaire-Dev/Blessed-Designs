import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Blessed Designs - Discover innovative design solutions for branding, web design, and visual identity with simplicity and excellence.",
  openGraph: {
    title: "Blessed Designs - Creative Portfolio",
    description:
      "Welcome to Blessing Godson's creative portfolio. Discover innovative design solutions for branding, web design, and visual identity.",
  },
  icons: {
    icon: "/images/favicon.png",
  },
}

export const dynamic = "force-dynamic"

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return (
    <div className="min-h-screen">
    
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white mb-6">
                👋 Hi there, I am <span className="text-primary-100">Blessing</span>
              </h1>
              <p className="text-lg leading-8 text-primary-50 mb-8">
                I'm a passionate graphic designer who finds joy in bringing creative ideas to life through purposeful
                and beautiful designs. <br />
                At Blessed Designs, I specialize in delivering clean, expressive, and impactful visuals that connect
                deeply with audiences. <br />
                Whether it's a flyer, logo, or social media post, I pour excellence and meaning into every piece.
              </p>
              <div className="flex items-center gap-x-6">
                <Link
                  href="/portfolio"
                  className="btn-primary rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-all"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary-100 hover:text-primary"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-primary-300 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/images/blessing-godson-cover.webp"
                  alt="Blessing Godson - Graphic Designer"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-72 h-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600">A glimpse into my latest creative endeavors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                shortDescription={project.shortDescription}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I Do</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive design services to help your brand stand out.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-primary-200">
              <div className="mx-auto h-16 w-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Identity</h3>
              <p className="text-gray-600">
                Complete brand identity design including logos, color palettes, and brand guidelines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-primary-200">
              <div className="mx-auto h-16 w-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flyer Design</h3>
              <p className="text-gray-600">
                Eye-catching flyers for events, businesses, churches, and special occasions that grab attention and
                communicate your message effectively.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-primary-200">
              <div className="mx-auto h-16 w-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YouTube Thumbnails</h3>
              <p className="text-gray-600">
                Bold and engaging YouTube thumbnails designed to increase click-through rates and boost your video's
                visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
