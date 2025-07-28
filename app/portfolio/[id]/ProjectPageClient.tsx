"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ZoomIn, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ProjectPageClientProps {
  params: {
    id: string
  }
}

export default function ProjectPageClient({ params }: ProjectPageClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [api, setApi] = useState<any>()

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const openImageDialog = (index: number) => {
    setCurrentImageIndex(index)
    setIsDialogOpen(true)
  }

  useEffect(() => {
    if (!api) return

    api.scrollTo(currentImageIndex)
  }, [api, currentImageIndex, isDialogOpen])

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    if (target.style.transform === "scale(2)") {
      target.style.transform = "scale(1)"
      target.style.transformOrigin = "center center"
    } else {
      target.style.transform = "scale(2)"
      target.style.transformOrigin = `${x}% ${y}%`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/portfolio" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openImageDialog(index)}
              >
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Dialog with Carousel */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Carousel
                className="w-full h-full"
                setApi={setApi}
                opts={{
                  startIndex: currentImageIndex,
                  loop: true,
                }}
              >
                <CarouselContent className="h-full">
                  {project.images.map((image, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center">
                      <div
                        className="relative max-w-full max-h-full cursor-zoom-in transition-transform duration-300 ease-in-out"
                        onClick={handleZoom}
                        onContextMenu={(e) => e.preventDefault()}
                        style={{
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                        }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={800}
                          height={600}
                          className="max-w-full max-h-[80vh] object-contain"
                          draggable={false}
                          onDragStart={(e) => e.preventDefault()}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 text-white border-white hover:bg-white/20" />
                <CarouselNext className="right-4 text-white border-white hover:bg-white/20" />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
