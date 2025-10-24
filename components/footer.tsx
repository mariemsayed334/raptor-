import { Facebook, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/policies" className="block text-gray-400 hover:text-white transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <div className="space-y-2">
              <Link href="/policies" className="block text-gray-400 hover:text-white transition-colors">
                Shipping Policy
              </Link>
              <Link href="/policies" className="block text-gray-400 hover:text-white transition-colors">
                Return Policy
              </Link>
              <Link href="/policies" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold">Sublivita</span>
          </div>
          <p className="text-gray-400 mb-4">
            Consumer Warning: Some products may contain milk, soy, or nuts. All our products are gluten-free. This
            product is a dietary supplement and not a substitute for a balanced diet.
          </p>
          <p className="text-gray-500 text-sm">© 2025 Sublivita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
