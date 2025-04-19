"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              logo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-[#febc05] hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-[#febc05] hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
