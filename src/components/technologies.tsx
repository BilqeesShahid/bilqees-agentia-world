import { SiPython, SiReact, SiNextdotjs, SiOpenai, SiNvidia, SiDocker } from "react-icons/si"

export function Technologies() {
  const techs = [
    { name: "Python", icon: SiPython, color: "text-yellow-300" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-500" },
    { name: "CUDA", icon: SiNvidia, color: "text-green-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  ]

  return (
    <section id="technologies" className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-purple-500 group-hover:border-cyan-500 transition-colors duration-300 ease-in-out">
                <tech.icon
                  className={`w-14 h-14 ${tech.color} group-hover:scale-110 transition-transform duration-300 ease-in-out`}
                />
              </div>
              <p className="text-purple-300 group-hover:text-cyan-400 transition-colors duration-300 ease-in-out">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

