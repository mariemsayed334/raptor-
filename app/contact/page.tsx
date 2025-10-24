import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Have questions about our products or need personalized nutrition advice? We're here to help you on your
            wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">Mon-Fri 9AM-6PM GMT</p>
                <p className="text-purple-600 font-semibold">+447426777871</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                <p className="text-purple-600 font-semibold">Info@sublivita.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Our UK Headquarters</p>
                <p className="text-purple-600 font-semibold text-sm">128 City Road London EC1V 2NX</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="text-purple-600 font-semibold">9:00 AM - 6:00 PM GMT</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our newsletter for health tips and product updates
                    </label>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 flex items-center justify-center gap-2">
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
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600">+447426777871</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-gray-600">Info@sublivita.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      128 City Road
                      <br />
                      London EC1V 2NX
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                    <Facebook className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                    <Instagram className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-0 shadow-lg bg-purple-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Help</h3>
                  <div className="space-y-3">
                    <Link href="/products" className="block text-purple-600 hover:text-purple-700 transition-colors">
                      → Browse Our Products
                    </Link>
                    <Link href="/about" className="block text-purple-600 hover:text-purple-700 transition-colors">
                      → Learn About Our Quality
                    </Link>
                    <Link href="#" className="block text-purple-600 hover:text-purple-700 transition-colors">
                      → Shipping & Returns
                    </Link>
                    <Link href="#" className="block text-purple-600 hover:text-purple-700 transition-colors">
                      → Nutrition Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our products and services.</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How long does shipping take?</h3>
                <p className="text-gray-600">
                  We offer free standard shipping (3-5 business days) on orders over £50. Express shipping (1-2 business
                  days) is available for £9.99.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer personalized nutrition advice?</h3>
                <p className="text-gray-600">
                  Yes! Our certified nutritionists are available for consultations. Contact us to schedule a
                  personalized nutrition assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us for a full
                  refund or exchange.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Are your products suitable for vegans?</h3>
                <p className="text-gray-600">
                  Many of our products are vegan-friendly. Look for the vegan certification on product pages or contact
                  us for specific dietary requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
