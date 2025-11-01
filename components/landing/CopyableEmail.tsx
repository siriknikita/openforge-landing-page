"use client"

import { useToast } from "@/hooks/use-toast"

interface CopyableEmailProps {
  email: string
  className?: string
}

export function CopyableEmail({ email, className = "" }: CopyableEmailProps) {
  const { toast } = useToast()

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      toast({
        title: "Copied!",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try selecting the text manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <span
      className={`select-text cursor-pointer hover:underline text-primary ${className}`}
      onClick={handleClick}
      onCopy={async (e) => {
        e.preventDefault()
        const selectedText = window.getSelection()?.toString() || email
        try {
          await navigator.clipboard.writeText(selectedText)
          toast({
            title: "Copied!",
          })
        } catch (err) {
          toast({
            title: "Failed to copy",
            description: "Please try selecting the text manually.",
            variant: "destructive",
          })
        }
      }}
      title="Click to copy email"
    >
      {email}
    </span>
  )
}

