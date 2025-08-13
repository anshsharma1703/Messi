"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-cyan-400/30 neon-border shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <div className="neon-glow rounded-full p-1">
                <Image
                  src="/shelom-graphics-new-logo.png"
                  alt="Shelom Graphics"
                  width={48}
                  height={48}
                  className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden group ${
                    isActive(item.href)
                      ? "text-cyan-400 neon-cyan bg-cyan-400/10 border border-cyan-400/30"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 hover:border hover:border-cyan-400/20"
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30 neon-pulse transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6 neon-cyan" /> : <Menu className="h-6 w-6 neon-cyan" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 neon-card rounded-lg mt-2 border border-cyan-400/30 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg relative overflow-hidden group ${
                    isActive(item.href)
                      ? "text-cyan-400 neon-cyan bg-cyan-400/10 border border-cyan-400/30"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 hover:border hover:border-cyan-400/20"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
