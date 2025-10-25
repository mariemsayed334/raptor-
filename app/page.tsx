"use client"
import {
  Facebook,
  Instagram,
  MessageCircle,
  Leaf,
  Shield,
  Award,
  Heart,
  Star,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
 import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              FUEL YOUR PERFORMANCE
              <br />
              <span className="text-green-600">WITH PREMIUM NUTRITION</span>
            </h1>

            <div className="space-y-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Fast Energy. Zero Sugar Maximum Performance</h2>
            </div>

        

            
            <p className="text-gray-600 mb-8">
              We combine the best of science and nature to bring you nutritional meals for maximum performance.
            </p>

                 <Link href="/products">
                 <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
                  Shop Now
                 </Button>
                  </Link>
          </div>
        </div>
         
        <div className="flex-1 bg-gradient-to-br from-green-500 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 md:w-48 lg:w-[150px] h-96 mx-auto mb-8 relative">
                <img
                  src="/images/all.jpeg"
                  alt="all Supplement"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mx-8">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Nutrition Facts</h3>
                <div className="text-white space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-sm opacity-90">Calorias</span>
                    <span className="font-bold text-lg">130</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-sm opacity-90">Proteíns</span>
                    <span className="font-bold text-lg text-yellow-300">24g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-90">Trans Fat</span>
                    <span className="font-bold text-lg">0g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>


      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
            <div className="text-4xl font-bold text-green-600 mb-2">1500+</div>
  <div className="text-gray-600">Customers</div>
</div>
<div>
  <div className="text-4xl font-bold text-green-600 mb-2">25K</div>
  <div className="text-gray-600">Followers</div>
</div>
<div>
  <div className="text-4xl font-bold text-green-600 mb-2">12</div>
  <div className="text-gray-600">Shops</div>
</div>
<div>
  <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
  <div className="text-gray-600">Happy Customers</div>
</div>

          </div>
        </div>
      </section>

      {/* Why Sublivita Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 font-semibold mb-2">Why Raptor</p>
            <h2 className="text-4xl font-bold text-green-600 mb-4">Why Our Deals Are Best In The Market</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide premium nutrition, effective supplements, and natural cosmetics at unbeatable prices, ensuring
              the best value for your health and beauty. With exclusive discounts, fast delivery, and trusted products,
              we're dedicated to supporting your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Natural</h3>
                <p className="text-gray-600">Natural products promote health with pure, safe ingredients.</p>
                <Link href="/">
        <Button variant="link" className="text-green-600 mt-2">
          Learn More
        </Button>
      </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Side Effect</h3>
                <p className="text-gray-600">No side effects ensure safety and effectiveness of the product.</p>
                <Link href="/">
        <Button variant="link" className="text-green-600 mt-2">
          Learn More
        </Button>
      </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
                <p className="text-gray-600">100% organic products guarantee purity and natural quality.</p>
                <Link href="/">
        <Button variant="link" className="text-green-600 mt-2">
          Learn More
        </Button>
      </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clarifying Terms</h3>
                <p className="text-gray-600">Approved standards guarantee healthcare quality.</p>
                <Link href="/">
                 <Button variant="link" className="text-green-600 mt-2">
                    Learn More
                 </Button>
              </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">Product</p>
            <h2 className="text-4xl font-bold text-gray-900">Category</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
  <Heart className="w-8 h-8 text-green-600" />
</div>

<Link href="/products">
  <h3 className="text-xl font-semibold cursor-pointer hover:text-green-600 transition">
    Food Raptor
  </h3>
</Link>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Sport Nutrition</h3>
              </CardContent>
            </Card>

            

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold">Cosmatics</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* العنوان */}
    <div className="text-center mb-16">
      <p className="text-gray-600 font-semibold mb-2">Why We Are</p>
      <h2 className="text-4xl font-bold text-green-600">
        Sign up with us today and start achieving your goals with Raptor!
      </h2>
    </div>

    {/* الشبكة الرئيسية: عمودين */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* العمود الأول: الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card className="text-center p-8 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="https://sublivita.com/wp-content/uploads/2025/09/image-51-1-1-1-1-1-1-1-1.png" alt="gut health" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold">Gut Health</h3>
          </CardContent>
        </Card>

        <Card className="text-center p-8 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="https://sublivita.com/wp-content/uploads/2025/09/image-55-1-1-1-1-1-1-1-1.png" alt="Vegan-friendly" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold">Vegan-friendly</h3>
          </CardContent>
        </Card>

        <Card className="text-center p-8 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="https://sublivita.com/wp-content/uploads/2025/09/image-52-1-1-1-1-1-1-1-1.png" alt="fast acting energy" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold">Fast Acting Energy</h3>
          </CardContent>
        </Card>

        <Card className="text-center p-8 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="w-20 h-20 mx-auto mb-6">
              <img src="https://sublivita.com/wp-content/uploads/2025/09/Women-Face-1-1-1-1-1-1-1-1.png" alt="Get Radiant Skin" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold">Get Radiant Skin</h3>
          </CardContent>
        </Card>
      </div>
      {/* العمود التاني: الصورة الكبيرة */}
      <div className="flex justify-center">
        <img
          src="https://sublivita.com/wp-content/uploads/2025/09/Group-1000001791-1-1-1-1-1-1-1-1.png"
          alt="Community Support"
          className="w-72 md:w-96 lg:w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">FAQS</p>
            <h2 className="text-4xl font-bold text-gray-900">FAQ stands for Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Are your products safe?</h3>
                <p className="text-gray-600">
                  Yes, our products are formulated with high-quality ingredients and undergo rigorous testing to ensure
                  safety and effectiveness. We follow strict industry standards and regulations to provide you with
                  reliable and safe products.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How do I choose the right supplement for me?</h3>
                <p className="text-gray-600">
                  It depends on your fitness goals, whether you're looking to build muscle, increase energy, improve
                  recovery, or lose weight. You can check the details of each product to help you choose.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">When should I take dietary Raptor?</h3>
                <p className="text-gray-600">
                  The best time to take dietary supplements depends on the type of supplement. Some are best taken with
                  meals for better absorption, while others may be more effective on an empty stomach. Always follow the
                  instructions on the product label or consult a healthcare professional for personalized guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Can I use these products with a vegetarian diet?</h3>
                <p className="text-gray-600">
                  Many of our products are suitable for vegetarians, but we recommend checking the ingredient list or
                  product description for specific details. If you have any dietary restrictions, feel free to contact
                  us for more information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-black">
              <p className="font-semibold mb-2">Contact US</p>
              <h2 className="text-4xl font-bold mb-8">Say something to start a live chat!</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-6">Say something to start a live chat!</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+447426777871</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>Info@sublivita.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>128 City Road London EC1V 2NX UNITED KINGDOM</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="0 / 180"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">Blogs</p>
            <h2 className="text-4xl font-bold text-gray-900">Blogs share content to educate and engage audiences</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
              
                <h3 className="text-xl font-semibold mb-4">Health is the most valuable asset a person can have</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/Samantha William.jpg"
                    alt="Samantha William"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Samantha William</h4>
                  </div>
                </div>
                <p className="text-gray-600">
                  as it is the foundation of a happy and prosperous life. Health is not limited to the body but also
                  includes the mind and soul. Maintaining good health requires a balance between healthy eating, regular
                  exercise,
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Popular</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Fruit juices to boost your immune</span>
                    <span className="text-sm text-gray-500">15 videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">The Latest Makeup and Cos</span>
                    <span className="text-sm text-gray-500">15 videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">The Basics of Cosmetics</span>
                    <span className="text-sm text-gray-500">15 videos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
             <div className="w-[180px] h-[180px] bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
  <img
    src="/jack.png"
    alt="Jack Nitzsche"
    className="max-w-full max-h-full object-contain rounded-lg"
  />
</div>

              <h4 className="font-semibold mb-2">Jack Nitzsche</h4>
              <p className="text-gray-600 text-sm mb-4">Investor Group Coordinator</p>
              <h3 className="text-xl font-semibold mb-4">Absolutely wonderful!</h3>
              <p className="text-gray-600">
                Great products! I used the whey protein from Sublivita, and it made a huge difference in my performance
                and recovery after workouts!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}
