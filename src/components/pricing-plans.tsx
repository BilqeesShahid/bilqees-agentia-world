import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingPlans() {
  const plans = [
    { name: "Starter", price: "$99", features: ["1 AI Agent", "5 Users", "Basic Support"] },
    { name: "Pro", price: "$299", features: ["3 AI Agents", "20 Users", "Priority Support"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited AI Agents", "Unlimited Users", "24/7 Support"] },
  ]

  return (
    <section id="pricing-plans" className="w-full py-20 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="bg-gray-900 border-purple-700 hover:border-cyan-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-400">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</p>
                <ul className="text-purple-200 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="mb-2">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-500">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

