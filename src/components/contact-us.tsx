import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactUs() {
  return (
    <section className="w-full py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-gray-900 text-purple-200 border-purple-700 focus:border-cyan-500"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-gray-900 text-purple-200 border-purple-700 focus:border-cyan-500"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Your Message"
              className="bg-gray-900 text-purple-200 border-purple-700 focus:border-cyan-500"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-500">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

