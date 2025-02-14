import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The AI agents provided by this company have revolutionized our data analysis processes. We've seen a 40% increase in efficiency since implementation.",
      author: "Sarah Chen",
      position: "CTO, DataTech Solutions",
      image: "/sara.jpeg",
    },
    {
      quote:
        "Their next-gen AI agents have transformed our customer service. Response times are down 60%, and customer satisfaction is at an all-time high.",
      author: "Michael Rodriguez",
      position: "Head of Customer Experience, GlobalServe",
      image: "/mic.webp",
    },
    {
      quote:
        "Implementing these AI agents in our R&D department has accelerated our innovation pipeline. We're bringing products to market 30% faster.",
      author: "Dr. Emily Nakamura",
      position: "Director of Research, FutureTech Inc.",
      image: "/emily.jpeg",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-purple-500 hover:border-cyan-500 transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-purple-400 mb-4" />
                <p className="text-purple-200 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 border-2 border-cyan-500"
                  />
                  <div>
                    <p className="font-semibold text-cyan-400">{testimonial.author}</p>
                    <p className="text-sm text-purple-300">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

