import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-purple-400">
            Next Generation <br />
            <span className="text-cyan-400">AI Agents</span>
          </h1>
          <p className="text-xl mb-8 text-purple-200">
            Experience the future of AI with our revolutionary agents. Boost productivity, enhance decision-making, and
            unlock new possibilities for your business.
          </p>
          <Button size="lg" className="bg-cyan-500 text-gray-950 hover:bg-cyan-400">
            Explore AI Agents
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/myrobo.png"
            alt="AI Robot"
            width={600}
            height={600}
            
          />
        </div>
      </div>
    </section>
  )
}

