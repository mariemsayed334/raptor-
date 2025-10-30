"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: " D3+K2",
    image: "/raptor-d3-k2.jpg",
    reviews: 156,
    description:
      "Synergistic vitamin combination that optimizes calcium absorption for bone strength while preventing arterial calcification and supporting immunity.",
    fullDescription:
      "The combination of Vitamin D3 and K2 is essential for optimal bone and heart health. Vitamin D3 enhances calcium absorption, ensuring strong bones, while Vitamin K2 directs calcium to the bones and away from arteries, preventing calcification. Together, they support cardiovascular health by reducing the risk of arterial stiffness and promoting healthy blood circulation. This powerful duo also strengthens the immune system and supports overall well-being, making it a vital addition to your daily routine.",
     
    howToUse:
      "For adults aged 11 and over; It is recommended to use 1 Soft Gel per day. It is recommended to consume with plenty of water. It is recommended to use it with meals or on a full stomach during the day.",
    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under professional supervision.",
    Benefits:[
      "Supports bone strength and density.",
      "Helps maintain healthy calcium levels.",
      "Supports immune health.",
  
      ]


  },
  {
    id: 2,
    name: " Calcium",
    image: "/raptor-calcium.jpg",
    reviews: 112,
    description: [
  "A fundamental Calcium",
  "tablet providing 500 mg per",
  "serving to support overall",
  "structural and systemic",
  "health."
],
    fullDescription:
      "Calcium is indispensable for bone health, helping to build and maintain strong bones and teeth, which is especially important as we age. It also plays a pivotal role in muscle contraction, ensuring muscles function properly, including the heart muscle, which relies on calcium to maintain a steady heartbeat. Additionally, calcium is involved in nerve transmission, allowing signals to travel between the brain and the body, which is crucial for all bodily functions. This mineral is also essential for blood clotting, a process that prevents excessive bleeding when injuries occur. Furthermore, calcium contributes to hormonal balance, assisting in the release of various hormones and enzymes that regulate vital processes in the body.",
    howToUse:
      "For adults aged 11 and over; It is recommended to use 2 Tablets per day. It is recommended to consume with plenty of water. – It is recommended to use after a light meal during the day.",
    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage :
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Supports bone and teeth health.",
      "Supports normal muscle function.",
      "Supports heart and nerve function.",

    ]
  },
  // يمكنكِ إضافة باقي المنتجات بنفس الشكل 👇
  {
    id: 3,
    name: "Raptor Omega 3",
    image: "/raptor-omega3.jpg",
    reviews: 98,
    description:
      "Supports heart, brain, and joint health with pure fish oil rich in EPA and DHA.",
    fullDescription:
      "Omega 3 fatty acids are essential for heart and brain health. Raptor Omega 3 contains high-purity fish oil to maintain cardiovascular balance and support joint mobility.",
    howToUse:
      "Take 1 softgel per day with meals.",
    warnings:
      "Not suitable for individuals allergic to fish or shellfish.",
    storage:
      "Keep in a cool and dry place away from heat.",
    Benefits: [
      "Supports heart health.",
      "Enhances brain function.",
      "Promotes joint mobility.",
      "Maintains cardiovascular balance."
    ]
  },

  
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = products.find((p) => p.id === productId)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return <div className="text-center py-20 text-gray-600">Product not found.</div>
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* صورة المنتج */}
        <div className="relative flex justify-center mb-10">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-lg"
          />
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
              isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>

        {/* تفاصيل المنتج */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {Array.isArray(product.description)
              ? product.description.join(' ')
              : product.description}
          </p>

          <div className="flex justify-center items-center space-x-2 text-yellow-500">
            <span className="font-semibold">★ 4.8</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* طرق الدفع */}
          <div className="flex justify-center items-center gap-4 pt-2">
            <span className="text-gray-600 font-medium">Payment Methods:</span>
            <img src="/visa.jpeg" alt="Visa" className="h-10" />
            <img src="/mastercard.jpeg" alt="MasterCard" className="h-10" />
            <img src="/paypal.jpeg" alt="PayPal" className="h-20" />
          </div>
        </div>

        {/* المعلومات الكاملة */}
        <div className="mt-12 space-y-10 text-gray-700 leading-relaxed">

<p className="text-gray-700 leading-relaxed">
  {product.description.map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</p>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Description:</h3>
            <p>{product.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits & Features :</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {product.Benefits?.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">How to use:</h3>
            <p>{product.howToUse}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Warnings:</h3>
            <p>{product.warnings}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Storage conditions:</h3>
            <p>{product.storage}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
