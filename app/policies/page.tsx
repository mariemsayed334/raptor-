import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Policies</h1>
            <p className="text-gray-600">Our shipping, return, and terms policies</p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Shipping Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We offer free shipping on all orders within the UK.</p>
                  <p>Orders are processed within 1-2 business days and typically arrive within 3-5 business days.</p>
                  <p>International shipping is available with additional charges based on destination.</p>
                  <p>Express shipping options are available for urgent orders.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Return Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We accept returns within 30 days of purchase for unopened products.</p>
                  <p>Products must be in original packaging and condition.</p>
                  <p>Refunds will be processed within 5-7 business days after we receive the returned item.</p>
                  <p>Customer is responsible for return shipping costs unless the item was defective.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Terms & Conditions</h2>
                <div className="space-y-4 text-gray-600">
                  <p>By using our website and purchasing our products, you agree to these terms and conditions.</p>
                  <p>
                    All products are dietary supplements and not intended to diagnose, treat, cure, or prevent any
                    disease.
                  </p>
                  <p>Consult with a healthcare professional before using any supplements.</p>
                  <p>We reserve the right to modify these terms at any time without prior notice.</p>
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
