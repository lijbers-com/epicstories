"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '@/lib/contexts/NavigationContext'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useNavigation()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on Etihad or Yellowbello page for light theme
  const isEtihadPage = pathname === '/etihad'
  const isYellowbelloPage = pathname === '/yellowbello'
  const isLightTheme = isEtihadPage || isYellowbelloPage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // SIMPLE STATE LOGIC - Only 3 possible states
  const headerState = isMenuOpen ? 'MENU_OPEN' : isScrolled ? 'SCROLLED' : 'DEFAULT'

  const links = [
    { href: '/', label: 'Our stories told' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact us' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 w-full z-50 ${isLightTheme ? 'text-gray-600' : 'text-white'}`}
      style={{ 
        backgroundColor: headerState === 'SCROLLED' ? 'transparent' : (isYellowbelloPage ? '#E9E7E4' : isEtihadPage ? '#FFFFFF' : '#544449')
      }}
      initial={{ height: 'auto' }}
      animate={{
        height: headerState === 'SCROLLED' ? '0px' : 'auto'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px' }}>
        
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: headerState === 'SCROLLED' ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Link 
            href="/"
            className="block no-underline"
            style={{ textDecoration: 'none' }}
          >
            <h1 
              style={{ 
                fontSize: '20px',
                fontWeight: 'normal',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                marginBottom: '5px',
                color: isLightTheme ? '#544449' : '#EEECED'
              }}
            >
              Epic Stories
            </h1>
            <p 
              style={{ 
                fontSize: '20px', 
                color: '#988F92', 
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif', 
                lineHeight: '1.4',
                fontWeight: 'normal',
                margin: 0
              }}
            >
              Creative collective crafting digital products that turn user experiences into epic stories
            </p>
          </Link>
        </motion.div>
        
        {/* Menu Button */}
        {headerState !== 'SCROLLED' && (
          <motion.div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
            style={{ 
              width: '24px',
              height: isMenuOpen ? '200px' : '14px',
              position: 'relative',
              zIndex: 50
            }}
            initial={{ marginTop: '24px' }}
            animate={{
              marginTop: '24px'
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
          {/* Top line */}
          <span
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '24px',
              height: '2px',
              backgroundColor: isLightTheme ? '#544449' : 'white',
              display: 'block'
            }}
          />
          
          {/* Bottom line */}
          <motion.span
            style={{
              position: 'absolute',
              top: '12px',
              left: '0px',
              width: '24px',
              height: '2px',
              backgroundColor: isLightTheme ? '#544449' : 'white',
              display: 'block'
            }}
            animate={{
              y: isMenuOpen ? 180 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          
          {/* Menu Items */}
          <AnimatePresence>
            {isMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '0px',
                  width: '200px',
                  padding: '8px 0'
                }}
              >
                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      display: 'block',
                      fontSize: '20px', 
                      fontFamily: 'var(--font-outfit), "Outfit", sans-serif', 
                      textDecoration: 'none',
                      color: isLightTheme ? '#544449' : 'white',
                      padding: '8px 0',
                      borderBottom: index < links.length - 1 ? `1px solid ${isLightTheme ? 'rgba(84,68,73,0.2)' : 'rgba(255,255,255,0.2)'}` : 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
        )}
      </div>
      
      {/* Fixed Menu Button for Scrolled State */}
      {headerState === 'SCROLLED' && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 51,
            pointerEvents: 'none'
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px', pointerEvents: 'auto' }}>
            <motion.div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
              style={{ 
                width: '24px',
                height: isMenuOpen ? '200px' : '14px',
                position: 'relative',
                zIndex: 52
              }}
            >
              {/* Top line */}
              <span
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '24px',
                  height: '2px',
                  backgroundColor: isLightTheme ? '#544449' : 'white',
                  display: 'block'
                }}
              />
              
              {/* Bottom line */}
              <motion.span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '0px',
                  width: '24px',
                  height: '2px',
                  backgroundColor: isLightTheme ? '#544449' : 'white',
                  display: 'block'
                }}
                animate={{
                  y: isMenuOpen ? 180 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              
              {/* Menu Items */}
              <AnimatePresence>
                {isMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '0px',
                      width: '200px',
                      padding: '8px 0'
                    }}
                  >
                    {links.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ 
                          display: 'block',
                          fontSize: '20px', 
                          fontFamily: 'var(--font-outfit), "Outfit", sans-serif', 
                          textDecoration: 'none',
                          color: isLightTheme ? '#544449' : 'white',
                          padding: '8px 0',
                          borderBottom: index < links.length - 1 ? `1px solid ${isLightTheme ? 'rgba(84,68,73,0.2)' : 'rgba(255,255,255,0.2)'}` : 'none'
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      )}
    </motion.header>
  )
}