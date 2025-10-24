import { Leaf, Shield, Award, Heart, Users, Target, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">At Raptor</h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
               we are driven by a vision to inspire wellness and beauty through the perfect fusion of science and nature.
              </p>
              <Link href="/products">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
                Our Products
              </Button>
              </Link>
            </div>
            <div className="relative">
              <img src="/natural-skincare-products.png" alt="Sublivita Products" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 font-bold mb-2">Who We Are</p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                As a premier wholesale distributor, we specialize in premium nutrition, advanced supplements, and high-quality cosmetics, ensuring that every product we offer supports a healthy, active, and radiant lifestyle. With a relentless commitment to innovation and excellence, we provide businesses with trusted, effective, and value-driven solutions in both local and global markets.
              </p>

              </div>
              </div>
            </div>
          </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
        

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg p-8">
              <CardContent className="pt-6">
            
                <h3 className="text-2xl font-semibold mb-4">Our Commitment to Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Rartor, quality is at the core of everything we do. We take pride in our rigorous selection process, ensuring that our products are crafted with the purest ingredients, backed by science, and free from harmful additives. From cutting-edge supplements to luxurious skincare solutions, we are dedicated to delivering only the best in health and beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8">
              <CardContent className="pt-6">
                
                <h3 className="text-2xl font-semibold mb-4">Seamless Wholesale Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  The health and wellness industry is evolving rapidly, with increasing demand for convenient, high-performance products. Traditional sourcing can be complex and inefficient, making it difficult for businesses to keep up. Sublivita revolutionizes the wholesale experience by offering a seamless, efficient, and hassle-free supply chain, ensuring our partners receive consistent, top-tier products with unmatched reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8">
              <CardContent className="pt-6">
                
                <h3 className="text-2xl font-semibold mb-4">Partner with Raptor</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you’re a retailer, distributor, or business looking for premium nutrition, supplements, or cosmetics, we are here to provide the expertise, quality, and efficiency you need to succeed in this fast-growing market. Together, let’s shape the future of health, wellness, and beauty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">OUR VALUES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Natural</h3>
                <p className="text-gray-600">
                  We believe in the power of nature and use only the finest natural ingredients in our formulations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Every product undergoes rigorous testing to ensure safety and effectiveness with no harmful side
                  effects.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, sourcing only the best ingredients and maintaining strict standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                <p className="text-gray-600">
                  Your health and satisfaction are our top priorities. We're here to support your wellness journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white-500 text-blak">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Raptor Quality Standards</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We harness the power of science and nature to enhance your health and beauty with premium nutrition,
                effective supplements, and natural cosmetics.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>100% Pure & Natural Ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Gluten-Free Formulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Antibiotic-Free Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Vegan-Friendly Options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Third-Party Lab Tested</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>GMP Certified Manufacturing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/about.png" alt="Quality Products" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">OUR TEAM</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet The Experts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of nutrition scientists, wellness experts, and health professionals work tirelessly to bring you
              the best products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nutrition Scientists</h3>
                <p className="text-gray-600">
                  PhD-level experts in nutritional science and biochemistry developing our formulations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wellness Experts</h3>
                <p className="text-gray-600">
                  Certified wellness coaches and nutritionists guiding product development and education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Dedicated quality control specialists ensuring every product meets our high standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their health with Sublivita products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full text-lg">Shop Now</Button>
            </Link>
            <Link href="/contact">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg bg-transparent"
            >
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
