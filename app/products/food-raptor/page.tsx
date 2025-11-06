"use client"
import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"

import { useCart } from "@/contexts/cart-context"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const router = useRouter()

  const products = [
    { id: 1, name: " D3+K2", image: "/raptor-d3-k2.jpg", category: "Vitamins" },
    { id: 2, name: " Calcium", image: "/raptor-calcium.jpg", category: "Minerals" },
    { id: 3, name: " Follic Acid", image: "/raptor-follic-acid.jpg", category: "Vitamins" },
    { id: 4, name: "Magnesium", image: "/raptor-magnesium.jpg", category: "Minerals" },
    { id: 5, name: " Omega 3", image: "/raptor-omega3.jpg", category: "Health" },
    { id: 6, name: " Multivitamin", image: "/raptor-multivitamin.jpg", category: "Vitamins" },
    { id: 7, name: " Sleep", image: "/raptor-sleep.jpg", category: "Wellness" },
    { id: 8, name: " V-Iron", image: "/raptor-v-iron.jpg", category: "Minerals" },
    { id: 9, name: " Vitamin C", image: "/raptor-vitamin-c.jpg", category: "Vitamins" },
    { id: 10, name: "Ashwagandha", image: "/aswaga.jpeg", category: "Wellness" },
    { id: 11, name: "Chelated Zinc", image: "/chelated.jpeg", category: "Minerals" },

    
  ]

  const categories = ["All", "Vitamins", "Minerals", "Health", "Wellness"]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

 const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`)
}

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Filter and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={
                      selectedCategory === category
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "text-gray-700 border-gray-300 hover:border-green-500"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14">
        {/* Breadcrumb */}
<div className="text-gray-500 text-sm mb-2 ml-50">
  <Link href="/" className="hover:text-green-600">Home</Link> / 
  <span className="text-gray-700 font-semibold"> Food Raptor</span>
</div>
    {/* عنوان القسم */}
    <h1 className="text-4xl font-mono text-black-600 mb-30 mt-8 ml-50">
           Food Raptor
        </h1>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl bg-gray-100 h-72 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 transition-colors text-center">
                      {product.name}
                    </h3>

                    <div className="text-center">
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-10">
              No products found matching your search.
            </p>
          )}
        </div>
      </section>

      {/* Bottom Green Section */}
    

      <Footer />
    </div>
  )
}
