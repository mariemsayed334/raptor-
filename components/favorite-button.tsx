"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
        isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700"
      }`}
    >
      <Heart className="w-6 h-6" />
    </button>
  )
}
