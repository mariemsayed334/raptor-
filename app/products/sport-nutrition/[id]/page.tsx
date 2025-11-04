"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"
import Footer from "@/components/footer"

const sportNutrition = [
  {
    id: 1,
    name: "AMINO+EAA",
    image: "/amino-eaa.jpg",
    reviews: 156,
    fullDescription:
      "A 100% Premium formula for Muscle Recovery & Hydration Support. It is Ideal for Intra or Post-Workout use. This formula provides 8646 mg of EAA (Essential Amino Acids) and 3756 mg of BCAA (Branched-Chain Amino Acids) per serving, offering Great Solubility and being Enriched with BCAA.",
    Benefits: [
      "Complete amino acids help to build muscle tissue and reduce muscle breakdown.",
      "faster and effcient muscle recovery and contribute to maintaining a positive nitrogen balance, which is essential for muscle growth and repair.",
    ],
    storage:"Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field  ",
  },
  {
    id: 2,
    name: "IGNITER",
    image: "/igniter.jpg",
    reviews: 112,
    fullDescription:
      "A 100% Premium Pre-Training Energy & Drink with 400 mg of Caffeine and a performance blend including Beta-Alanine, Arginine AKG, Citrulline Malate, and Taurine. It is designed for Extreme Workouts and Superior Results.",
         howToUse:
      "Mix one scoop with 200ml of water 20 minutes before workout.",
    storage: "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field ",
    Benefits: [
      "It increases the intensity of workouts, provides sustained energy, and enhances performance.",
      "The formula supports increased muscle strength and focus, allowing you to lift heavier, train longer, and achieve superior results.",
    ],
    
  },

  {
    id: 3,
    name: "ARGININE+CITROLINE",
    image: "/arginine-citroline.jpg",
    reviews: 112,
    fullDescription:
    "A 100% Premium blend designed for Pre-During-Post-Workout support. It provides 2500 mg of Citrulline and 2500 mg of Arginine per serving, along with a full B-Vitamin complex.",
         howToUse:
       "Take one scoop before exercise with water or juice.", 
          warnings: 
      "Consult your doctor if you have heart-related issues before using. ",
    storage: "Store in a dry area at room temperature. ",
    Benefits: [
      "L-Arginine and L-Citrulline increase nitric oxide production, leading to better blood circulation and the delivery of oxygen and nutrients to muscles.",
            "This supports muscle growth, endurance, and faster recovery.",

    ],
    
  },
  {
    id: 4,
    name: "COLLAGEN+MULTIVITAMIN",
    image: "/collagen.jpg",
    fullDescription: "A 100% Premium formula containing 5 grams of Collagen and a multivitamin blend, designed to support Youthful Appearance, Fresh & Firm Looking Skin. It supports Skin, Joints & Overall Vitality.",
    Benefits: [
      "Valuable source of protein that supports the health and integrity of skin, hair, and nails.",
      "Collagen helps to improve joint health and mobility, while the vitamins and minerals contribute to the support of overall health and vitality.",
    ],
    howToUse: "Mix one scoop daily with water or your favorite drink.",
    warning: "For adults only. Consult a physician if you are pregnant or nursing.",
    storage: "Keep in a dry, cool place away from moisture."
  },
  {
    id: 5,
    name: "CREATIAN MIX",
    image: "/creatine.jpg",
    fullDescription: "A Premium Complex Creatine blend designed to support strength and testosterone. It contains Creatine Monohydrate, Creatine Hydrochloride, Dicreatine Malate, Creatine Alphaketoglutarate, and Creatine Micronized. It is 100% Premium with 5 grams of Creatine per serving.",
    Benefits: [
      "Creatine is an effective, non-hormonal, natural component used in sports.",
      "It helps replenish energy levels and support the synthesis of protein and muscle fiber creation.",
      "It also assists in faster recovery, improved brain health, greater muscle endurance, and the increase of testosterone levels." ,
    ],
    howToUse: "Take one scoop with water after your workout.",
    warning: "Drink plenty of water throughout the day while using this product.",
    storage: "Store in a dry place at room temperature."
  },
  {
    id: 6,
    name: "CREATINE + TEST",
    image: "/cretine+test.jpg",
    fullDescription: "A Premium Performance Blend offering 4 grams of Creatine wit a testosterone support matrix. It includes Creatine Monohydrate, D-Aspartic Acid (DAA), Zinc/Zinc Monomethionine, and Vitamin D3 (Cholecalciferol).",
    Benefits: [
      "Provides essential building blocks for muscle strength and recovery.",
      "It supports natural testosterone levels, aids in increased muscle performance, and enhances recovery, helping you achieve the next level of your fitness goals.",
    ],
    howToUse: "Consume one scoop daily, preferably post-workout.",
    warning: "Not recommended for individuals under 18 or with hormone-related conditions.",
    storage: "Store in a dry, cool place."
  },
  {
    id: 7,
    name: "EAA+",
    image: "/eaa.jpg",
    fullDescription: "A 100% Premium supplement for Anabolic Support, providing 8000 mg of EAA+ (Essential Amino Acids) per serving. It is an Instantized EAA formula designed for 100% Muscle Support.",
    Benefits: [
      "EAAs play a crucial role in building and repairing muscle tissue.",
      "They assist in faster recovery, support an anabolic environment in the body, and are important for muscle synthesis and protein metabolism.",
    ],
    howToUse: "Mix one scoop with 300ml of water before, during, or after workouts.",
    warning: "Use as part of a balanced diet and active lifestyle.",
    storage: "Store tightly sealed in a cool, dry environment."
  },
  {
    id: 8,
    name: "GLUTAMINE",
    image: "/glutamine.jpg",
    fullDescription: "A 100% Premium supplement for Post Workout Recovery and Enhanced Muscle Recovery, delivering 5 grams of L-Glutamine perserving. It is Banned Substance Free.",
    Benefits: [
      "Glutamine is the most abundant amino acid in muscle tissue, helping to protect muscles from breaking down.",
      "It replenishes plasma glutamine levels, helps accelerate recovery, and supports the immune system and intestinal health."
    ],
    howToUse: "Mix one teaspoon with water or protein shake after exercise.",
    warning: "For adults engaged in regular exercise. Do not exceed recommended use.",
    storage: "Keep away from humidity and heat."
  },
  {
    id: 9,
    name: "AMINO ACID",
    image: "/amino acid.jpg",
    fullDescription: "A Premium Amino Blend in tablet form, providing 10000 mg of Amino Acid per serving. It is designed to support Strength, Recovery & Energy." ,
    Benefits: [
      "Helps to maximize physical performance and decrease muscle fatigue.",
      "The formula provides the essential building blocks for protein, supporting muscle growth, strength, and rapid recovery.",
    ],
    howToUse: "Take one scoop during or after your workout with 300ml of water.",
    warning: "Consult a healthcare professional before using if you have any medical condition.",
    storage: "Store in a cool, dry place."
  },
  {
    id: 10,
    name: "ISO",
    image: "/iso.jpg",
    fullDescription: "A 100% Premium Isolate Power formula, offering 27 grams of Whey Protein Isolate per serving. It's an ISO Pro Whey Protein Isolate with high protein concentration, low fat, and low carbs.",
    Benefits: [
      "Pure Whey Protein Isolate is the best source of protein for the human body, providing essential amino acids that help the body to build muscle tissue and achieve better physical performance.",
      "Selectively filtered to be the cleanest possible source of high protein." 
    ],
    howToUse: "Mix one scoop with 250ml of cold water or milk after training.",
    warning: "Not for individuals with lactose intolerance. Keep out of reach of children.",
    storage: "Store in a cool, dry place away from sunlight."
  }
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params?.id) // نحط ? عشان ما يديش Error لو params فاضي
  const [isFavorite, setIsFavorite] = useState(false)

  // لو الـ id مش رقم أصلاً
  if (isNaN(productId)) {
    return (
      <div className="text-center py-20 text-gray-600">
        Invalid product ID.
      </div>
    )
  }

  const product = sportNutrition.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-600">
        Product not found.
      </div>
    )
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
          
          <div className="flex justify-center items-center space-x-2 text-yellow-500">
            <span className="font-semibold">★ 4.8</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* طرق الدفع */}
          <div className="flex justify-center items-center gap-4 pt-2">
            <span className="text-gray-600 font-medium">Payment Methods:</span>
            <img src="/visa.jpeg" alt="Visa" className="h-16" />
            <img src="/Mastercard.jpeg" alt="MasterCard" className="h-17" />
            <img src="/paypal.jpeg" alt="PayPal" className="h-22" />
          </div>
        </div>

        {/* المعلومات الكاملة */}
        <div className="mt-12 space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Description:</h3>
            <p>{product.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits & Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.Benefits?.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>

          {product.howToUse && (
            <div>
              <h3 className="text-lg font-semibold mt-6 text-green-700">How to use:</h3>
              <p>{product.howToUse}</p>
            </div>
          )}

          {product.warnings && (
            <div>
              <h3 className="text-lg font-semibold mt-6 text-green-700">Warnings:</h3>
              <p>{product.warnings}</p>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Storage conditions:</h3>
            <p>{product.storage}</p>
          </div>

          <Footer />
        </div>
      </div>
    </section>
  )
}
