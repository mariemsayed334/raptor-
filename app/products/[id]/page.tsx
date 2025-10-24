"use client"

import { Star, Heart, Shield, RotateCcw, CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AddToCartButton from "@/components/add-to-cart-button"
import { useState, useEffect } from "react"

const getProductData = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Raptor D3+K2",
      description: "Supports Bone Strength and Density, Eases Joint Pain And Inflammation, Boosts The Immune System",
      fullDescription:
        "Raptor D3+K2 combines the power of Vitamin D3 and Vitamin K2 to support optimal bone health, cardiovascular function, and immune system strength. This synergistic formula ensures proper calcium absorption and utilization in the body.",
      price: 29.99,
      originalPrice: 34.99,
      image: "/raptor-d3-k2.jpg",
      images: ["/raptor-d3-k2.jpg", "/raptor-calcium.jpg", "/raptor-magnesium.jpg"],
      category: "Bone Health",
      rating: 4.8,
      reviews: 156,
      badge: "Best Seller",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: [
        "Vitamin D3 (Cholecalciferol)",
        "Vitamin K2 (MK-7)",
        "Microcrystalline Cellulose",
        "Magnesium Stearate",
      ],
      howToUse: "Take 1 tablet daily with food, preferably with a meal containing healthy fats for optimal absorption.",
      warnings: [
        "Consult your healthcare provider before use if pregnant or nursing",
        "Keep out of reach of children",
        "Do not exceed recommended dosage",
        "Store in a cool, dry place",
      ],
      benefits: [
        "Supports bone strength and density",
        "Eases joint pain and inflammation",
        "Boosts immune system function",
        "Promotes cardiovascular health",
        "Enhances calcium absorption",
      ],
    },
    "2": {
      id: 2,
      name: "Raptor Calcium",
      description: "Improved Cholesterol Levels, Preventing Preeclampsia, Muscle Contraction support",
      fullDescription:
        "Raptor Calcium provides essential calcium carbonate to support bone health, muscle function, and cardiovascular wellness. This high-quality formula helps maintain strong bones and teeth while supporting proper muscle contraction.",
      price: 24.99,
      originalPrice: 29.99,
      image: "/raptor-calcium.jpg",
      images: ["/raptor-calcium.jpg", "/raptor-d3-k2.jpg", "/raptor-magnesium.jpg"],
      category: "Bone Health",
      rating: 4.6,
      reviews: 89,
      badge: "Popular",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 5,
        protein: "0g",
        carbs: "1g",
        fat: "0g",
        sugar: "0g",
        sodium: "10mg",
      },
      ingredients: ["Calcium Carbonate", "Microcrystalline Cellulose", "Croscarmellose Sodium", "Magnesium Stearate"],
      howToUse:
        "Take 1 tablet daily with food for optimal absorption. Best taken with vitamin D for enhanced calcium utilization.",
      warnings: [
        "Consult healthcare provider if taking medications",
        "May cause stomach upset if taken on empty stomach",
        "Keep out of reach of children",
        "Store in cool, dry place",
      ],
      benefits: [
        "Improved cholesterol levels",
        "Preventing preeclampsia",
        "Muscle contraction support",
        "Strong bones and teeth",
        "Cardiovascular health support",
      ],
    },
    "3": {
      id: 3,
      name: "Raptor Follic Acid",
      description:
        "Formulated to support your daily life with its nootropic content. Contains Huperzine A. Effective and complex formulation.",
      fullDescription:
        "Raptor Follic Acid is a comprehensive brain health supplement featuring folic acid and Huperzine A to support cognitive function, memory, and overall neurological health. This advanced formula promotes mental clarity and focus.",
      price: 19.99,
      originalPrice: 24.99,
      image: "/raptor-follic-acid.jpg",
      images: ["/raptor-follic-acid.jpg", "/raptor-vitamin-c.jpg", "/raptor-multivitamin.jpg"],
      category: "Brain Health",
      rating: 4.7,
      reviews: 134,
      badge: "Top Rated",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: ["Folic Acid", "Huperzine A", "Microcrystalline Cellulose", "Silicon Dioxide"],
      howToUse:
        "Take 1 tablet daily with water, preferably with a meal. For best results, take consistently at the same time each day.",
      warnings: [
        "Not recommended for pregnant or nursing women without medical supervision",
        "May interact with certain medications",
        "Keep out of reach of children",
        "Discontinue use if adverse reactions occur",
      ],
      benefits: [
        "Supports daily cognitive function",
        "Contains nootropic Huperzine A",
        "Effective complex formulation",
        "Enhances memory and focus",
        "Promotes neurological health",
      ],
    },
    "4": {
      id: 4,
      name: "Raptor Magnesium",
      description: "Support Healthy Blood Sugar Levels, Reduce Blood Uric Acid Levels, Support Better Sleep",
      fullDescription:
        "Raptor Magnesium provides essential magnesium to support over 300 enzymatic reactions in the body. This vital mineral helps regulate blood sugar, supports cardiovascular health, and promotes restful sleep.",
      price: 22.99,
      originalPrice: 27.99,
      image: "/raptor-magnesium.jpg",
      images: ["/raptor-magnesium.jpg", "/raptor-calcium.jpg", "/raptor-d3-k2.jpg"],
      category: "General Health",
      rating: 4.5,
      reviews: 78,
      badge: "Essential",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "5mg",
      },
      ingredients: ["Magnesium Oxide", "Microcrystalline Cellulose", "Croscarmellose Sodium", "Stearic Acid"],
      howToUse: "Take 1 tablet daily with food. For sleep support, take 30 minutes before bedtime with water.",
      warnings: [
        "May cause digestive upset in sensitive individuals",
        "Consult doctor if taking blood pressure medications",
        "Keep out of reach of children",
        "Store in cool, dry place",
      ],
      benefits: [
        "Support healthy blood sugar levels",
        "Reduce blood uric acid levels",
        "Support better sleep quality",
        "Muscle and nerve function",
        "Energy metabolism support",
      ],
    },
    "5": {
      id: 5,
      name: "Raptor Omega 3",
      description: "Help Prevent Macular Degeneration, Improve Brain Cell Function, Lower Blood Pressure",
      fullDescription:
        "Raptor Omega 3 provides high-quality EPA and DHA fatty acids sourced from premium fish oil. These essential omega-3s support heart health, brain function, and overall wellness with superior bioavailability.",
      price: 32.99,
      originalPrice: 37.99,
      image: "/raptor-omega3.jpg",
      images: ["/raptor-omega3.jpg", "/raptor-v-iron.jpg", "/raptor-vitamin-c.jpg"],
      category: "Heart Health",
      rating: 4.6,
      reviews: 92,
      badge: "Premium",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 60,
      weight: "60 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 10,
        protein: "0g",
        carbs: "0g",
        fat: "1g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: ["Fish Oil Concentrate", "EPA", "DHA", "Vitamin E", "Gelatin Capsule"],
      howToUse: "Take 1-2 tablets daily with meals. For best results, take with food containing healthy fats.",
      warnings: [
        "May increase bleeding risk if taking blood thinners",
        "Consult doctor if allergic to fish",
        "Keep refrigerated after opening",
        "Discontinue before surgery",
      ],
      benefits: [
        "Help prevent macular degeneration",
        "Improve brain cell function",
        "Lower blood pressure naturally",
        "Support cardiovascular health",
        "Anti-inflammatory properties",
      ],
    },
    "6": {
      id: 6,
      name: "Raptor Multivitamin",
      description: "Promotes Energy Production and Vitality, Maintains Muscle Strength, Improves Brain Function",
      fullDescription:
        "Raptor Multivitamin is a comprehensive blend of essential vitamins and minerals designed to support overall health, energy production, and vitality. This complete formula fills nutritional gaps in your daily diet.",
      price: 26.99,
      originalPrice: 31.99,
      image: "/raptor-multivitamin.jpg",
      images: ["/raptor-multivitamin.jpg", "/raptor-vitamin-c.jpg", "/raptor-follic-acid.jpg"],
      category: "General Health",
      rating: 4.4,
      reviews: 67,
      badge: "Complete",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 5,
        protein: "0g",
        carbs: "1g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "B-Complex", "Iron", "Calcium", "Zinc", "Magnesium"],
      howToUse:
        "Take 1 tablet daily with breakfast or as directed by your healthcare provider. Best absorbed with food.",
      warnings: [
        "Contains iron - keep away from children",
        "May cause stomach upset on empty stomach",
        "Consult doctor if pregnant or nursing",
        "Store in cool, dry place",
      ],
      benefits: [
        "Promotes energy production and vitality",
        "Maintains muscle strength",
        "Improves brain function",
        "Complete nutritional support",
        "Immune system boost",
      ],
    },
    "7": {
      id: 7,
      name: "Raptor Sleep",
      description: "Promotes faster sleep onset and deeper rest, Encourages a healthy heart, Enhances brain function",
      fullDescription:
        "Raptor Sleep combines Melatonin, Vitamin B6, Gummies 60, and Passiflora extract to promote natural, restful sleep. This gentle formula helps regulate your sleep cycle while supporting overall wellness.",
      price: 28.99,
      originalPrice: 33.99,
      image: "/raptor-sleep.jpg",
      images: ["/raptor-sleep.jpg", "/raptor-magnesium.jpg", "/raptor-follic-acid.jpg"],
      category: "Sleep Support",
      rating: 4.7,
      reviews: 103,
      badge: "Natural",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: [
        "Melatonin",
        "Vitamin B6",
        "Passiflora Extract",
        "Microcrystalline Cellulose",
        "Magnesium Stearate",
      ],
      howToUse:
        "Take 1 tablet 30 minutes before bedtime with water. Use consistently for best results. Do not exceed recommended dose.",
      warnings: [
        "May cause drowsiness - do not drive after taking",
        "Not for use by children under 18",
        "Avoid alcohol while using",
        "Consult doctor if taking sleep medications",
      ],
      benefits: [
        "Promotes faster sleep onset and deeper rest",
        "Encourages a healthy heart",
        "Enhances brain function",
        "Natural sleep cycle regulation",
        "Non-habit forming formula",
      ],
    },
    "8": {
      id: 8,
      name: "Raptor V-Iron",
      description: "Help Prevent Macular Degeneration, Improve Brain Cell Function, Lower Blood Pressure",
      fullDescription:
        "Raptor V-Iron provides essential iron in a gentle, easily absorbed form to support healthy blood formation, energy levels, and cognitive function. This vegetarian-friendly formula minimizes digestive discomfort.",
      price: 21.99,
      originalPrice: 26.99,
      image: "/raptor-v-iron.jpg",
      images: ["/raptor-v-iron.jpg", "/raptor-multivitamin.jpg", "/raptor-omega3.jpg"],
      category: "Blood Health",
      rating: 4.5,
      reviews: 76,
      badge: "Gentle",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: ["Iron Bisglycinate", "Vitamin C", "Folic Acid", "Microcrystalline Cellulose", "Stearic Acid"],
      howToUse:
        "Take 1 tablet daily with food or as directed by healthcare provider. Take with vitamin C for enhanced absorption.",
      warnings: [
        "Keep out of reach of children - iron overdose can be fatal",
        "May cause constipation in some individuals",
        "Do not take with calcium or dairy products",
        "Consult doctor before use if pregnant",
      ],
      benefits: [
        "Help prevent macular degeneration",
        "Improve brain cell function",
        "Lower blood pressure support",
        "Healthy blood formation",
        "Energy and vitality boost",
      ],
    },
    "9": {
      id: 9,
      name: "Raptor Vitamin C",
      description: "Immune System Support, Reduction of Dark Circles, Improved Sleep Quality",
      fullDescription:
        "Raptor Vitamin C provides high-potency ascorbic acid to support immune function, collagen synthesis, and antioxidant protection. This essential vitamin promotes overall health and vitality.",
      price: 18.99,
      originalPrice: 23.99,
      image: "/raptor-vitamin-c.jpg",
      images: ["/raptor-vitamin-c.jpg", "/raptor-multivitamin.jpg", "/raptor-follic-acid.jpg"],
      category: "Immune Support",
      rating: 4.3,
      reviews: 54,
      badge: "Essential",
      badgeColor: "bg-green-600",
      inStock: true,
      servings: 30,
      weight: "30 Tablets",
      flavors: ["Unflavored"],
      nutritionFacts: {
        servingSize: "1 tablet",
        calories: 0,
        protein: "0g",
        carbs: "0g",
        fat: "0g",
        sugar: "0g",
        sodium: "0mg",
      },
      ingredients: [
        "Ascorbic Acid (Vitamin C)",
        "Rose Hips Extract",
        "Citrus Bioflavonoids",
        "Microcrystalline Cellulose",
      ],
      howToUse:
        "Take 1 tablet daily with food. For immune support during illness, may increase to 2 tablets daily as directed by healthcare provider.",
      warnings: [
        "May cause stomach upset in sensitive individuals",
        "High doses may cause diarrhea",
        "Consult doctor if taking blood thinners",
        "Store in cool, dry place",
      ],
      benefits: [
        "Immune system support",
        "Reduction of dark circles",
        "Improved sleep quality",
        "Antioxidant protection",
        "Collagen synthesis support",
      ],
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0])
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorited(favorites.includes(product.id.toString()))
  }, [product.id])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    let updatedFavorites

    if (isFavorited) {
      updatedFavorites = favorites.filter((id: string) => id !== product.id.toString())
    } else {
      updatedFavorites = [...favorites, product.id.toString()]
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    setIsFavorited(!isFavorited)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-green-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative mb-6">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-contain bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"
                />
                {product.badge && (
                  <div
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {product.badge}
                  </div>
                )}
                <button
                  onClick={toggleFavorite}
                  className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isFavorited ? "text-red-500 fill-red-500" : "text-gray-600 hover:text-red-400"
                    }`}
                  />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-contain bg-gray-100 rounded-lg cursor-pointer border-2 border-transparent hover:border-green-600 transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.fullDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Description */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-600 mb-4">{product.fullDescription}</p>
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">How to Use</h3>
                <p className="text-gray-600 mb-4">{product.howToUse}</p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Serving Size:</strong> {product.nutritionFacts.servingSize}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    <strong>Container:</strong> {product.servings} servings per container
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Warnings */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Warnings</h3>
                <ul className="space-y-2">
                  {product.warnings.map((warning, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      {warning}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>

          <div className="space-y-6">
            {/* Review 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John D.</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Excellent supplement! High quality ingredients and I've noticed significant improvements in my
                  health. Highly recommend!"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">1 month ago</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Great quality supplement. Easy to take and effective. Only wish it was a bit more affordable, but the
                  quality justifies the price."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Information</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Ingredients & Nutrition */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Ingredients & Nutrition Facts</h3>

                  {/* Product-specific ingredient information */}
                  {params.id === "1" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            D3 Vitamin: <span className="font-semibold">5000 IU (3,000%)</span>
                          </div>
                          <div>
                            K2 Vitamin: <span className="font-semibold">45mg (5,000%)</span>
                          </div>
                          <div>
                            Sunflower Oil: <span className="font-semibold">39.45mg</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Supports Bone Strength and Density, Eases Joint Pain And Inflammation, Boosts The Immune System
                      </p>
                    </div>
                  )}

                  {params.id === "2" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Calcium: <span className="font-semibold">600mg (75%)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Improved Cholesterol Levels, Preventing Preeclampsia, Muscle Contraction
                      </p>
                    </div>
                  )}

                  {params.id === "3" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Folic Acid: <span className="font-semibold">400mg (200%)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Formulated to support your daily life with its nootropic content. Contains Huperzine A.
                        Effective and complex formulation.
                      </p>
                    </div>
                  )}

                  {params.id === "4" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="grid grid-cols-1 gap-1 text-sm">
                          <div>
                            Magnesium: <span className="font-semibold">105mg (28%)</span>
                          </div>
                          <div>
                            Magnesium Taurate: <span className="font-semibold">513.63mg</span>
                          </div>
                          <div>
                            Magnesium Bisglycinate: <span className="font-semibold">248.29mg</span>
                          </div>
                          <div>
                            Magnesium Malate: <span className="font-semibold">225.19mg</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Support Healthy Blood Sugar Levels, Reduce Blood Uric Acid Levels, Support Better Sleep
                      </p>
                    </div>
                  )}

                  {params.id === "5" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Omega 3: <span className="font-semibold">1152mg</span>
                          </div>
                          <div>
                            EPA: <span className="font-semibold">576mg</span>
                          </div>
                          <div>
                            DHA: <span className="font-semibold">432mg</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Help Prevent Macular Degeneration, Improve Brain Cell Function, Lower Blood Pressure
                      </p>
                    </div>
                  )}

                  {params.id === "6" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet (Key Vitamins):</h4>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>Vit A: 1.5mg (125%)</div>
                          <div>Vit B1: 1.5mg (136.6%)</div>
                          <div>Vit B2: 2mg (142.85%)</div>
                          <div>Vit B3: 50mg (312.5%)</div>
                          <div>Vit B6: 5mg (357%)</div>
                          <div>Vit B12: 0.35mcg (1400%)</div>
                          <div>Vit C: 250mg (312.5%)</div>
                          <div>Vit D3: 5mcg (100%)</div>
                          <div>Iron: 14mg (100%)</div>
                          <div>Zinc: 15mg (150%)</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Promotes Energy Production and Vitality, Maintains Muscle Strength, Improves Brain Function
                      </p>
                    </div>
                  )}

                  {params.id === "7" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Total Carbohydrates: <span className="font-semibold">5g (2%)</span>
                          </div>
                          <div>
                            Total Sugars: <span className="font-semibold">4g</span>
                          </div>
                          <div>
                            Vitamin B6: <span className="font-semibold">4mg (235%)</span>
                          </div>
                          <div>
                            Melatonin: <span className="font-semibold">2mg</span>
                          </div>
                          <div>
                            Passiflora Extract: <span className="font-semibold">20mg</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Promotes faster sleep onset and deeper rest, Encourages a healthy heart, Enhances brain function
                      </p>
                    </div>
                  )}

                  {params.id === "8" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Ferrous Bisglycinate: <span className="font-semibold">14mg (100%)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Help Prevent Macular Degeneration, Improve Brain Cell Function, Lower Blood Pressure
                      </p>
                    </div>
                  )}

                  {params.id === "9" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Per 1 Tablet:</h4>
                        <div className="text-sm">
                          <div>
                            Vitamin C (L-Ascorbic Acid): <span className="font-semibold">1000mg (1250%)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Immune System Support, Reduction of Dark Circles, Improved Sleep Quality
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Usage & Manufacturing */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Usage & Manufacturing</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How to Use:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {params.id === "1" &&
                          "For adults aged 11 and over; It is recommended to use 1 capsule per day. It is recommended to consume with plenty of water. It is recommended to use it with meals or on a full stomach during the day."}
                        {params.id === "2" &&
                          "For adults aged 11 and over; It is recommended to use 3 capsules per day. It is recommended to consume with plenty of water. It is recommended to use after a light meal during the day."}
                        {params.id === "3" &&
                          "For adults aged 11 and over; It is recommended to use 2 capsules per day for adults aged 11 and over. It is recommended to consume with plenty of water. It is recommended to use after a light meal during the day."}
                        {params.id === "4" &&
                          "For adults aged 11 and over; It is recommended to use 2 capsules per day. It is recommended to consume with plenty of water. It is recommended to use after a light meal during the day."}
                        {params.id === "5" &&
                          "For adults aged 11 and over, it is recommended to use 2 softgel per day. It is recommended to use it with meals or on a full stomach during the day."}
                        {params.id === "6" &&
                          "It is recommended to use 2 capsules per day for adults aged 11 and over. It is recommended to consume with plenty of water. It is recommended to use it with meals or on a full stomach during the day."}
                        {params.id === "7" &&
                          "For adults aged 11 and over; It is recommended to use 2 capsules per day. It is recommended to consume with plenty of water. It is recommended to use after a light meal during the day."}
                        {params.id === "8" &&
                          "It is recommended to use 1 capsule per day for adults aged 11 and over. It is recommended to consume with plenty of water. It is recommended to consume on an empty stomach. It can be consumed with fruit juice (especially orange juice) instead of water."}
                        {params.id === "9" &&
                          "For adults aged 11 and over, you can consume 1 effervescent tablet per day by dissolving it in 200ml of water. You can use it whenever you want during the day."}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Warnings:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • Use this product in conjunction with food as part of a healthy, balanced diet, not as a
                          substitute for such.
                        </li>
                        <li>• Keep out of the reach of children.</li>
                        <li>• Don't exceed the recommended daily dosage!</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Storage Conditions:</h4>
                      <p className="text-sm text-gray-600">
                        Store at room temperature below 25°C, in a cool and dry place.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Manufacture:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Developed by & Manufactured Exclusively for: <strong>Raptor</strong>
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Manufactured under GMP standards at Relife Pharma, GMP certified plants, and produced in
                        compliance with Turkey. The Codex Alimentarius Statement on Sports Nutrition.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Address:</strong> Ba Business Centre, South Way Road, Wembley, United Kingdom, HA9 0HF
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-xs text-yellow-800">
                        <strong>Disclaimer:</strong> These statements have not been evaluated by the food and drug
                        administration. This product is not intended to diagnose, treat, cure or prevent any disease.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Secure Payment Options</h2>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-green-600" />
                    Accepted Payment Methods
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        VISA
                      </div>
                      <span className="text-gray-700">Visa Credit & Debit Cards</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        MC
                      </div>
                      <span className="text-gray-700">Mastercard</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        AMEX
                      </div>
                      <span className="text-gray-700">American Express</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-sm">
                        PP
                      </div>
                      <span className="text-gray-700">PayPal</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="w-6 h-6 text-green-600" />
                    Security Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">SSL Encrypted Checkout</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">PCI DSS Compliant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Fraud Protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <RotateCcw className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Money Back Guarantee</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      <strong>Safe & Secure:</strong> Your payment information is encrypted and never stored on our
                      servers. All transactions are processed through secure payment gateways.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Related Product 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                  <img
                    src="/placeholder-kuwy8.png"
                    alt="BCAA"
                    className="w-32 h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">BCAA Amino Acids</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">£24.99</span>
                    <AddToCartButton
                      product={{ id: 2, name: "BCAA Amino Acids", price: 24.99, image: "/placeholder-kuwy8.png" }}
                      size="sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Product 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center">
                  <img
                    src="/placeholder-8hhkm.png"
                    alt="Creatine"
                    className="w-32 h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Creatine Monohydrate</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">£19.99</span>
                    <AddToCartButton
                      product={{ id: 3, name: "Creatine Monohydrate", price: 19.99, image: "/placeholder-8hhkm.png" }}
                      size="sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Product 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-red-100 to-red-200 h-48 flex items-center justify-center">
                  <img
                    src="/pre-workout-powder.png"
                    alt="Pre-workout"
                    className="w-32 h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Pre-Workout Energy</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">£29.99</span>
                    <AddToCartButton
                      product={{ id: 4, name: "Pre-Workout Energy", price: 29.99, image: "/pre-workout-powder.png" }}
                      size="sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Product 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-yellow-100 to-yellow-200 h-48 flex items-center justify-center">
                  <img
                    src="/placeholder-u3ma0.png"
                    alt="Multivitamin"
                    className="w-32 h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Daily Multivitamin</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">£16.99</span>
                    <AddToCartButton
                      product={{ id: 5, name: "Daily Multivitamin", price: 16.99, image: "/placeholder-u3ma0.png" }}
                      size="sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
