"use client"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const router = useRouter()

  const products = [
    {
      id: 1,
      name: "Raptor D3+K2",
      image: "/raptor-d3-k2.jpg",
      category: "Vitamins",
    },
    {
      id: 2,
      name: "Raptor Calcium",
      image: "/raptor-calcium.jpg",
      category: "Minerals",
    },
    {
      id: 3,
      name: "Raptor Follic Acid",
      image: "/raptor-follic-acid.jpg",
      category: "Vitamins",
    },
    {
      id: 4,
      name: "Raptor Magnesium",
      image: "/raptor-magnesium.jpg",
      category: "Minerals",
    },
    {
      id: 5,
      name: "Raptor Omega 3",
      image: "/raptor-omega3.jpg",
      category: "Health",
    },
    {
      id: 6,
      name: "Raptor Multivitamin",
      image: "/raptor-multivitamin.jpg",
      category: "Vitamins",
    },
    {
      id: 7,
      name: "Raptor Sleep",
      image: "/raptor-sleep.jpg",
      category: "Wellness",
    },
    {
      id: 8,
      name: "Raptor V-Iron",
      image: "/raptor-v-iron.jpg",
      category: "Minerals",
    },
    {
      id: 9,
      name: "Raptor Vitamin C",
      image: "/raptor-vitamin-c.jpg",
      category: "Vitamins",
    },
  ]

  const categories = ["All", "Vitamins", "Minerals", "Health", "Wellness"]

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our premium collection of Raptor nutrition supplements designed to enhance your health and
            performance.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className={category === "All" ? "bg-green-600 hover:bg-green-700" : ""}
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-40 h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 transition-colors text-center">
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
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-green-100 mb-8">
            Our nutrition experts are here to help you find the perfect supplements for your goals.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
            Get Expert Advice
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
