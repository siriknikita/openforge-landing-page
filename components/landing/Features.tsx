import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Real-Time Collaboration",
    description: "Multiple developers can edit the same file simultaneously with changes synchronized in real-time, similar to Google Docs or VS Code Live Share.",
  },
  {
    title: "AI-Assisted Vibe-Coding",
    description: "The AI implements code based on your detailed plan, ensuring architectural quality while maximizing your flow state.",
  },
  {
    title: "In-Browser IDE",
    description: "Fully functional Monaco Editor (VS Code in your browser) with syntax highlighting, code completion, and full editing capabilities.",
  },
  {
    title: "GitHub Integration",
    description: "Every Room is permanently tied to a GitHub repository. Create, manage, and close issues directly from the IDE without context switching.",
  },
  {
    title: "Secure & Private",
    description: "Enterprise-grade security with secure secrets management. API keys and sensitive data are protected and never logged.",
  },
  {
    title: "Developer Reputation",
    description: "Track your contributions, issues solved, and project impact. Build your reputation in the open-source community.",
  },
]

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Everything you need for seamless open-source collaboration in one unified platform.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="h-full transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
