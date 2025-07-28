import { projects } from "@/data/projects"
import ProjectCard from "@/components/project-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Blessed Designs' portfolio featuring branding, web design, mobile apps, and print design projects marked by simplicity and excellence.",
  openGraph: {
    title: "Portfolio - Alex Designer",
    description:
      "Explore Alex Designer's portfolio featuring branding, web design, mobile apps, and print design projects.",
  },
}

export const dynamic = "force-dynamic"

export default async function PortfolioPage() {
  // Simulate fetching fresh data
  await new Promise((resolve) => setTimeout(resolve, 100))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">My Portfolio</h1>
          <p className="text-lg leading-8 text-primary-50 max-w-2xl mx-auto">
            A collection of my recent work spanning branding, logo design, flyer design, and IV design. Each
            project represents a unique challenge and creative solution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                shortDescription={project.shortDescription} // Pass shortDescription
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
