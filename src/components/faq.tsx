import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What are AI agents?",
      answer:
        "AI agents are autonomous programs that can perceive their environment and take actions to achieve specific goals.",
    },
    {
      question: "How can AI agents benefit my business?",
      answer:
        "AI agents can automate tasks, provide insights from data, and enhance decision-making processes, leading to increased efficiency and productivity.",
    },
    {
      question: "Is my data safe with your AI agents?",
      answer:
        "Yes, we prioritize data security and comply with industry standards to ensure your information is protected.",
    },
    {
      question: "Can I customize the AI agents for my specific needs?",
      answer: "Our AI agents are designed to be flexible and can be tailored to your unique business requirements.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-purple-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-purple-700">
              <AccordionTrigger className="text-purple-400 hover:text-cyan-400">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-purple-200">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

