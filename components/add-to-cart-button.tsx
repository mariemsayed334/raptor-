"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import { Check } from "lucide-react"

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  flavor?: string
  quantity?: number
  className?: string
  size?: "default" | "sm" | "lg"
}

export default function AddToCartButton({
  product,
  flavor,
  quantity = 1,
  className = "",
  size = "default",
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor,
    })

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={`bg-purple-600 hover:bg-purple-700 transition-all duration-200 ${className}`}
      size={size}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Added!
        </>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}
