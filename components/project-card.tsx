import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  image: string
  shortDescription: string
}

export default function ProjectCard({ id, title, image, shortDescription }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${id}`} className="group block">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-md border border-gray-200">
        <div className="aspect-w-16 aspect-h-9 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} project cover`}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 text-base line-clamp-2">{shortDescription}</p>
        </div>
      </article>
    </Link>
  )
}
