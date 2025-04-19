"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Client {
  name: string;
  image: string;
}

export default function ClientCarousel() {
  const clients = [
    { name: "Alpha Dental", image: "/alpha.PNG" },

    { name: "Abed Derma", image: "/abeds.jpg" },
    { name: "Awash General", image: "/awash.jpg" },

    // { name: "Tsedi Makeup", image: "/logos/tsedi-makeup.svg" },
    { name: "Platinum Dental", image: "/platinium.jpg" },

    // { name: "Matty Vello", image: "/logos/matty-vello.svg" },
    { name: "Nexus Physiotherapy", image: "/nexus.jpg" },
    // {
    //   name: "Hammerenoh Speciality Dental",
    //   image: "/logos/hammerenoh-speciality-dental.svg",
    // },

    { name: "Mahi Makeup", image: "/mahi.jpg" },
    {
      name: "Yanet General Hospital",
      image: "/yanet.jpg",
    },

    { name: "Acl Medical Center", image: "/acl.jpg" },

    {
      name: "Betezatha General Hospital",
      image: "/betezata.jpg",
    },

    { name: "Seben Speciality", image: "/seben.jpg" },

    {
      name: "Amin General Hospital",
      image: "/amin.jpg",
    },
    { name: "Benas Dental", image: "/benas.jpg" },

    { name: "Kibrhome Furnitures", image: "/kibrom.jpg" },
  ];

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients];

  // State to pause animation on hover
  const [isPaused, setIsPaused] = useState(false);

  // Ref for the carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle mouse events to pause/resume animation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Calculate the total width for animation
  const itemWidth = 180; // Width of each logo item in pixels
  const totalWidth = itemWidth * clients.length;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 overflow-hidden ">
      <div className="container px-4 md:px-6 mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Trusted Clients
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          We're proud to work with these amazing organizations to deliver
          exceptional digital marketing solutions.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div
          ref={carouselRef}
          className="flex items-center gap-8"
          style={{
            animation: isPaused ? "none" : `scroll 60s linear infinite`,
            transform: "translateX(0)",
          }}>
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-[180px] h-[100px] bg-card/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center border border-border hover:border-purple-500/30 transition-all duration-300 group">
              <div className="relative w-full h-full">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain   transition-all duration-300"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-logo.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX for the animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-180px * ${clients.length} - 2rem * ${clients.length})
            );
          }
        }
      `}</style>
    </section>
  );
}
