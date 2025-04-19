import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Clock,
  Users,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import ParallaxSection from "@/components/parallax-section";
import AnimatedCounter from "@/components/animated-counter";
import ClientCarousel from "@/components/client-carasoul";

export default function AboutPage() {
  const cultureImages = [
    "/collaboration.jpg",
    "/learning.jpg",
    "/worklife.jpg",

    "/clue.jpg",
  ];
  return (
    <div className="pt-16 bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abel.JPG"
            alt="About Hemax"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 text-sm font-semibold border border-purple-500/20">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Hemax
              </h1>
              <p className="text-xl text-zinc-400">
                We're a team of digital marketing experts passionate about
                helping businesses grow their online presence and achieve their
                goals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Founded in 2015, Hemax Digital Marketing Agency was born out
                    of a passion for helping businesses navigate the complex
                    digital landscape. Our founders recognized that many
                    companies were struggling to effectively leverage digital
                    channels to grow their businesses.
                  </p>
                  <p>
                    What started as a small team of digital enthusiasts has
                    grown into a full-service agency with expertise across all
                    digital marketing disciplines. Throughout our journey, we've
                    remained committed to our core values of innovation,
                    transparency, and results-driven strategies.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              direction="left"
              className="order-first md:order-last">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                <Image
                  src="/abel.JPG"
                  alt="Our Story"
                  width={600}
                  height={600}
                  className="rounded-xl relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                From humble beginnings to industry leadership
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-[-50%]"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2021",
                  title: "Humble Beginnings",
                  description:
                    "i dgital was founded with a vision to help small businesses navigate the digital landscape.",
                  image: "/first.jpg",
                },

                {
                  year: "2022",
                  title: "Growing Team",
                  description:
                    "Our team grew to 25 specialists, allowing us to serve more clients across various industries.",
                  image: "/growingteam.jpg",
                },
                {
                  year: "2023",
                  title: "acceptance",
                  description: "i digital accepted by many companies.",
                  image: "/growth.jpg",
                },
                {
                  year: "2024",
                  title: "branch Expansion",
                  description:
                    "We expanded our operations to serve clients in different towns, with a focus on innovative digital solutions.",
                  image: "/global.jpg",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}>
                  <ScrollReveal
                    direction={index % 2 === 0 ? "left" : "right"}
                    className="w-full md:w-1/2 px-6 md:px-12">
                    <div
                      className={`bg-zinc-900 p-6 rounded-xl border border-zinc-800 ${
                        index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                      }`}>
                      <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-sm font-semibold rounded-full mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-zinc-400">{milestone.description}</p>
                    </div>
                  </ScrollReveal>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform translate-x-[-50%] z-10"></div>

                  <ScrollReveal
                    direction={index % 2 === 0 ? "right" : "left"}
                    className="w-full md:w-1/2 mt-6 md:mt-0 px-6 md:px-12">
                    <div
                      className={`${index % 2 === 0 ? "md:ml-6" : "md:mr-6"}`}>
                      <Image
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        width={400}
                        height={300}
                        className="rounded-xl"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                These principles guide everything we do and define how we work
                with our clients
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-purple-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every project, delivering work that exceeds expectations and drives meaningful results.",
              },
              {
                icon: <Users className="h-12 w-12 text-pink-500" />,
                title: "Collaboration",
                description:
                  "We believe in working closely with our clients, treating their business as our own and forming lasting partnerships.",
              },
              {
                icon: <Clock className="h-12 w-12 text-purple-500" />,
                title: "Innovation",
                description:
                  "We stay ahead of digital trends and continuously evolve our strategies to leverage the latest technologies and techniques.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <div className="mx-auto mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-center">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <ParallaxSection>
        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Our diverse team of experts brings together a wealth of
                  experience and creativity
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "With over 15 years of experience in digital marketing, Alex leads our team with vision and expertise.",
                },
                {
                  name: "Sarah Williams",
                  role: "SEO Specialist",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Sarah's data-driven approach to SEO has helped countless clients achieve top rankings in search results.",
                },
                {
                  name: "Michael Chen",
                  role: "Social Media Director",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Michael's innovative social media strategies have generated millions of engagements for our clients.",
                },
                {
                  name: "Jessica Miller",
                  role: "Content Strategist",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Jessica crafts compelling narratives that connect brands with their audiences in meaningful ways.",
                },
              ].map((member, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-zinc-900 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <p className="text-zinc-300 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-zinc-400">{member.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-12 text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800">
                  <Link href="/careers">
                    Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection> */}

      {/* Company Culture */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Our Company Culture</h2>
                <p className="text-zinc-400">
                  At Hemax, we believe that a positive and inclusive work
                  environment leads to better results for our clients. Our
                  culture is built on these key principles:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Users className="h-6 w-6 text-purple-500" />,
                      title: "Collaboration & Teamwork",
                      description:
                        "We work together across disciplines to deliver integrated solutions.",
                    },
                    {
                      icon: <GraduationCap className="h-6 w-6 text-pink-500" />,
                      title: "Continuous Learning",
                      description:
                        "We invest in ongoing education to stay at the forefront of digital marketing.",
                    },
                    {
                      icon: <Heart className="h-6 w-6 text-purple-500" />,
                      title: "Work-Life Balance",
                      description:
                        "We promote well-being and balance to foster creativity and productivity.",
                    },
                    {
                      icon: <Briefcase className="h-6 w-6 text-pink-500" />,
                      title: "Client-Centric Approach",
                      description:
                        "We put our clients' success at the center of everything we do.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {cultureImages.map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`Company Culture ${index + 1}`}
                      width={300}
                      height={300}
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Growth Journey</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We're proud of how far we've come and excited about where we're
                headed
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 8, suffix: "+", label: "Years in Business" },
              { value: 45, suffix: "+", label: "Team Members" },
              { value: 12, suffix: "", label: "Countries Served" },
              { value: 98, suffix: "%", label: "Client Retention" },
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

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <ClientCarousel />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-zinc-200 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business achieve its digital
              marketing goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-zinc-100 rounded-full px-8 transform transition-transform hover:scale-105">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
