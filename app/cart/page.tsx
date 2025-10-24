"use client"

import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-8" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet. Start shopping to fill it up!
          </p>
          <Link href="/products">
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg">
              Continue Shopping
            </Button>
          </Link>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart ({itemCount} items)</h1>
          <Button
            variant="outline"
            onClick={clearCart}
            className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.flavor || "default"}`} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      {item.flavor && <p className="text-sm text-gray-600 mb-2">Flavor: {item.flavor}</p>}
                      <p className="text-lg font-bold text-purple-600">£{item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-lg font-bold text-gray-900">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                    <span className="font-semibold">£{total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">{total >= 50 ? "Free" : "£4.99"}</span>
                  </div>

                  {total < 50 && (
                    <div className="text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg">
                      Add £{(50 - total).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-purple-600">£{(total + (total >= 50 ? 0 : 4.99)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg">Proceed to Checkout</Button>

                  <Link href="/products">
                    <Button variant="outline" className="w-full py-3 bg-transparent">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-3">We Accept</h3>
                  <div className="flex gap-2">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">
                      VISA
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">
                      MC
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">
                      AMEX
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">
                      PP
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
