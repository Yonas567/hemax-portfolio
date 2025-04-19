import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Globe,
  Mail,
  MousePointerClick,
  PenTool,
  Search,
  Share2,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Laptop,
  Database,
  LineChart,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import TestimonialSlider from "@/components/testimonial-slider";
import ParallaxSection from "@/components/parallax-section";

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-purple-500" />,
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility in search results with our data-driven SEO strategies that drive organic traffic and increase conversions.",
      features: [
        "Keyword Research & Strategy",
        "On-Page & Technical SEO",
        "Link Building",
        "SEO Audits & Analysis",
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-pink-500" />,
      title: "Social Media Marketing",
      description:
        "Build brand awareness, engage your audience, and drive traffic with strategic social media campaigns across all major platforms.",
      features: [
        "Platform Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Campaigns",
      ],
    },
    {
      icon: <MousePointerClick className="h-10 w-10 text-purple-500" />,
      title: "PPC Advertising",
      description:
        "Maximize ROI with targeted pay-per-click campaigns that put your brand in front of the right audience at the right time.",
      features: [
        "Google Ads Management",
        "Display Advertising",
        "Remarketing Campaigns",
        "Conversion Optimization",
      ],
    },
    {
      icon: <PenTool className="h-10 w-10 text-pink-500" />,
      title: "Content Marketing",
      description:
        "Engage your audience with compelling, valuable content that establishes your brand as an industry authority and drives conversions.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Ebooks & Whitepapers",
        "Video Content",
      ],
    },
    {
      icon: <Mail className="h-10 w-10 text-purple-500" />,
      title: "Email Marketing",
      description:
        "Nurture leads and build customer loyalty with personalized email campaigns that deliver the right message at the right time.",
      features: [
        "Campaign Strategy",
        "Email Automation",
        "List Management",
        "Performance Analysis",
      ],
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      title: "Web Design & Development",
      description:
        "Create a stunning, user-friendly website that reflects your brand identity and converts visitors into customers.",
      features: [
        "Responsive Design",
        "UX/UI Optimization",
        "E-commerce Solutions",
        "Website Maintenance",
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
            alt="Our Services"
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
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-zinc-400">
                Comprehensive digital marketing solutions tailored to help your
                business grow and succeed in the digital landscape.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 h-full group">
                  <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-6">{service.description}</p>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-purple-400">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 group">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                        <span className="text-zinc-300 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We leverage cutting-edge tools and platforms to deliver
                exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-12 w-12 text-purple-500" />,
                title: "SEO Tools",
                tools: [
                  "SEMrush",
                  "Ahrefs",
                  "Google Search Console",
                  "Moz Pro",
                  "Screaming Frog",
                ],
              },
              {
                icon: <Zap className="h-12 w-12 text-pink-500" />,
                title: "Social Media Platforms",
                tools: [
                  "Hootsuite",
                  "Buffer",
                  "Sprout Social",
                  "Facebook Business Manager",
                  "TikTok Ads Manager",
                ],
              },
              {
                icon: (
                  <MousePointerClick className="h-12 w-12 text-purple-500" />
                ),
                title: "PPC & Analytics",
                tools: [
                  "Google Ads",
                  "Google Analytics",
                  "Microsoft Advertising",
                  "Hotjar",
                  "Crazy Egg",
                ],
              },
              {
                icon: <PenTool className="h-12 w-12 text-pink-500" />,
                title: "Content Creation",
                tools: [
                  "Adobe Creative Suite",
                  "Canva",
                  "Grammarly",
                  "Hemingway Editor",
                  "Loom",
                ],
              },
              {
                icon: <Mail className="h-12 w-12 text-purple-500" />,
                title: "Email Marketing",
                tools: [
                  "Mailchimp",
                  "HubSpot",
                  "ActiveCampaign",
                  "Klaviyo",
                  "SendGrid",
                ],
              },
              {
                icon: <Laptop className="h-12 w-12 text-pink-500" />,
                title: "Web Development",
                tools: ["WordPress", "Shopify", "React", "Next.js", "Webflow"],
              },
            ].map((stack, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 h-full group hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-zinc-800/80 transition-colors">
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-bold">{stack.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ParallaxSection>
        <section className="py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  We follow a proven methodology to ensure your digital
                  marketing campaigns deliver results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Search className="h-12 w-12 text-purple-500" />,
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, target audience, and competitive landscape.",
                },
                {
                  icon: <BarChart className="h-12 w-12 text-pink-500" />,
                  title: "Strategy",
                  description:
                    "We develop a customized digital marketing strategy aligned with your business objectives.",
                },
                {
                  icon: <Share2 className="h-12 w-12 text-purple-500" />,
                  title: "Implementation",
                  description:
                    "Our team executes the strategy across all relevant digital channels with precision.",
                },
                {
                  icon: <TrendingUp className="h-12 w-12 text-pink-500" />,
                  title: "Optimization",
                  description:
                    "We continuously monitor, analyze, and refine our approach to maximize results.",
                },
              ].map((step, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 text-center relative group hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="mx-auto mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-400">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={600}>
              <div className="mt-12 text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 transform transition-transform hover:scale-105">
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      {/* Industry Solutions */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Tailored digital marketing strategies for your specific industry
                needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare",
                description:
                  "Reach more patients and grow your clinic with smart, reliable marketing.",
                image: "/health.jpg",
                services: [
                  "Patient Ads",
                  "Reputation Boost",
                  "Website Optimization",
                ],
              },
              {
                industry: "Dental",
                description:
                  "Bring more smiles to your clinic with targeted dental marketing solutions.",
                image: "/dental.jpg",
                services: ["Google Ads", "Social Media", "Local SEO"],
              },
              {
                industry: "Cosmetics & Dermatology",
                description:
                  "Build a beauty brand people trust and love with creative digital campaigns.",
                image: "/cosmo.jpg",
                services: [
                  "Instagram Ads",
                  "Content Creation",
                  "Brand Awareness",
                ],
              },
              {
                industry: "Furniture",
                description:
                  "Showcase your best pieces and attract more buyers with stunning visuals.",
                image: "/furniture.jpg",
                services: ["Product Ads", "Social Media", "Website Design"],
              },
              {
                industry: "Decor",
                description:
                  "Inspire your audience and grow your decor brand with eye-catching marketing.",
                image: "/decore.jpg",
                services: [
                  "Pinterest Marketing",
                  "Email Campaigns",
                  "Influencer Collabs",
                ],
              },
            ].map((industry, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-zinc-800 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.industry}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold">{industry.industry}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-zinc-400 mb-4">{industry.description}</p>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">
                      Key Services:
                    </h4>
                    <ul className="space-y-1">
                      {industry.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Analytics */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">
                  Data-Driven Approach
                </h2>
                <p className="text-zinc-400">
                  We believe in making decisions based on data, not assumptions.
                  Our analytics-focused approach ensures that your marketing
                  budget is spent efficiently and effectively.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Database className="h-6 w-6 text-purple-500" />,
                      title: "Comprehensive Data Collection",
                      description:
                        "We gather data from multiple sources to get a complete picture of your digital performance.",
                    },
                    {
                      icon: <LineChart className="h-6 w-6 text-pink-500" />,
                      title: "Advanced Analytics",
                      description:
                        "Our team uses sophisticated analytics tools to extract meaningful insights from your data.",
                    },
                    {
                      icon: <BarChart className="h-6 w-6 text-purple-500" />,
                      title: "Regular Reporting",
                      description:
                        "We provide clear, actionable reports that help you understand your ROI and performance.",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-pink-500" />,
                      title: "Continuous Optimization",
                      description:
                        "Based on data insights, we continuously refine your strategies for better results.",
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
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-30 blur-xl animate-pulse"></div>
                <Image
                  src="/digital.jpg"
                  alt="Data Analytics"
                  width={600}
                  height={600}
                  className="rounded-xl relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our
                satisfied clients
              </p>
            </div>
          </ScrollReveal>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Digital Marketing?
            </h2>
            <p className="text-zinc-200 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can help your
              business grow.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-zinc-100 rounded-full px-8 transform transition-transform hover:scale-105">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
