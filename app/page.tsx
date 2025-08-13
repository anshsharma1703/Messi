"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Printer, Layers, Zap, ArrowRight, Star, Users, Award } from "lucide-react"

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <div
          className="neon-progress h-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src="/shelom.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <h1 className="neon-text text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="gradient-text neon-flicker">Shelom Graphics</span>
            </h1>

            <p className="neon-cyan text-2xl md:text-3xl lg:text-4xl mb-8 font-light tracking-wide neon-pulse">
              Premium Packaging & Custom Stickers
            </p>

            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              From pharmaceutical packaging to vibrant custom stickers, we bring creativity and precision to every
              project. Trusted by businesses worldwide for exceptional quality and innovative design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="neon-card p-6 text-center">
              <div className="neon-cyan text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="neon-card p-6 text-center">
              <div className="neon-pink text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="neon-card p-6 text-center">
              <div className="neon-yellow text-3xl font-bold mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-gray-800/30 neon-border-top">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="neon-text text-4xl md:text-5xl font-bold mb-8">About Us</h2>
            <div className="neon-line mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="neon-card p-8 mb-8">
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                At Shelom Graphics, we believe packaging is more than a box — it's the first impression your brand
                makes. Since 2020, we've been passionate about combining creativity, precision, and industry know-how to
                bring unique packaging ideas to life.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Rooted in experience with pharmaceutical and FMCG packaging, our team works with care and attention to
                detail to produce visually striking and practically sound packaging solutions. From healthcare products
                that require clear communication to bold, eye-catching designs for fast-moving consumer goods — we aim
                to support your brand's visibility and presence.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
                Our approach is shaped by curiosity, innovation, and a commitment to long-term collaboration. At Shelom
                Graphics, we're here to help elevate how your brand is presented — thoughtfully, reliably, and with a
                lasting impression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="neon-card p-6">
                <div className="neon-cyan mb-4">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-cyan">Collaborative Approach</h3>
                <p className="text-gray-300">
                  We work closely with you to understand your vision and bring it to life with precision and creativity.
                </p>
              </div>
              <div className="neon-card p-6">
                <div className="neon-pink mb-4">
                  <Award className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-pink">Quality Assured</h3>
                <p className="text-gray-300">
                  Every project meets the highest standards of quality and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="neon-text text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
            <div className="neon-line mx-auto"></div>
          </div>

          <div className="neon-grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neon-card p-8 hover:neon-glow transition-all duration-300">
              <div className="w-16 h-16 neon-cyan rounded-2xl flex items-center justify-center mb-8 neon-pulse">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-cyan mb-4">Pharmaceutical Packaging</h3>
              <p className="text-gray-300 mb-6">
                Specialized packaging solutions ensuring safety, compliance, and brand integrity for healthcare
                products.
              </p>
              <Link href="/services" className="neon-link">
                Learn More <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="neon-card p-8 hover:neon-glow transition-all duration-300">
              <div className="w-16 h-16 neon-pink rounded-2xl flex items-center justify-center mb-8 neon-pulse">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-pink mb-4">Custom Stickers</h3>
              <p className="text-gray-300 mb-6">
                Vibrant custom stickers featuring cartoon characters, themes, and creative designs for any purpose.
              </p>
              <Link href="/gallery" className="neon-link">
                View Gallery <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="neon-card p-8 hover:neon-glow transition-all duration-300">
              <div className="w-16 h-16 neon-yellow rounded-2xl flex items-center justify-center mb-8 neon-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold neon-yellow mb-4">FMCG Packaging</h3>
              <p className="text-gray-300 mb-6">
                Eye-catching packaging solutions for consumer goods that enhance shelf appeal and brand recognition.
              </p>
              <Link href="/portfolio" className="neon-link">
                See Portfolio <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900/80 neon-border-top py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-16 h-16 flex-shrink-0 neon-glow">
                  <Image
                    src="/shelom-graphics-new-logo.png"
                    alt="Shelom Graphics Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="neon-cyan">Shelom</span> <span className="neon-pink">Graphics</span>
                  </span>
                  <span className="text-xs text-gray-400 mt-1 tracking-wider uppercase">
                    Premium Packaging & Stickers
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Your trusted partner for premium packaging solutions and custom stickers. We create visual experiences
                that elevate brands and bring creative ideas to life.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-8 neon-cyan">Services</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/services" className="neon-link">
                    Pharmaceutical Packaging
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    FMCG Packaging
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    Custom Stickers
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="neon-link">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-8 neon-pink">Company</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/" className="neon-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="neon-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="neon-link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="neon-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="neon-border-top mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Shelom Graphics. All rights reserved. | Quality Assured
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 neon-yellow" />
                <span className="text-sm neon-yellow">Premium Quality Guaranteed</span>
              </div>
              <a
                href="https://instagram.com/shelomgraphics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors text-sm neon-pink"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
