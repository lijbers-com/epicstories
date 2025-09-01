'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/contexts/NavigationContext'

export default function Contact() {
  const { isMenuOpen } = useNavigation()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "let's create"

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
              <div style={{ marginBottom: '30px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #988F92',
                    color: '#EEECED',
                    fontSize: '18px',
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#EEECED'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#988F92'}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #988F92',
                    color: '#EEECED',
                    fontSize: '18px',
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#EEECED'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#988F92'}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #988F92',
                    color: '#EEECED',
                    fontSize: '18px',
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#EEECED'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#988F92'}
                />
              </div>

              <div style={{ marginBottom: '40px' }}>
                <textarea
                  name="message"
                  placeholder="Tell us about your story"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #988F92',
                    color: '#EEECED',
                    fontSize: '18px',
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#EEECED'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#988F92'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '16px 48px',
                  backgroundColor: status === 'loading' ? '#988F92' : '#EEECED',
                  color: '#544449',
                  border: 'none',
                  borderRadius: '48px',
                  fontSize: '18px',
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                  fontWeight: '500',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && (
                <p style={{
                  marginTop: '20px',
                  color: '#88C999',
                  fontSize: '16px',
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
                }}>
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p style={{
                  marginTop: '20px',
                  color: '#E57373',
                  fontSize: '16px',
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
                }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
        </div>
      </motion.div>
    </div>
  )
}