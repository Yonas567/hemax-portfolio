"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  industry: string;
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Mekia",
      position: "CEO",
      company: "Alpha dental clinic",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Working with I Digital has transformed our online presence. Their ad strategy brought in 3x more leads in just two weeks!",
      rating: 5,
      industry: "dental clinic",
    },
    {
      id: 2,
      name: "Dr digafe tsegaye ",
      position: "CEO",
      company: "Abed dermatology",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Fast and dedicated team work along side visible transformation on my bussiness.",
      rating: 5,
      industry: "Dermatology",
    },

    {
      id: 4,
      name: "Gashaw",
      position: "CEO",
      company: "Hospital",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Great working with tem the work ethics and determination is out of this world!!",
      rating: 5,
      industry: "Hospital",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-50 rounded-3xl"></div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-left mb-6">
              <div className="flex justify-center md:justify-start mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-zinc-400">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-purple-400 font-semibold">
                {testimonials[currentIndex].company}
              </p>
              <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-400">
                {testimonials[currentIndex].industry}
              </span>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Previous testimonial">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                aria-label="Next testimonial">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3 relative overflow-hidden">
            <div
              className={cn(
                "relative transition-all duration-500 ease-in-out",
                isAnimating && direction === "right"
                  ? "translate-x-[-100%] opacity-0"
                  : "",

                isAnimating && direction === "left"
                  ? "translate-x-[100%] opacity-0"
                  : ""
              )}>
              <div className="bg-zinc-800/80 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 relative">
                <MessageSquare className="absolute top-6 left-6 h-12 w-12 text-purple-500/20" />
                <div className="relative">
                  <p className="text-xl md:text-2xl italic text-zinc-300 mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
                setIsAnimating(true);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 w-6"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
