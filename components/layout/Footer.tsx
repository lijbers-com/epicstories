'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isEtihadPage = pathname === '/etihad'
  const isYellowbelloPage = pathname === '/yellowbello'
  const isLightTheme = isEtihadPage || isYellowbelloPage

  return (
    <footer style={{ backgroundColor: isYellowbelloPage ? '#E9E7E4' : isEtihadPage ? '#FFFFFF' : '#544449' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px' }}>
        
        {/* Footer Brand */}
        <div style={{ marginBottom: '40px' }}>
          <h3 
            style={{ 
              fontSize: '20px',
              fontWeight: 'normal',
              fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
              marginBottom: '5px',
              color: isLightTheme ? '#544449' : '#EEECED'
            }}
          >
            Epic Stories
          </h3>
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
        </div>

        {/* Footer Links */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <Link
              href="/"
              style={{
                fontSize: '20px',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                textDecoration: 'none',
                color: '#988F92',
                fontWeight: 'normal'
              }}
            >
              Our stories told
            </Link>
            <Link
              href="/about"
              style={{
                fontSize: '20px',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                textDecoration: 'none',
                color: '#988F92',
                fontWeight: 'normal'
              }}
            >
              About us
            </Link>
            <Link
              href="/contact"
              style={{
                fontSize: '20px',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                textDecoration: 'none',
                color: '#988F92',
                fontWeight: 'normal'
              }}
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          borderTop: `1px solid ${isLightTheme ? 'rgba(84, 68, 73, 0.2)' : 'rgba(152, 143, 146, 0.2)'}`,
          paddingTop: '24px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#988F92',
            fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
            margin: 0,
            fontWeight: 'normal'
          }}>
            © {currentYear} Epic Stories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}