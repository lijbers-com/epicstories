'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/contexts/NavigationContext'
import { useState, useEffect } from 'react'

export default function DigitalExperiencesPage() {
  const { isMenuOpen } = useNavigation()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'coming soon'

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div style={{ backgroundColor: '#544449', minHeight: '100vh' }}>
      <motion.div 
        style={{ 
          paddingBottom: '60px'
        }}
        initial={{ paddingTop: '220px' }}
        animate={{ 
          paddingTop: isMenuOpen ? '400px' : '220px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 32px'
        }}>
          {/* Page Title */}
          <h1 
            className="responsive-title"
            style={{ 
              fontWeight: 'bold',
              color: '#EEECED',
              margin: '0 0 60px 0',
              fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
              lineHeight: '1.1'
            }}
          >
            {displayedText}
            <span 
              className="cursor"
              style={{
                opacity: displayedText.length < fullText.length ? 1 : 0,
                animation: displayedText.length < fullText.length ? 'blink 1s infinite' : 'none'
              }}
            >
              |
            </span>
          </h1>
          
          <style jsx>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            
            .responsive-title {
              font-size: 80px;
            }
            
            @media (min-width: 768px) {
              .responsive-title {
                font-size: 120px;
              }
            }
            
            @media (min-width: 1024px) {
              .responsive-title {
                font-size: 150px;
              }
            }
          `}</style>
          
          {/* Sub copy */}
          <div style={{
            color: '#988F92',
            fontSize: '20px',
            fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
            lineHeight: '1.4',
            fontWeight: 'normal'
          }}>
            The story is coming soon...
          </div>
        </div>
      </motion.div>
    </div>
  )
}