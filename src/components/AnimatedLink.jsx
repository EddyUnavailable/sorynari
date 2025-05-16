'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AnimatedLink({ href, children, className = '', exitClass = 'page-exit-animation' }) {
  const router = useRouter()
  const [animating, setAnimating] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()

    if (animating) return
    setAnimating(true)

    // Add exit animation class to <body>
    document.body.classList.add(exitClass)

    setTimeout(() => {
      router.push(href)
    }, 400) // match your animation duration
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
