import {  Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* شبكة الروابط الأساسية */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo + وصف */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-semibold">Raptor</span>
            </div>
            <p className="text-gray-600 text-sm">
              Consumer Warning: Some products may contain milk, soy, or nuts. All our products are gluten-free. This
              product is a dietary supplement and not a substitute for a balanced diet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-600 hover:text-green-600 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-green-600 transition-colors">
                Contact
              </Link>
            
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <div className="space-y-2">
              <Link href="/policies" className="block text-gray-600 hover:text-green-600 transition-colors">
                Shipping Policy
              </Link>
              <Link href="/policies" className="block text-gray-600 hover:text-green-600 transition-colors">
                Return Policy
              </Link>
              <Link href="/policies" className="block text-gray-600 hover:text-green-600 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              
              <a 
  href="https://www.instagram.com/raptornutrition928?igsh=MXJ3N2hyMm00dHA2aw%3D%3D&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors"
>
  <Instagram className="w-5 h-5 text-green-600" />
</a>
              
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <div className="bg-green-600  text-center">
  <p className="text-white ">© 2025 Raptor. All rights reserved.</p>
</div>

      </div>
    </footer>
  )
}
