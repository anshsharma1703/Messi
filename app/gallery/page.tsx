"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, ZoomIn } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/gallery/cartoon-stickers.jpg",
      title: "Cartoon Network Collection",
      category: "Cartoon Stickers",
      description: "Featuring Doraemon, Mickey Mouse, and other beloved cartoon characters",
    },
    {
      src: "/gallery/coffee-stickers.jpg",
      title: "Coffee Lovers Collection",
      category: "Themed Stickers",
      description: "Coffee-themed stickers with quotes, molecular structures, and coffee art",
    },
    {
      src: "/gallery/spooky-stickers.jpg",
      title: "Spooky Halloween Collection",
      category: "Seasonal Stickers",
      description: "Halloween-themed stickers with ghosts, horror references, and spooky designs",
    },
    {
      src: "/gallery/shinchan-stickers.jpg",
      title: "Shin-chan Character Collection",
      category: "Anime Stickers",
      description: "Various poses and expressions of the popular Shin-chan character",
    },
    {
      src: "/gallery/anime-stickers.jpg",
      title: "Pop Culture Mix",
      category: "Mixed Collection",
      description: "One Piece, Batman, Spider-Man, and other popular culture characters",
    },
    {
      src: "/gallery/laptop-stickers.jpg",
      title: "Laptop Sticker Application",
      category: "Application Example",
      description: "Real-world application showing how our stickers look on devices",
    },
    {
      src: "/gallery/meme-card.jpg",
      title: "Custom Meme Cards",
      category: "Custom Designs",
      description: "Personalized meme-style cards with custom text and designs",
    },
  ]

  const categories = [
    "All",
    "Cartoon Stickers",
    "Themed Stickers",
    "Seasonal Stickers",
    "Anime Stickers",
    "Mixed Collection",
    "Application Example",
    "Custom Designs",
  ]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const handleOrderStickers = () => {
    const message = "Hi! I'm interested in ordering custom stickers. Can you help me with the process?"
    window.open(`https://wa.me/918847050076?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 neon-card text-yellow-400 border border-yellow-400/50 px-6 py-2 font-medium tracking-wide shadow-sm neon-pulse">
            Our Gallery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight gradient-text neon-text">
            Creative Sticker Designs
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our vibrant collection of custom stickers featuring cartoon characters, themed designs, and creative
            artwork that brings joy and personality to any surface.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "neon-button bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-0 neon-glow"
                    : "neon-border border-2 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 backdrop-blur-sm"
                } px-6 py-2 font-medium transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="neon-card group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700/50 shadow-lg bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(image.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="neon-button bg-cyan-400/20 backdrop-blur-sm hover:bg-cyan-400/30 text-white border border-cyan-400/50 neon-glow"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 neon-card text-white border border-cyan-400/30">
                    {image.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight gradient-text">{image.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full neon-card border border-cyan-400/30 rounded-lg overflow-hidden">
            <Button
              size="sm"
              variant="ghost"
              className="absolute -top-12 right-0 text-white hover:bg-cyan-400/20 z-10 neon-cyan"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full size view"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Love What You See?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Get your own custom stickers designed and printed with the same quality and creativity. We bring your ideas
            to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleOrderStickers}
              className="neon-button bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 neon-glow"
            >
              Order Custom Stickers
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="neon-border border-2 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 px-8 py-3 text-lg font-medium bg-transparent backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
