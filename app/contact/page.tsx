"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { contactInfo } from "@/data/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/xdkogqpw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message delivered, I'll be in touch shortly",
          className: "bg-primary text-white border-secondary shadow-lg",
          duration: 5000,
        })

        // Reset form
        e.currentTarget.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your project and create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Prefer to reach out directly? Here's how you can contact me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">{contactInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let's Create Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  I'm passionate about helping businesses and individuals tell their stories through compelling visual
                  design. Whether you need a logo, flyer, or complete brand identity, I'm here to bring your vision to
                  life.
                </p>
                <p className="text-gray-600">
                  I typically respond to inquiries within 24 hours and offer free consultations for new projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
