"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <Link href="/" className="neon-link text-sm md:text-base text-gray-200 hover:text-white">
        Home
      </Link>
      <Link href="/services" className="neon-link text-sm md:text-base text-gray-200 hover:text-white">
        Services
      </Link>
      <Link href="/portfolio" className="neon-link text-sm md:text-base text-gray-200 hover:text-white">
        Portfolio
      </Link>
      <Link href="/gallery" className="neon-link text-sm md:text-base text-gray-200 hover:text-white">
        Gallery
      </Link>
      <Link href="/contact" className="neon-link text-sm md:text-base text-gray-200 hover:text-white">
        Contact
      </Link>
      <Link href="/contact">
        <Button className="neon-button bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0 px-4 py-2">
          Get Quote
        </Button>
      </Link>
    </nav>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-gray-900/70 backdrop-blur-md neon-border-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/shelom-graphics-logo.png"
              alt="Shelom Graphics logo"
              width={36}
              height={36}
              className="rounded-md neon-glow"
            />
            <span className="text-white font-semibold tracking-tight">
              <span className="neon-cyan">Shelom</span> <span className="neon-pink">Graphics</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/80">
          <div className="max-w-7xl mx-auto px-6 pb-4 pt-3">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  )
}
