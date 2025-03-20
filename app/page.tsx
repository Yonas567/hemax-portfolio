import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, CheckCircle, ChevronRight, MousePointerClick, TrendingUp, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/testimonial-slider"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxSection from "@/components/parallax-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Digital Marketing Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 space-y-10 text-center">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="inline-block animate-bounce mb-4">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 text-sm font-semibold border border-purple-500/20">
                  Award-Winning Digital Marketing Agency
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse">
                  HEMAX
                </span>{" "}
                Digital Marketing
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
                Transforming brands with innovative digital strategies that drive growth and engagement
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 group transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 text-white hover:bg-zinc-900 rounded-full px-8 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90 text-zinc-500" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We offer comprehensive digital marketing solutions tailored to your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
                title: "SEO Optimization",
                description:
                  "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
              },
              {
                icon: <Zap className="h-10 w-10 text-pink-500" />,
                title: "Social Media Marketing",
                description: "Engage your audience and build brand loyalty through strategic social media campaigns.",
              },
              {
                icon: <MousePointerClick className="h-10 w-10 text-purple-500" />,
                title: "PPC Advertising",
                description:
                  "Maximize ROI with targeted pay-per-click campaigns that convert prospects into customers.",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="bg-zinc-800 p-8 rounded-xl hover:bg-zinc-800/80 transition-all duration-500 border border-zinc-700 hover:border-purple-500/50 hover:-translate-y-2 group">
                  <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 group-hover:underline"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact By The Numbers</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We deliver measurable results that drive business growth
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 250, suffix: "+", label: "Clients Served" },
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 150, suffix: "%", label: "Average ROI" },
              { value: 15, suffix: "+", label: "Industry Awards" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all duration-300">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-zinc-400 mt-2 text-lg">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Digital Marketing Team"
                  width={600}
                  height={600}
                  className="rounded-xl relative z-10"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Hemax?</h2>
                <p className="text-zinc-400">
                  We combine creativity, data analytics, and industry expertise to deliver exceptional results for our
                  clients.
                </p>

                <div className="space-y-4">
                  {[
                    "Data-driven strategies tailored to your business goals",
                    "Dedicated team of marketing specialists",
                    "Transparent reporting and communication",
                    "Proven track record of success across industries",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-6 w-6 text-purple-500 shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                      <p className="group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 mt-4 transform transition-transform hover:scale-105"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
          </ScrollReveal>

          <TestimonialSlider />
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-12 w-12 text-yellow-500" />,
                title: "Best Digital Marketing Agency",
                organization: "Marketing Excellence Awards",
                year: "2023",
              },
              {
                icon: <Award className="h-12 w-12 text-purple-500" />,
                title: "Top SEO Service Provider",
                organization: "Digital Strategy Summit",
                year: "2023",
              },
              {
                icon: <Trophy className="h-12 w-12 text-pink-500" />,
                title: "Social Media Campaign of the Year",
                organization: "Social Media Marketing Awards",
                year: "2022",
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-500" />,
                title: "Best PPC Campaign Strategy",
                organization: "Search Marketing Awards",
                year: "2022",
              },
              {
                icon: <Trophy className="h-12 w-12 text-purple-500" />,
                title: "Best Content Marketing Strategy",
                organization: "Content Excellence Awards",
                year: "2023",
              },
              {
                icon: <Award className="h-12 w-12 text-pink-500" />,
                title: "Digital Innovation Award",
                organization: "Tech & Marketing Summit",
                year: "2023",
              },
            ].map((award, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-zinc-800/80 transition-colors">
                      {award.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-yellow-400 transition-colors">{award.title}</h3>
                      <p className="text-zinc-400 text-sm">{award.organization}</p>
                    </div>
                  </div>
                  <div className="ml-16 pl-2 border-l-2 border-zinc-700">
                    <p className="text-zinc-500">{award.year}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <ParallaxSection speed={0.2}>
        <section className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                  <p className="text-zinc-400 max-w-2xl">
                    Stay updated with the latest trends and strategies in digital marketing
                  </p>
                </div>
                <Button asChild variant="outline" className="mt-4 md:mt-0">
                  <Link href="/blog">
                    View All Articles <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "10 SEO Strategies That Actually Work in 2023",
                  excerpt:
                    "Discover the most effective SEO techniques that are driving results in today's digital landscape.",
                  category: "SEO",
                  date: "June 15, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "How to Create a Social Media Strategy That Converts",
                  excerpt:
                    "Learn how to develop a social media plan that not only engages your audience but drives measurable conversions.",
                  category: "Social Media",
                  date: "May 28, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "The Future of PPC: AI-Driven Advertising",
                  excerpt:
                    "Explore how artificial intelligence is revolutionizing pay-per-click advertising and how to stay ahead of the curve.",
                  category: "PPC",
                  date: "April 10, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((post, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="bg-zinc-800 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-zinc-500 text-sm mb-2">{post.date}</p>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-zinc-400 mb-4 flex-grow">{post.excerpt}</p>
                      <Link
                        href="/blog"
                        className="text-purple-400 hover:text-purple-300 inline-flex items-center mt-auto"
                      >
                        Read More{" "}
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-zinc-200 max-w-2xl mx-auto mb-8">
              Let's collaborate to create a digital marketing strategy that drives real results for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-zinc-100 rounded-full px-8 transform transition-transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Partners</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We work with industry-leading platforms to deliver exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-900 p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Partner ${index + 1}`}
                    width={120}
                    height={60}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

