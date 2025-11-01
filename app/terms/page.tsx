import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { ScrollToTop } from "@/components/landing/ScrollToTop"
import { CopyableEmail } from "@/components/landing/CopyableEmail"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using OpenForge, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              OpenForge is a unified, real-time, AI-assisted platform for open-source collaboration. 
              We provide web-based tools for code editing, collaboration, AI assistance, and GitHub 
              repository management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You must create an account to use certain features of our service. You are responsible 
              for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account.
            </p>

            <h3 className="text-xl font-semibold mb-3">3.2 Account Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>You must be at least 13 years old to use our service</li>
              <li>You must provide accurate and complete information</li>
              <li>You may not create multiple accounts</li>
              <li>You may not share your account with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use the service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-3">5.1 Your Content</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You retain ownership of any code, content, and intellectual property you upload or 
              create using OpenForge. By using our service, you grant us a limited license to 
              store, process, and display your content as necessary to provide the service.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 Our Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The OpenForge platform, including its design, features, and functionality, is owned by 
              us and protected by copyright, trademark, and other laws. You may not copy, modify, or 
              distribute our proprietary materials without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform uses AI to assist with code generation and other features. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>AI-generated content may contain errors or inaccuracies</li>
              <li>You are responsible for reviewing and validating all AI-generated code</li>
              <li>AI-generated content does not constitute professional advice</li>
              <li>You use AI features at your own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Billing and Payments</h2>
            <h3 className="text-xl font-semibold mb-3">7.1 Subscription Plans</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some features require a paid subscription. By subscribing, you agree to pay the 
              applicable fees and authorize us to charge your payment method.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.2 Billing Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Subscriptions renew automatically unless canceled</li>
              <li>Fees are charged in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We reserve the right to change pricing with notice</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">7.3 Cancellation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may cancel your subscription at any time. Cancellation takes effect at the end 
              of the current billing period. No refunds will be provided for partial periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We strive to provide reliable service but do not guarantee uninterrupted or error-free 
              operation. We may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Perform scheduled maintenance with reasonable notice</li>
              <li>Modify or discontinue features at any time</li>
              <li>Suspend or terminate accounts that violate these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPENFORGE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR 
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, 
              OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to indemnify and hold harmless OpenForge and its officers, directors, employees, 
              and agents from any claims, damages, losses, liabilities, and expenses arising out of 
              your use of the service or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may suspend or terminate your account at any time for violation of these terms. 
              You may terminate your account at any time by contacting us or using account settings. 
              Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. We will notify users of material 
              changes by posting the updated terms on this page. Your continued use of the service 
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email: <CopyableEmail email="legal@openforge.dev" />
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

