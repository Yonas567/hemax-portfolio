import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Award,
  TrendingUp,
  BarChart,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCounter from "@/components/animated-counter";
import ParallaxSection from "@/components/parallax-section";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "TechSolutions Rebrand",
      category: "Branding & SEO",
      description:
        "Complete digital rebrand and SEO strategy that increased organic traffic by 150% in 6 months.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "150% increase in organic traffic",
        "200% increase in lead generation",
        "45% reduction in bounce rate",
      ],
    },
    {
      title: "Retail Innovations Campaign",
      category: "Social Media Marketing",
      description:
        "Strategic social media campaign across multiple platforms that boosted engagement and sales.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "300% increase in social engagement",
        "25% increase in online sales",
        "45,000 new followers",
      ],
    },
    {
      title: "Growth Ventures PPC",
      category: "PPC Advertising",
      description:
        "Targeted PPC campaign that significantly reduced cost per acquisition and increased ROI.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "40% reduction in cost per acquisition",
        "85% increase in conversion rate",
        "120% increase in ROI",
      ],
    },
    {
      title: "EcoFriendly Email Campaign",
      category: "Email Marketing",
      description:
        "Personalized email marketing strategy that revitalized customer engagement and boosted sales.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "45% open rate (industry avg: 20%)",
        "12% click-through rate",
        "35% increase in repeat purchases",
      ],
    },
    {
      title: "Luxury Brand Website",
      category: "Web Design & Development",
      description:
        "Premium e-commerce website with seamless UX that elevated the brand and increased conversions.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "65% increase in time on site",
        "45% reduction in cart abandonment",
        "85% increase in mobile conversions",
      ],
    },
    {
      title: "HealthTech Content Strategy",
      category: "Content Marketing",
      description:
        "Comprehensive content strategy that established the client as an industry thought leader.",
      image: "/placeholder.svg?height=600&width=800",
      results: [
        "250% increase in blog traffic",
        "35 high-quality backlinks generated",
        "15 media mentions",
      ],
    },
  ];

  return (
    <div className="pt-16 bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Our Portfolio"
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
                  Our Work
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-zinc-400">
                Explore our case studies and discover how we've helped
                businesses achieve their digital marketing goals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Our Impact By The Numbers
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We deliver measurable results that drive business growth
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                value: 150,
                suffix: "%",
                label: "Average Traffic Increase",
                icon: (
                  <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                ),
              },
              {
                value: 85,
                suffix: "%",
                label: "Conversion Rate Improvement",
                icon: (
                  <BarChart className="h-8 w-8 text-pink-500 mx-auto mb-4" />
                ),
              },
              {
                value: 40,
                suffix: "%",
                label: "Cost Per Acquisition Reduction",
                icon: (
                  <Award className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                ),
              },
              {
                value: 200,
                suffix: "+",
                label: "Successful Projects",
                icon: (
                  <CheckCircle className="h-8 w-8 text-pink-500 mx-auto mb-4" />
                ),
              },
            ].map((stat, index) => (
              <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 group">
                {stat.icon}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-zinc-400 mt-2 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore how we've helped businesses across various industries
              achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-black/50 border-white/20 text-white hover:bg-black/70">
                        <Link
                          href={`/portfolio/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="flex items-center gap-2">
                          View Case Study{" "}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-400">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {item.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-zinc-300">
                            <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <ParallaxSection>
        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Success Story Spotlight
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  A closer look at one of our most successful client
                  partnerships
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Featured Case Study"
                    width={600}
                    height={600}
                    className="rounded-xl relative z-10"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-sm font-semibold rounded-full mb-3">
                    E-commerce Success
                  </div>
                  <h3 className="text-2xl font-bold">
                    LuxuryGoods Online Store
                  </h3>
                  <p className="text-zinc-400">
                    LuxuryGoods came to us with a beautiful product line but
                    struggling online sales. Their website wasn't converting
                    visitors, and their digital marketing efforts weren't
                    reaching the right audience.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-zinc-300">
                        Low conversion rate (1.2%), high cart abandonment (78%),
                        and ineffective ad spend with poor targeting.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">
                        Our Solution
                      </h4>
                      <p className="text-zinc-300">
                        Complete website redesign with UX optimization, targeted
                        PPC campaigns, and email marketing automation for
                        abandoned carts.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">
                        The Results
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300">
                            320% increase in conversion rate
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300">
                            45% reduction in cart abandonment
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300">
                            215% increase in ROAS (Return on Ad Spend)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 mt-4 transform transition-transform hover:scale-105">
                    <Link href="/portfolio/luxurygoods-online-store">
                      Read Full Case Study{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Client Logos */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We've had the privilege of working with amazing brands across
                various industries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 12 }).map((_, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="flex items-center justify-center p-6 bg-zinc-800 rounded-xl hover:bg-zinc-800/80 transition-all duration-300 grayscale hover:grayscale-0">
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Client Logo ${index + 1}`}
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

      {/* Testimonial Showcase */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Hemax transformed our digital presence completely. Their SEO strategies helped us rank for competitive keywords and significantly increased our organic traffic.",
                name: "Sarah Johnson",
                position: "Marketing Director",
                company: "TechSolutions Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The social media campaigns developed by Hemax exceeded our expectations. We saw a 200% increase in engagement and a significant boost in conversions.",
                name: "Michael Brown",
                position: "CEO",
                company: "Retail Innovations",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Working with Hemax has been a game-changer for our business. Their data-driven approach to PPC helped us reduce our cost per acquisition by 40%.",
                name: "Jennifer Lee",
                position: "Digital Strategist",
                company: "Growth Ventures",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Hemax's email marketing strategy revitalized our customer engagement. With open rates of 45% and a 35% increase in repeat purchases, they've proven their expertise.",
                name: "David Rodriguez",
                position: "Founder",
                company: "EcoFriendly Solutions",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The premium e-commerce website Hemax designed for us perfectly captures our brand essence. The seamless UX resulted in a 65% increase in time on site.",
                name: "Alexandra Chen",
                position: "Brand Manager",
                company: "Luxury Lifestyle",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Hemax's content strategy established us as thought leaders in the healthcare technology space. With a 250% increase in blog traffic, our digital authority has skyrocketed.",
                name: "Robert Williams",
                position: "CMO",
                company: "HealthTech Innovations",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-purple-500/30 transition-all duration-300 h-full group">
                  <div className="mb-6 text-purple-400 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-500">
                      <path
                        d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V17C10 17.5304 9.78929 18.0391 9.41421 18.4142C9.03914 18.7893 8.53043 19 8 19H6C5.46957 19 4.96086 18.7893 4.58579 18.4142C4.21071 18.0391 4 17.5304 4 17V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-zinc-400 text-sm">
                        {testimonial.position}
                      </p>
                      <p className="text-purple-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Be Our Next Success Story?
                </h2>
                <p className="text-zinc-200 mb-8">
                  Let's discuss how we can help your business achieve similar
                  results with our tailored digital marketing strategies.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-zinc-100 rounded-full px-8 transform transition-transform hover:scale-105">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="h-5 w-5 text-purple-400" />
                    <h3 className="font-semibold">View More Case Studies</h3>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Explore our extended portfolio with detailed case studies
                    and results.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="h-5 w-5 text-purple-400" />
                    <h3 className="font-semibold">
                      Download Our Capabilities Deck
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Get a comprehensive overview of our services and expertise.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
