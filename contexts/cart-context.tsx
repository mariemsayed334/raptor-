"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  flavor?: string
}

type CartContextType = {
  items: CartItem[]
  total: number
  itemCount: number
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id && p.flavor === item.flavor)
      if (existing) {
        return prev.map((p) =>
          p.id === item.id && p.flavor === item.flavor ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, total, itemCount, addToCart, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
