import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plug, Brain, Rocket, Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { title: "Connect", description: "Integrate our AI agents with your systems", icon: Plug },
    { title: "Train", description: "Customize the AI to your specific needs", icon: Brain },
    { title: "Deploy", description: "Implement the AI solutions in your workflow", icon: Rocket },
    { title: "Optimize", description: "Continuously improve performance with real-time data", icon: Zap },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="bg-gray-900 border-purple-700 hover:border-cyan-500 transition-colors">
              <CardHeader>
                <step.icon className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-2xl text-cyan-400">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-purple-200">{step.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

