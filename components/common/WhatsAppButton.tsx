"use client"

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open('https://wa.me/+919250800725?text=Hi%20Med%20Pathway,%20I%27m%20interested%20in%20MBBS%20abroad.', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-4 sm:right-6 z-40 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </button>
  )
}