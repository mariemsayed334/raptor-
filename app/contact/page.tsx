import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />



      
      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="nutrition-advice">Nutrition Advice</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our newsletter for health tips and product updates
                    </label>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have questions about our products, need personalized nutrition advice, or want to learn
                  more about our company, we're here to help. Our team of experts is ready to assist you on your
                  wellness journey.
                </p>
              </div>

              {/* Contact Details */}
              
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                     8A Popin Business Centre 
                      <br />
                      Southway Road Wembley 
                      <br />
                      HA9 0HF
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
  <Building2 className="w-6 h-6 text-green-600 mt-1" />
  <div>
    <p className="font-semibold text-gray-900 mb-1">Official distributor in Iraq</p>
    <p className="text-gray-600">Fitness City</p>
  </div>
  <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600">009647702359478</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>
</div>
                  
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Facebook className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <Instagram className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-0 shadow-lg bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Help</h3>
                  <div className="space-y-3">
                    <Link href="/products" className="block text-green-600 hover:text-green-700 transition-colors">
                      → Browse Our Products
                    </Link>
                    <Link href="/about" className="block text-green-600 hover:text-green-700 transition-colors">
                      → Learn About Our Quality
                    </Link>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
