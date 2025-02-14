import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, Eye } from "lucide-react"

export function AIAgents() {
  const agents = [
    { name: "Data Analysis", icon: Brain, color: "text-cyan-400" },
    { name: "Natural Language Processing", icon: MessageSquare, color: "text-purple-400" },
    { name: "Computer Vision", icon: Eye, color: "text-pink-400" },
  ]

  return (
    <section id="ai-agents" className="w-full py-20 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Next Generation AI Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card key={agent.name} className="bg-gray-900 border-purple-700 hover:border-cyan-500 transition-colors">
              <CardHeader>
                <agent.icon className={`w-12 h-12 ${agent.color} mb-4`} />
                <CardTitle className={`text-2xl ${agent.color}`}>{agent.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-200">
                Advanced AI agent specialized in {agent.name.toLowerCase()}, providing cutting-edge solutions for your
                business needs.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

