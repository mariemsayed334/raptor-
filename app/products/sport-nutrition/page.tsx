"use client"
import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"
import { Heart, Award } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function sportNutrition() {
  const router = useRouter()

  const sportNutrition = [
    { id: 1, name: "Amino+EAA", image: "/amino-eaa.jpg", },
    { id: 2, name: "IGNITER", image: "/igniter.jpg", },
    { id: 3, name: " ARGININE+CITROLINE", image: "/arginine-citroline.jpg",  },
    { id: 4, name: "COLLAGEN+MULTIVITAMIN", image: "/collagen.jpg",  },
    { id: 5, name: "CREATIAN MIX", image: "/creatine.jpg", },
    { id: 6, name: " CREATINE+TEST", image: "/cretine+test.jpg",  },
    { id: 7, name: " EAA+", image: "/eaa.jpg",   },
    { id: 8, name: " GLUTAMINE", image: "/glutamine.jpg",  },
     { id: 9, name: " AMINO ACID", image: "/amino acid.jpg",  },
     { id: 10, name: "ISO", image: "/iso.jpg", },
     { id: 11, name: "WHEY", image: "/whey.jpg", },
     { id: 12, name: "L-CRNITINE", image: "/Untitled-1.jpg", },
  ]


  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  
  const handleProductClick = (productId: number) => {
  router.push(`/products/sport-nutrition/${productId}`)
}

  return (
    <div className="min-h-screen bg-white">
      <Header />

      
      
      {/* Products Section */}
<section className="py-14">
  <div className="max-w-7xl mx-auto px-6">
    {/* Breadcrumb */}
<div className="text-gray-500 text-sm mb-2 ml-5">
  <Link href="/" className="hover:text-green-600">Home</Link> / 
  <span className="text-gray-700 font-semibold"> Sport Nutrition</span>
</div>
    {/* عنوان القسم */}
    <h1 className="text-4xl font-mono text-black-600 mb-30 mt-8 ml-50">
  Sport Nutrition
</h1>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sportNutrition.map((product) => (
        <Card
          key={product.id}
          className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl"
          onClick={() => handleProductClick(product.id)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-2xl bg-gray-100 h-80 flex items-center justify-center">
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
  </div>
</section>


          {sportNutrition.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-10">
              No products found.
            </p>
          )}

      {/* Bottom Green Section */}
    

      <Footer />
    </div>
  )
}
