"use client"

import Footer from "@/components/footer"

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
    description: "A fundamental Calcium tablet providing 500 mg per serving to support overall structural and systemic health.",
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
    name: " Follic Acid",
    image: "/raptor-follic-acid.jpg",
    reviews: 98,
    description:
      "A dedicated Folic Acid tablet providing 400 mcg, primarily used to support cellular processes and development. ",
    fullDescription:
      "Folic acid is essential for DNA synthesis and cell division, making it crucial during pregnancy to prevent birth defects. It supports the formation of red blood cells, preventing anemia and boosting energy. Folic acid also contributes to brain health, cognitive function, and heart health by regulating homocysteine levels. Regular intake can prevent certain birth defects and support overall reproductive health. It’s found in leafy greens, legumes, and fortified foods.",
    howToUse:
      "For adults aged 11 and over; It is recommended to use 1 capsules per day. It is recommended to consume with plenty of water. – It is recommended to use after a light meal during the day.",
    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Promotes red blood cell formation.",
      "Supports overall cell growth and function.",
      
    ]
  },

  {
    id: 4,
    name: " Magnesium ",
    image: "/raptor-magnesium.jpg",
    reviews: 98,
    description:
      "A comprehensive magnesium supplement combining different forms (Magnesium Taurate, Bisglycinate, and Malate) to ensure optimal absorption and effectiveness.",
    fullDescription:
      "Magnesium is essential for muscle and nerve function, helping to prevent cramps and spasms by allowing muscles to relax properly. It supports energy production, reduces fatigue, and promotes better sleep quality. Magnesium also plays a role in bone health, maintaining strong bones and teeth. It aids in regulating blood pressure and supports heart health. Additionally, magnesium is important for brain function, helping to reduce stress and anxiety while improving mood and cognitive performance.",

    howToUse:
"It is recommended to use 2 Tablets per day for adults aged 11 and over. – It is recommended to use it with meals or on a full stomach during the day.",
    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Supports muscle and nerve function.",
      "Promotes energy production.",
      "Helps improve sleep quality.",
    ]
  },

    {
    id: 5,
    name: " Omega 3",
    image: "/raptor-omega3.jpg",
    reviews: 98,
    description:
    "An Omega 3 softgel supplement providing essential fatty acids (EPA and DHA).",
        fullDescription:
      "Omega-3 fatty acids are essential fats that support heart health by reducing inflammation, lowering blood pressure, and improving cholesterol levels. They are crucial for brain function, enhancing memory, cognitive abilities, and reducing the risk of depression. Omega-3s also promote eye health, helping to prevent conditions like macular degeneration. They support joint health by reducing symptoms of arthritis and improving mobility. Omega-3s are important during pregnancy for fetal brain and eye development.",

    howToUse:
     "For adults aged 11 and over, it is recommended to use 2 softgel per day . – it is recommended to use it with meals or on a full stomach during the day.",

    warnings:
     "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",

    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Helps prevent macular degeneration.",
      "Supports brain function.",
      "Helps maintain healthy blood pressure.",
      
    ]
  },

    {
    id: 6,
    name: "Multivitamin",
    image: "/raptor-multivitamin.jpg",
    reviews: 98,
    description:
     "A comprehensive Dietary Supplement in tablet form, providing a broad spectrum of essential vitamins and minerals (including Vitamin C, Vitamin E, B-Vitamins, Magnesium, Zinc, etc.).  ",
       fullDescription:
      "Multivitamins are supplements that provide a combination of essential vitamins and minerals to help fill nutritional gaps in your diet. They support overall health by boosting immunity, increasing energy levels, and promoting healthy skin, hair, and nails. Multivitamins are important for bone health and can reduce the risk of chronic diseases like heart disease and certain cancers. They also support brain health, aiding in memory and cognitive function. Taking a daily multivitamin is a convenient way to ensure you meet your nutritional needs and maintain overall well-being.",

    howToUse:
     "It is recommended to use 1 Tablet per day for adults aged 11 and over. It is recommended to consume with plenty of water. – It is recommended to use it with meals or on a full stomach during the day. ",

    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Supports overall health and immunity.",
      "Boosts energy levels.",
      "Promotes healthy skin, hair, and nails.",
      
    ]
  },

    {
    id: 7,
    name: " Sleep",
    image: "/raptor-sleep.jpg",
    reviews: 98,
    description:
     "A gummy supplement formulated to aid sleep, containing Melatonin (5mg), Vitamin B6, and Passiflora extract (Passionflower). ", 
      fullDescription:
      "Sleep is essential for overall health and well-being. It helps the body repair and rejuvenate, supports cognitive function, and boosts the immune system. Quality sleep improves memory, concentration, and mood while reducing stress and anxiety. It also plays a crucial role in maintaining a healthy weight by regulating hunger hormones. Adequate sleep is vital for heart health, reducing the risk of cardiovascular diseases. Establishing a consistent sleep routine and creating a restful environment can significantly enhance sleep quality and overall health.",
    howToUse:
      "For adults aged 11 and over; It is recommended to use 1 capsules per day. It is recommended to consume with plenty of water. – It is recommended to use after a light meal during the day.",
    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Promotes faster sleep and deeper rest.",
      "Supports relaxation and calmness.",
      "Supports natural sleep cycles.",
      
    ]
  },

    {
    id: 8,
    name: " V-Iron",
    image: "/raptor-v-iron.jpg",
    reviews: 98,
    description:
    "An Iron supplement containing Ferrous Bisglycinate along with Folic Acid, B12, and Vitamin C to enhance absorption.",
    fullDescription:
     "Iron is a crucial mineral for producing hemoglobin, the protein in red blood cells that carries oxygen throughout the body. Adequate iron levels are essential for maintaining energy levels, preventing fatigue, and supporting cognitive function. Iron also plays a vital role in immune system health, helping the body fight off infections. It is especially important for women, athletes, and individuals with a higher risk of deficiency. Including iron in your daily regimen supports overall vitality and well-being.",

    howToUse:
      "For adults aged 11 and over; It is recommended to use 1 capsule per day. It is recommended to consume with plenty of water. – It is recommended to use after a light meal during the day.",

    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",

    storage:
     "Keep away from sunlight. Store in a cool and dry place. Store out of reach of children and in its own packaging. ",

     Benefits: [
      "Supports red blood cell production.",
      "Helps prevent iron deficiency anemia.",
      "Supports healthy oxygen transport.",
      
    ]
  },

    {
    id: 9,
    name: "Vitamin C",
    image: "/raptor-vitamin-c.jpg",
    reviews: 98,
    description:
      " A high-dose Vitamin C (L-Ascorbic Acid) tablet providing 1000 mg per serving.",
    fullDescription:
      "Vitamin C is a powerful antioxidant that boosts the immune system, supports collagen production for healthy skin and wound healing, and aids in iron absorption to prevent anemia. It also contributes to heart health by reducing the risk of chronic diseases and supports blood pressure regulation. Additionally, Vitamin C may help shorten the duration of colds. Found in citrus fruits, berries, and vegetables, it’s essential for overall well-being.",
    howToUse:
      "For adults aged 11 and over, you can consume 1 Tablet per day by dissolving it in 200ml of water. – You can use it whenever you want during the day.",

    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Supports immune health.",
      "Promotes collagen production for healthy skin.",
      "Provides antioxidant protection for the body.",
      
    ]
  },

  
    {
    id: 10,
    name: "Ashwagandha",
    image: "/aswaga.jpeg",
    reviews: 67,
    fullDescription:
      "A Non-GMO supplement containing Ashwagandha Root extract (standardized to Withanolides), a well-known adaptogen from Nature's Truth.",
    
    howToUse:
      "For adults aged 11 and over, you can consume 1 Tablet per day by dissolving it in 200ml of water. – You can use it whenever you want during the day.",

    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Reduce stress and anxiety.",
      "Support cognitive function.",
      "Help maintain energy levels.",
      
    ]
  },

   {
    id: 11,
    name: "Chelated Zinc",
    image: "/chelated.jpeg",
    reviews: 70,
    description:
      "A Vegan (Zinc Gluconate) supplement, Non-GMO and Gluten Free, providing 50 mg of Zinc per serving in a highly bioavailable chelated form.",
    fullDescription:
      "Vitamin C is a powerful antioxidant that boosts the immune system, supports collagen production for healthy skin and wound healing, and aids in iron absorption to prevent anemia. It also contributes to heart health by reducing the risk of chronic diseases and supports blood pressure regulation. Additionally, Vitamin C may help shorten the duration of colds. Found in citrus fruits, berries, and vegetables, it’s essential for overall well-being.",
    howToUse:
      "For adults aged 11 and over, you can consume 1 Tablet per day by dissolving it in 200ml of water. – You can use it whenever you want during the day.",

    warnings:
      "Use this product in conjunction with food as part of a healthy, balanced diet, not as a substitute for such. Keep out of the reach of the children. Don’t exceed the recommended daily dosage!",
    storage:
      "Store in a cool and dry place. Heat and sunlight may damage the bottle. — Made according to international specifications and standards, under the supervision of people specialized in this field.",
    Benefits: [
      "Immune system function.",
      "Cell growth and repair.",
      "Metabolism.",
      
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
            <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits & Features :</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {product.Benefits?.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>


          {product.howToUse && (
       <div>
           <h3 className="text-lg font-semibold mt-6 text-green-700">How to use:</h3>
           <p className="text-gray-700">{product.howToUse}</p>
      </div>
        )}

       {product.warnings && (
      <div>
        <h3 className="text-lg font-semibold mt-6 text-green-700" >Warnings:</h3>
        <p className="text-gray-700">{product.warnings}</p>
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
