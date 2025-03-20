"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail, MapPin, Phone, Clock, Calendar, ArrowRight, Send } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Select a service",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Here you would normally send the form data to your backend
      console.log(formState)
      // Show success message
      setIsLoading(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "Select a service",
        })
      }, 5000)
    }, 1500)
  }

  // Animated background effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="pt-16 bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Us"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 50%)`,
          }}
        ></div>

        <div className="container relative z-10 px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 text-sm font-semibold border border-purple-500/20">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-zinc-400">
                Ready to transform your digital presence? Get in touch with our team to discuss your project.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-zinc-400 max-w-md">
                        Thank you for contacting us. We'll get back to you shortly. One of our team members will contact
                        you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="bg-zinc-900 border-zinc-700 focus:border-purple-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-zinc-900 border-zinc-700 focus:border-purple-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+1 (123) 456-7890"
                            className="bg-zinc-900 border-zinc-700 focus:border-purple-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="bg-zinc-900 border-zinc-700 focus:border-purple-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm focus:border-purple-500 transition-colors"
                        >
                          <option disabled>Select a service</option>
                          <option>SEO Optimization</option>
                          <option>Social Media Marketing</option>
                          <option>PPC Advertising</option>
                          <option>Content Marketing</option>
                          <option>Email Marketing</option>
                          <option>Web Design & Development</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project and goals..."
                          rows={5}
                          required
                          className="bg-zinc-900 border-zinc-700 focus:border-purple-500 transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full group"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-zinc-400 mb-8">
                    Have questions or ready to start your project? Reach out to us through any of the following
                    channels.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-purple-900/30 transition-colors">
                        <Mail className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <a href="mailto:info@hemax.com" className="text-zinc-400 hover:text-white transition-colors">
                          info@hemax.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-purple-900/30 transition-colors">
                        <Phone className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <a href="tel:+11234567890" className="text-zinc-400 hover:text-white transition-colors">
                          +1 (123) 456-7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-purple-900/30 transition-colors">
                        <MapPin className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Visit Us</h3>
                        <address className="not-italic text-zinc-400">
                          123 Marketing Street
                          <br />
                          Digital City, DC 12345
                          <br />
                          United States
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-purple-900/30 transition-colors">
                        <Clock className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-zinc-400">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    Schedule a Consultation
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    Book a free 30-minute consultation with one of our digital marketing experts to discuss your
                    project.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full group"
                  >
                    <a href="#" className="flex items-center justify-center">
                      Book a Meeting
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden h-[400px] relative group">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Office Location Map"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 max-w-md text-center transform transition-transform duration-500 group-hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">Our Office</h3>
                  <p className="text-zinc-400">123 Marketing Street, Digital City, DC 12345, United States</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We serve clients worldwide with offices in key locations
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                country: "United States",
                address: "123 Marketing Street, NY 10001",
                phone: "+1 (123) 456-7890",
                email: "newyork@hemax.com",
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "45 Digital Avenue, London EC1A 1BB",
                phone: "+44 20 1234 5678",
                email: "london@hemax  London EC1A 1BB",
                phone: "+44 20 1234 5678",
                email: "london@hemax.com",
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "78 Digital Tower, Singapore 018956",
                phone: "+65 6123 4567",
                email: "singapore@hemax.com",
              },
            ].map((office, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-purple-500/30 transition-all duration-300 h-full group">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    {office.city}
                  </h3>
                  <p className="text-purple-400 mb-4">{office.country}</p>

                  <div className="space-y-3 text-zinc-400">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <p>{office.email}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-zinc-300 mb-8">
                  Stay updated with the latest digital marketing trends, tips, and insights delivered straight to your
                  inbox.
                </p>

                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-zinc-800/80 border-zinc-700 focus:border-purple-500 transition-colors"
                    required
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-zinc-500 mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Find answers to common questions about our services and process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer:
                  "Results vary depending on the strategy and channels used. SEO typically takes 3-6 months to show significant results, while PPC and social media advertising can generate results much faster, sometimes within days or weeks.",
              },
              {
                question: "Do you offer customized marketing packages?",
                answer:
                  "Yes, we create tailored marketing strategies based on your specific business goals, target audience, and budget. We don't believe in one-size-fits-all solutions.",
              },
              {
                question: "How do you measure the success of your campaigns?",
                answer:
                  "We track key performance indicators (KPIs) relevant to your goals, such as traffic, conversions, engagement rates, and ROI. We provide regular reports with detailed analytics and insights.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have experience working with clients across various industries, including technology, healthcare, e-commerce, finance, education, and more. Our diverse expertise allows us to develop effective strategies for any business.",
              },
              {
                question: "How often will I receive reports on my campaign performance?",
                answer:
                  "We provide detailed monthly reports that outline the performance of your campaigns, along with insights and recommendations. We also offer access to real-time dashboards for clients who prefer more frequent updates.",
              },
              {
                question: "What makes Hemax different from other digital marketing agencies?",
                answer:
                  "Our data-driven approach, transparent communication, and focus on measurable results set us apart. We don't just implement strategies; we continuously optimize them based on performance data to maximize your ROI.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-purple-500/30 transition-all duration-300 group">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

