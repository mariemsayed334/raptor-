"use client"
import { Leaf, Shield, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Description() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Sublivita</h1>
          <p className="text-purple-100 text-xl leading-relaxed">
            Discover our story, mission, and commitment to providing premium nutrition and wellness products.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-600 font-semibold mb-2">ABOUT US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fuel your body with the best –because you deserve it!
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Who are we</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a UK-based brand dedicated to enhancing your beauty, health and well being. We offer
                  high-quality cosmetics, nutritional supplements, and health tablets including skincare essentials,
                  vitamins, wellness supplements and more to support your lifestyle and help you look and feel your
                  best.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Sublivita Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  We harness the power of science and nature to enhance your health and beauty with premium nutrition,
                  effective supplements, and natural cosmetics—pure, high-quality, gluten-free, antibiotic-free, and
                  vegan-friendly.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder-dirr1.png" alt="Health Products" className="rounded-lg" />
              <img src="/placeholder-2itob.png" alt="Gym Products" className="rounded-lg" />
              <img src="/natural-skincare-products.png" alt="Skincare" className="rounded-lg col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sublivita Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Why Sublivita</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Deals Are Best In The Market</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide premium nutrition, effective supplements, and natural cosmetics at unbeatable prices, ensuring
              the best value for your health and beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Natural</h3>
                <p className="text-gray-600">Natural products promote health with pure, safe ingredients.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Side Effect</h3>
                <p className="text-gray-600">No side effects ensure safety and effectiveness of the product.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
                <p className="text-gray-600">100% organic products guarantee purity and natural quality.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clarifying Terms</h3>
                <p className="text-gray-600">Approved standards guarantee healthcare quality.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                To empower individuals on their wellness journey by providing premium, science-backed nutrition and
                beauty products that enhance both physical performance and overall well-being. We believe everyone
                deserves access to high-quality supplements that support their health goals.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading trusted brand in nutrition and wellness, known for our commitment to quality,
                transparency, and customer satisfaction. We envision a world where optimal health and beauty are
                accessible to everyone through natural, effective products.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    <strong>Quality:</strong> We never compromise on the quality of our ingredients and manufacturing
                    processes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    <strong>Transparency:</strong> We believe in honest communication about our products and their
                    benefits.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    <strong>Innovation:</strong> We continuously research and develop new formulations to meet evolving
                    health needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">
                    <strong>Sustainability:</strong> We are committed to environmentally responsible practices in all
                    our operations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
