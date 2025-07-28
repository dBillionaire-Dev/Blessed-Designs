"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { Project } from "@/types/project"

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [zoomLevel, setZoomLevel] = useState(1)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentImageIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    api.scrollTo(currentImageIndex)
  }, [api, currentImageIndex])

  const openDialog = (index: number) => {
    setCurrentImageIndex(index)
    setIsDialogOpen(true)
    setZoomLevel(1)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setZoomLevel(1)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{project.description}</p>
        </div>

        {/* Cover Image */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer group"
                onClick={() => openDialog(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-2">
                      <ZoomIn className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95">
          <div className="relative w-full h-full flex flex-col">
            {/* Header Controls */}
            <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">{Math.round(zoomLevel * 100)}%</span>
                <Button variant="secondary" size="sm" onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="secondary" size="sm" onClick={closeDialog}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Carousel */}
            <div className="flex-1 flex items-center justify-center p-8">
              <Carousel
                setApi={setApi}
                className="w-full max-w-5xl"
                opts={{
                  startIndex: currentImageIndex,
                }}
              >
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center h-full">
                        <div
                          className="relative max-w-full max-h-full overflow-auto"
                          style={{
                            transform: `scale(${zoomLevel})`,
                            transition: "transform 0.2s ease-in-out",
                          }}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={800}
                            height={600}
                            className="object-contain max-w-full max-h-[80vh] select-none"
                            style={{
                              userSelect: "none",
                              WebkitUserSelect: "none",
                              MozUserSelect: "none",
                              msUserSelect: "none",
                              pointerEvents: zoomLevel > 1 ? "auto" : "none",
                            }}
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
