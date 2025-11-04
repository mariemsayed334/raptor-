"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"
import { Apple, Dumbbell } from "lucide-react"

import { Heart, Award } from "lucide-react"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const router = useRouter()

  

  const products = [
    { id: 1, name: "D3+K2", image: "/raptor-d3-k2.jpg" },
    { id: 2, name: "Calcium", image: "/raptor-calcium.jpg" },
    { id: 3, name: "Follic Acid", image: "/raptor-follic-acid.jpg" },
    { id: 4, name: "Magnesium", image: "/raptor-magnesium.jpg" },
    { id: 5, name: "Omega 3", image: "/raptor-omega3.jpg" },
    { id: 6, name: "Multivitamin", image: "/raptor-multivitamin.jpg" },
    { id: 7, name: "Sleep", image: "/raptor-sleep.jpg" },
    { id: 8, name: "V-Iron", image: "/raptor-v-iron.jpg" },
    { id: 9, name: "Vitamin C", image: "/raptor-vitamin-c.jpg" },
  ]

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-30 mt-8">          {/* Food Supplement */}
          <Link
            href="/products/food-raptor"
            className="group flex flex-col items-center cursor-pointer"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <Apple className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 group-hover:text-green-700 transition">
              Food Raptor{" "}
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </h3>
          </Link>

          {/* Sport Nutrition */}
          <Link
            href="/products/sport-nutrition"
            className="group flex flex-col items-center cursor-pointer"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <Dumbbell className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 group-hover:text-green-700 transition">
              Sport Nutrition{" "}
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </h3>
          </Link>
        </div>
      </div>
    </section>

      {/* Products Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl bg-gray-100 h-72 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 transition-colors text-center">
                      {product.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {products.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-10">
              No products found.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
