"use client"
import {
  Facebook,
  Instagram,
  MessageCircle,
  Leaf,
  Shield,
  Heart,
  Award,
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
 import CountUp from "react-countup";
 import React, { useState } from "react";

 
  export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are your products safe?",
      answer:
       "Yes, our products are formulated with high-quality ingredients and undergo rigorous testing to ensure safety and effectiveness. We follow strict industry standards and regulations to provide you with reliable and safe products.",

    },
    {
      question: "How do I choose the right supplement for me?",
      answer:
      "It depends on your fitness goals, whether you’re looking to build muscle, increase energy, improve recovery, or lose weight. You can check the details of each product to help you choose.",

    },
    {
      question: "When should I take dietary supplements?",
      answer:
       "The best time to take dietary supplements depends on the type of supplement. Some are best taken with meals for better absorption, while others may be more effective on an empty stomach. Always follow the instructions on the product label or consult a healthcare professional for personalized guidance.",

    },
    {
      question: "Can I use these products with a vegetarian diet?",
      answer:
       "Many of our products are suitable for vegetarians, but we recommend checking the ingredient list or product description for specific details. If you have any dietary restrictions, feel free to contact us for more information.",

    },
  ];
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
      {/* تعديل حجم الصورة لتكون أصغر قليلاً ومتجاوبة */}
      <div className="w-full max-w-5xl mx-auto mb-6 relative px-3">
  <div
    className="
      w-full
      h-[120px]     /* موبايلات صغيرة جدًا */
      sm:h-[180px]  /* موبايلات متوسطة */
      md:h-[260px]  /* تابلت */
      lg:h-[340px]  /* لابتوب */
      xl:h-[420px]  /* ديسكتوب كبير */
      rounded-2xl
      overflow-hidden
    "
  >
    <img
      src="/images/all.jpeg"
      alt="All Supplement"
      className="
        w-full
        h-full
        object-cover
        rounded-2xl
        drop-shadow-2xl
        transition-all
        duration-500
        ease-in-out
        hover:scale-[1.02]
      "
    />
  </div>
</div>



      {/* صندوق Nutrition Facts */}
      <div
        className="bg-white/10 rounded-lg p-4 mx-4 sm:mx-6 md:mx-8"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
          Nutrition Facts
        </h3>
        <div className="text-white space-y-3">
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-sm opacity-90">Calories</span>
            <span className="font-bold text-lg">130</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-sm opacity-90">Proteins</span>
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

  {/* أيقونات التواصل الاجتماعي */}
  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex-col gap-4 hidden lg:flex">

    <div
      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <Facebook className="w-5 h-5 text-white" />
    </div>
    <div
      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <Instagram className="w-5 h-5 text-white" />
    </div>
    <div
      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <MessageCircle className="w-5 h-5 text-white" />
    </div>
  </div>
</div>
</div>
    


  <section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      {/* Customers */}
      <div className="flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
          <CountUp end={25355} duration={2} suffix="" />
        </div>
        <div className="text-gray-600 text-lg md:text-xl">Customers</div>
      </div>

      {/* Followers */}
      <div className="flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
          <CountUp end={6050} duration={2} separator="," />
        </div>
        <div className="text-gray-600 text-lg md:text-xl">Followers</div>
      </div>

      {/* Shops */}
      <div className="flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
          <CountUp end={850} duration={2} />
        </div>
        <div className="text-gray-600 text-lg md:text-xl">Shops</div>
      </div>

      {/* Happy Customers */}
      <div className="flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
          <CountUp end={98} duration={2} suffix="%" />
        </div>
        <div className="text-gray-600 text-lg md:text-xl">Happy Customers</div>
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

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* كارت 1 */}
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

      {/* كارت 2 */}
      <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="pt-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Sport Nutrition</h3>
        </CardContent>
      </Card>

      {/* كارت 3 */}
      <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="pt-6">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold">Cosmetics</h3>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      <section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    {/* العنوان */}
    <div className="text-center mb-16">
      <p className="text-gray-600 font-semibold mb-2">Why We Are</p>
      <h2 className="text-4xl font-bold text-green-600">
        Sign up with us today and start achieving your goals with Raptor!
      </h2>
    </div>

    {/* الكروت */}
    <div className="flex flex-col items-center gap-10">
      
      {/* الصف الأول */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* الكارت 1 */}
        <div className="w-72">
          <div className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src="https://sublivita.com/wp-content/uploads/2025/09/image-51-1-1-1-1-1-1-1-1.png"
                alt="Gut Health"
                className="w-full h-full object-contain aspect-square object-center"
              />
            </div>
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              Gut Health 
            </h3>
          </div>
        </div>

        {/* الكارت 2 */}
        <div className="w-72">
          <div className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src="https://sublivita.com/wp-content/uploads/2025/09/image-55-1-1-1-1-1-1-1-1.png"
                alt="Vegan-friendly"
                className="w-full h-full object-contain aspect-square object-center"
              />
            </div>
            <h3 className="text-2xl font-bold">Vegan-friendly</h3>
          </div>
        </div>
      </div>

      {/* الصف الثاني */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* الكارت 3 */}
        <div className="w-72">
          <div className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
                src="https://sublivita.com/wp-content/uploads/2025/09/image-52-1-1-1-1-1-1-1-1.png"
                alt="Fast Acting Energy" 
                className="w-full h-24 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold">Fast Acting Energy</h3>
          </div>
        </div>

        {/* الكارت 4 */}
       <div className="w-72">
          <div className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl">
            <div className="w-24 h-24 mx-auto mb-6">
              <img
  src="/muscles.jpeg"
  alt="Strong Immunity"
  className="w-full h-24 object-cover rounded-xl"
/>

            </div>
            <h3 className="text-2xl font-bold">Strong Immunity</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* FAQ Section */}
     

    <main className="bg-white text-gray-900">

      {/* ========== FAQ Section ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold mb-2">FAQS</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggle(idx)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <div className="ml-4 text-green-600 font-bold text-xl">
               {openIndex === idx ? (
                   <span>&#8722;</span> // علامة ناقص لما يكون مفتوح
                              ) : (
                       <span>&#43;</span> // علامة زائد لما يكون مغلق
                         )}
                </div>

                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-96 p-6" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  
      {/* Contact Section */}
      <section className="py-20 bg-white-500">
        <div className="max-w-7xl mx-auto px-6">
  <div className="grid lg:grid-cols-2 gap-12">
    
    {/* العمود الأيسر */}
<div className="p-8 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex flex-col justify-between h-full">
  <div>
    <p className="text-green-800 font-semibold mb-2">Contact US</p>
    <h2 className="text-4xl font-bold mb-8 text-green-900">
      Say something to start a live chat!
    </h2>

    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-green-900">Contact Information</h3>
      <p className="mb-6 text-green-800">
        We’re here to answer your questions and guide you to the best products.
      </p>
    </div>

    <div className="space-y-6 text-green-900">
      <div className="flex items-center gap-4">
        <Phone className="w-6 h-6 text-green-700" />
        <span>+905348133646</span>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="w-6 h-6 text-green-700" />
        <span>Info@sublivita.com</span>
      </div>
      <div className="flex items-center gap-4">
        <MapPin className="w-6 h-6 text-green-700" />
        <span>
          8A Popin Business Centre South Way Road,<br />
          Wambley, United Kingdom, HA9 0HF
        </span>
      </div>
    </div>
  </div>

  <div className="flex gap-4 mt-8">
    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
      <MessageCircle className="w-5 h-5 text-green-700 hover:text-white" />
    </div>
    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
      <Facebook className="w-5 h-5 text-green-700 hover:text-white" />
    </div>
    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
      <Instagram className="w-5 h-5 text-green-700 hover:text-white" />
    </div>
  </div>
</div>
    {/* العمود الأيمن - نموذج الاتصال */}
    <div>
      <div className="border-0 shadow-xl rounded-lg p-8 bg-white">
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
              placeholder="Type your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>

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
