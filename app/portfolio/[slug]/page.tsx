import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectPageClient from "./ProjectPageClient"
import type { Metadata } from "next"

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Blessed Designs`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - Blessed Designs`,
      description: project.shortDescription,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
