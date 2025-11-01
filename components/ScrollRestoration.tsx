"use client"

import { useEffect } from "react"

/**
 * ScrollRestoration component handles proper scroll position restoration
 * when pages are loaded (including browser tab restoration).
 * This prevents the page from jumping to an incorrect scroll position.
 */
export function ScrollRestoration() {
  useEffect(() => {
    // Disable automatic scroll restoration to prevent jumps
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    let scrollTimeout: NodeJS.Timeout

    // Store scroll position continuously while scrolling
    const saveScrollPosition = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString())
        sessionStorage.setItem("scrollTimestamp", Date.now().toString())
      }, 100) // Debounce to avoid excessive writes
    }

    // Restore scroll position after page loads
    const restoreScrollPosition = () => {
      // Wait for content to be fully rendered
      const checkAndRestore = () => {
        // Check if document is ready and has height
        if (document.readyState === "complete" && document.documentElement.scrollHeight > 0) {
          const savedPosition = sessionStorage.getItem("scrollPosition")
          const scrollTimestamp = sessionStorage.getItem("scrollTimestamp")
          
          if (savedPosition && scrollTimestamp) {
            // Only restore if the saved position is recent (within 5 minutes)
            const age = Date.now() - parseInt(scrollTimestamp, 10)
            const position = parseInt(savedPosition, 10)
            
            // Only restore if position is significant and recent
            if (position > 100 && age < 300000) {
              // Wait a bit more to ensure all content is rendered
              setTimeout(() => {
                window.scrollTo({
                  top: position,
                  behavior: "auto" // Use 'auto' instead of 'smooth' for instant restoration
                })
              }, 0)
            }
          }
        } else {
          // If not ready yet, try again on next frame
          requestAnimationFrame(checkAndRestore)
        }
      }

      // Start checking after a short delay
      requestAnimationFrame(() => {
        requestAnimationFrame(checkAndRestore)
      })
    }

    // Save scroll position on scroll events
    const handleScroll = () => {
      saveScrollPosition()
    }

    // Also listen for pageshow event (fires when page is restored from cache/tab)
    const handlePageShow = (e: PageTransitionEvent) => {
      // If page was restored from cache, wait a bit then restore scroll
      if (e.persisted) {
        setTimeout(restoreScrollPosition, 100)
      }
    }

    // Listen for visibility change (when tab becomes visible)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // When tab becomes visible, check if we should restore scroll
        restoreScrollPosition()
      }
    }

    // Initial restore attempt
    restoreScrollPosition()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("pageshow", handlePageShow)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearTimeout(scrollTimeout)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("pageshow", handlePageShow)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}

