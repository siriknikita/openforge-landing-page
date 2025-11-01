"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, Mail, Phone, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactDialogProps {
  trigger: React.ReactNode
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const { toast } = useToast()

  const email = "sales@openforge.dev"
  const phone = "+1 (555) 123-4567"

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      // For phone numbers, strip formatting (spaces, parentheses, dashes)
      const textToCopy = type === "phone" 
        ? text.replace(/\s|\(|\)|-/g, "") 
        : text
      await navigator.clipboard.writeText(textToCopy)
      if (type === "email") {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
        toast({
          title: "Copied!",
        })
      } else {
        setPhoneCopied(true)
        setTimeout(() => setPhoneCopied(false), 2000)
        toast({
          title: "Copied!",
        })
      }
    } catch (err) {
      console.error("Failed to copy:", err)
      toast({
        title: "Failed to copy",
        description: "Please try again or select the text manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Sales</DialogTitle>
          <DialogDescription>
            Get in touch with our sales team to discuss Team Plans or enterprise solutions.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-3 py-2 text-sm border rounded-md bg-muted select-text cursor-text">
                {email}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(email, "email")}
                className="shrink-0"
              >
                {emailCopied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>Phone</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="flex-1 px-3 py-2 text-sm border rounded-md bg-muted select-text cursor-text"
                onCopy={async (e) => {
                  e.preventDefault()
                  const selectedText = window.getSelection()?.toString() || phone
                  const unformattedPhone = selectedText.replace(/\s|\(|\)|-/g, "")
                  try {
                    await navigator.clipboard.writeText(unformattedPhone)
                    toast({
                      title: "Copied!",
                    })
                  } catch (err) {
                    toast({
                      title: "Failed to copy",
                      description: "Please try using the copy button.",
                      variant: "destructive",
                    })
                  }
                }}
              >
                {phone}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(phone, "phone")}
                className="shrink-0"
              >
                {phoneCopied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

