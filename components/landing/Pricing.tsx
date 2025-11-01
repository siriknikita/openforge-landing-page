"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactDialog } from "@/components/landing/ContactDialog"
import confetti from "canvas-confetti"

const pricingPlans = [
  {
    name: "Free Tier",
    description: "Free basic level for engagement and community building",
    features: [
      "Basic collaboration features",
      "Community access",
      "Limited AI assistance",
      "Public repositories only",
    ],
    price: "Free",
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "PRO Plan",
    description: "Subscription with advanced AI-features for experienced users",
    features: [
      "Advanced AI assistance",
      "Priority support",
      "Private repositories",
      "Extended collaboration features",
      "Advanced analytics",
    ],
    price: "Pro",
    cta: "Upgrade to PRO",
    highlight: true,
  },
  {
    name: "AI Credits",
    description: "Pay-per-use, which scales with activity",
    features: [
      "Pay only for what you use",
      "Flexible pricing",
      "No monthly commitment",
      "Perfect for occasional users",
      "Scale with your needs",
    ],
    price: "Pay as you go",
    cta: "Buy Credits",
    highlight: false,
  },
  {
    name: "Team Plan",
    description: "For organizations",
    features: [
      "Everything in PRO",
      "Team collaboration tools",
      "Centralized billing",
      "Organization management",
      "Dedicated support",
      "Custom integrations",
    ],
    price: "Custom",
    cta: "Contact Sales",
    highlight: false,
  },
]

export function Pricing() {
  const triggerConfetti = () => {
    const duration = 2000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Pricing</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. We use a Freemium model to make collaboration accessible to everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`h-full flex flex-col transition-shadow hover:shadow-lg ${
              plan.highlight
                ? "border-primary shadow-md ring-2 ring-primary/20"
                : ""
            }`}
          >
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
              <CardDescription className="text-base mb-4 min-h-[3rem]">
                {plan.description}
              </CardDescription>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price === "Pro" && (
                  <span className="text-muted-foreground text-sm ml-2">/month</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.cta === "Contact Sales" ? (
                <ContactDialog
                  trigger={
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      className="w-full mt-auto"
                    >
                      {plan.cta}
                    </Button>
                  }
                />
              ) : plan.cta === "Upgrade to PRO" ? (
                <Button
                  onClick={() => {
                    triggerConfetti()
                    const element = document.querySelector("#get-started")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  variant={plan.highlight ? "default" : "outline"}
                  className="w-full mt-auto"
                >
                  {plan.cta}
                </Button>
              ) : (
                <Button
                  asChild
                  variant={plan.highlight ? "default" : "outline"}
                  className="w-full mt-auto"
                >
                  <Link href="#get-started">{plan.cta}</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

