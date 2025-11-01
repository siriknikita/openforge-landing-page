"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is OpenForge?",
    answer: "OpenForge is a unified, real-time, AI-assisted platform that redefines open-source collaboration. It integrates all essential tools into a single, secure web-based 'Room' to eliminate context switching and maximize developer flow state.",
  },
  {
    question: "What pricing model does OpenForge use?",
    answer: "We use a Freemium model with multiple tiers: a Free Tier for community building, a PRO subscription with advanced AI features, pay-as-you-go AI Credits for flexible usage, and Team Plans for organizations. This ensures accessibility while offering advanced features for power users.",
  },
  {
    question: "How does the Free Tier work?",
    answer: "The Free Tier provides basic collaboration features, community access, and limited AI assistance. It's designed for engagement and community building, allowing developers to get started with OpenForge at no cost.",
  },
  {
    question: "What's included in the PRO Plan?",
    answer: "The PRO Plan includes advanced AI assistance, priority support, private repositories, extended collaboration features, and advanced analytics. It's perfect for experienced developers who need the full power of AI-assisted coding.",
  },
  {
    question: "How do AI Credits work?",
    answer: "AI Credits offer a pay-as-you-go model where you only pay for what you use. This flexible pricing scales with your activity, making it perfect for occasional users or those who want to try advanced features without a monthly commitment.",
  },
  {
    question: "What is a 'Room' in OpenForge?",
    answer: "A Room is a dedicated workspace permanently tied to a single GitHub repository. Each Room contains an in-browser IDE (Monaco Editor), real-time collaboration features, AI assistance, and GitHub integration—all in one place.",
  },
  {
    question: "How does real-time collaboration work?",
    answer: "Multiple developers can edit the same file simultaneously with changes synchronized in real-time, similar to Google Docs or VS Code Live Share. All edits are visible instantly to all participants in the Room.",
  },
  {
    question: "What is 'Vibe-Coding'?",
    answer: "Vibe-Coding is our core AI functionality where the AI implements code based on your detailed plan (pseudo-code, step-by-step instructions). This ensures architectural quality and user intent while maximizing your development flow state.",
  },
  {
    question: "Is my code secure?",
    answer: "Yes, OpenForge uses enterprise-grade security. API keys and sensitive data are stored securely and never logged. Secrets management is handled with encrypted storage, and only repository owners and trusted personnel can access sensitive configuration.",
  },
  {
    question: "What's included in the Team Plan?",
    answer: "The Team Plan includes everything in PRO plus team collaboration tools, centralized billing, organization management, dedicated support, and custom integrations. It's designed for organizations that need advanced team features.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Have questions? We've got answers. Find everything you need to know about OpenForge.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

