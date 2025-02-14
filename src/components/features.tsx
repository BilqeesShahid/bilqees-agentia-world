import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, TrendingUp } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our AI-Powered Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Brain className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Intelligent Automation</CardTitle>
            </CardHeader>
            <CardContent>
              Streamline your processes with our advanced AI-driven automation solutions, increasing efficiency and
              reducing costs.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Predictive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              Harness the power of data with our predictive analytics tools, enabling data-driven decision making for
              your business.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>AI-Enhanced Growth</CardTitle>
            </CardHeader>
            <CardContent>
              Accelerate your business growth with our AI-powered strategies, tailored to your unique market position
              and goals.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

