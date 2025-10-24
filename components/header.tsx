"use client"

import { Search, ShoppingCart, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact us" },
  ]

  

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
  <img src="/raptor-logo.png" alt="Raptor" className="w-8 h-8" />
  <span className="text-xl font-semibold text-green-800">Raptor</span>
</Link>




      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors ${
              isActive(item.href) ? "text-green-600 font-semibold" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600 transition-colors" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-3 transition-colors ${
                  isActive(item.href)
                    ? "text-green-600 font-semibold bg-green-50"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-6 px-6 py-3 border-t border-gray-100 mt-2">

              
              <Link href="/cart" className="relative" onClick={() => setIsMobileMenuOpen(false)}>
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Link>
            </div>

            
            
          </nav>
        </div>
      )}
    </header>
  )
}
