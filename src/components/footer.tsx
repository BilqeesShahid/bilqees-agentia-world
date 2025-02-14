import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-950 border-t border-purple-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Join our AI Revolution</h3>
            <p className="text-purple-300">Stay updated with the latest in AI technology</p>
          </div>
          <div className="flex w-full md:w-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-gray-900 text-purple-200 border-purple-700 focus:border-cyan-500 mr-2"
            />
            <Button className="bg-purple-600 text-white hover:bg-purple-500">Subscribe</Button>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-400">
          <p>&copy; 2025 AI Revolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

