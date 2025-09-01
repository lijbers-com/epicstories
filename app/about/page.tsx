'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/contexts/NavigationContext'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
  const { isMenuOpen } = useNavigation()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'about us'

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

          <div style={{ maxWidth: '1000px' }}>
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '20px',
                color: '#EEECED',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '20px'
              }}>
                We create epic stories for humans
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#988F92',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '40px'
              }}>
                And every story starts with people. We dive deep into users, teams, and environments to truly understand what drives them. From that foundation, we learn, test, and build together creating something truly epic.
              </p>
              
              <h2 style={{
                fontSize: '20px',
                color: '#EEECED',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '20px'
              }}>
                A creative collective
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#988F92',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '40px'
              }}>
                We are not just a team, we are a creative collective. Designers, strategists, developers, and storytellers working side by side to craft digital products that transform user experiences into epic stories.
              </p>
              <p style={{
                fontSize: '20px',
                color: '#988F92',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '40px'
              }}>
                Every project is a collaboration. We don't sit on the sidelines; we become part of your team, working with you as a creative shareholder. Together, we challenge assumptions, spark ideas, and push boundaries.
              </p>
              
              <h3 style={{
                fontSize: '20px',
                color: '#988F92',
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                fontWeight: 'normal',
                lineHeight: '1.4',
                marginBottom: '20px'
              }}>
                Snapshots of stories in the making
              </h3>
            </div>
          </div>

          {/* Photo Gallery */}
          <div 
            className="photo-gallery"
            style={{
              display: 'grid',
              gap: '20px',
              maxWidth: '1200px',
              marginTop: '60px'
            }}
          >
            {/* Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '20px' }}>
              <div style={{ 
                aspectRatio: '1', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_01.jpg"
                  alt="Epic process snapshot 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '16/9', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_02.jpg"
                  alt="Epic process snapshot 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '4/3', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_03.jpg"
                  alt="Epic process snapshot 3"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 3fr 1fr', gap: '20px' }}>
              <div style={{ 
                aspectRatio: '3/4', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_04.jpg"
                  alt="Epic process snapshot 4"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '21/9', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_05.jpg"
                  alt="Epic process snapshot 5"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '1', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_06.jpg"
                  alt="Epic process snapshot 6"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 1.5fr', gap: '20px' }}>
              <div style={{ 
                aspectRatio: '16/9', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_012.jpg"
                  alt="Epic process snapshot 12"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '1', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_011.jpg"
                  alt="Epic process snapshot 11"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '4/3', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_09.jpg"
                  alt="Epic process snapshot 9"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Row 4 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px' }}>
              <div style={{ 
                aspectRatio: '1', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_010.jpg"
                  alt="Epic process snapshot 10"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '16/9', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_08.jpg"
                  alt="Epic process snapshot 8"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ 
                aspectRatio: '1', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src="/content/aboutus/snapshots_epicprocess_07.jpg"
                  alt="Epic process snapshot 7"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              .photo-gallery {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: 15px !important;
              }
              
              .photo-gallery > div {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 15px !important;
              }
              
              .photo-gallery > div:nth-child(1) > div:nth-child(1) {
                aspect-ratio: 3/4 !important;
              }
              
              .photo-gallery > div:nth-child(1) > div:nth-child(2) {
                aspect-ratio: 1/1 !important;
                grid-column: span 1 !important;
              }
              
              .photo-gallery > div:nth-child(1) > div:nth-child(3) {
                aspect-ratio: 4/3 !important;
                grid-column: 1 / -1 !important;
              }
              
              .photo-gallery > div:nth-child(2) > div:nth-child(1) {
                aspect-ratio: 1/1 !important;
              }
              
              .photo-gallery > div:nth-child(2) > div:nth-child(2) {
                aspect-ratio: 4/5 !important;
                grid-column: span 1 !important;
              }
              
              .photo-gallery > div:nth-child(2) > div:nth-child(3) {
                aspect-ratio: 16/9 !important;
                grid-column: 1 / -1 !important;
              }
              
              .photo-gallery > div:nth-child(3) > div:nth-child(1) {
                aspect-ratio: 16/9 !important;
                grid-column: 1 / -1 !important;
              }
              
              .photo-gallery > div:nth-child(3) > div:nth-child(2) {
                aspect-ratio: 3/4 !important;
              }
              
              .photo-gallery > div:nth-child(3) > div:nth-child(3) {
                aspect-ratio: 1/1 !important;
              }
              
              .photo-gallery > div:nth-child(4) > div:nth-child(1) {
                aspect-ratio: 4/3 !important;
              }
              
              .photo-gallery > div:nth-child(4) > div:nth-child(2) {
                aspect-ratio: 16/9 !important;
                grid-column: 1 / -1 !important;
              }
              
              .photo-gallery > div:nth-child(4) > div:nth-child(3) {
                aspect-ratio: 1/1 !important;
              }
            }
          `}</style>
        </div>
      </motion.div>
    </div>
  )
}