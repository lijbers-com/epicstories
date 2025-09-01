'use client'

import { motion } from 'framer-motion'
import { useNavigation } from '@/lib/contexts/NavigationContext'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { isMenuOpen } = useNavigation()
  const [displayedText, setDisplayedText] = useState('')
  const [showStories, setShowStories] = useState(false)
  const fullText = 'our stories told'

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        // Show stories after typewriter animation completes
        setTimeout(() => {
          setShowStories(true)
        }, 500)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div style={{ backgroundColor: '#544449', minHeight: '100vh' }}>
      
      {/* Main Content */}
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

          .circles-object {
            position: relative;
            width: 90%;
            height: 350px;
            max-width: 500px;
          }

          .circle {
            position: absolute;
            width: 350px;
            height: 350px;
            border-radius: 50%;
            overflow: hidden;
          }

          .top-circle {
            bottom: -50px;
            left: -30px;
            background-color: #D4C8C0;
            z-index: 2;
          }

          .bottom-circle {
            top: -50px;
            right: -30px;
            background-color: #F5F5F0;
            z-index: 1;
          }

          @media (min-width: 768px) {
            .circles-object {
              height: 400px;
              max-width: 600px;
            }
            
            .circle {
              width: 380px;
              height: 380px;
            }
          }

          @media (min-width: 1024px) {
            .circles-object {
              height: 450px;
              max-width: 700px;
            }
            
            .circle {
              width: 420px;
              height: 420px;
            }
          }

          @media (min-width: 1400px) {
            .circles-object {
              height: 500px;
              max-width: 800px;
            }
            
            .circle {
              width: 480px;
              height: 480px;
            }
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .cursor {
            display: inline-block;
            margin-left: 2px;
          }

          @media (min-width: 1024px) {
            .stories-grid {
              gap: 120px !important;
            }
          }

          @media (min-width: 1024px) {
            .yellowbello-tile {
              min-height: 800px !important;
            }
          }

          @media (max-width: 1023px) {
            .ikea-circles-story {
              margin-top: 40px !important;
              margin-bottom: 40px !important;
            }
          }

          @media (min-width: 1024px) {
            .fedex-tile {
              height: 700px !important;
              min-height: 700px !important;
            }
            .story-4-tile {
              height: 500px !important;
              min-height: 500px !important;
            }
          }

          @media (max-width: 1023px) {
            .fedex-tile {
              height: 450px !important;
              min-height: 450px !important;
              max-height: 450px !important;
            }
            .story-4-tile {
              height: 250px !important;
              min-height: 250px !important;
              max-height: 250px !important;
              padding: 5px !important;
              margin: 0 0 20px 0 !important;
              overflow: visible !important;
              position: relative !important;
            }
          }

          @media (min-width: 768px) {
            .fedex-title {
              font-size: clamp(3rem, 6vw, 5.625rem) !important;
            }
          }

          @media (max-width: 1023px) {
            .story-4-tile .card-4,
            .story-4-tile .card-3,
            .story-4-tile .card-2 {
              display: none !important;
            }
            .story-4-tile .main-card {
              position: relative !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              width: 100% !important;
              height: 100% !important;
            }
          }
        `}</style>

        {/* Stories Grid */}
        <div 
          className="stories-grid"
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            marginBottom: '80px'
          }}
        >
          
          {/* First Row - Etihad + New Story */}
          <div className="story-row" style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '44px'
          }}>
            {/* Story 1 - Etihad (2/3 width on desktop) */}
            <Link href="/etihad" style={{ textDecoration: 'none', flex: '2 1 500px', minWidth: '0' }}>
              <motion.div 
                style={{ 
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ 
                  width: 'calc(100% + 80px)',
                  margin: '0 -40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image 
                    src="/content/etihad/Etihad_home.svg"
                    alt="ETIHAD"
                    width={800}
                    height={300}
                    style={{ 
                      width: '100%', 
                      height: 'auto'
                    }}
                  />
                </div>
                <p style={{ 
                  fontSize: '16px',
                  color: '#D4A574',
                  lineHeight: '1.6',
                  margin: 0,
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
                }}>
                  Developed the complete digital strategy, UX research, concepts and design for Etihad Airways' digital experiences.
                </p>
              </motion.div>
            </Link>

            {/* Yellowbello Story (1/3 width on desktop) */}
            <Link href="/digital-experiences" style={{ textDecoration: 'none', flex: '1 1 400px', minWidth: '0', maxWidth: '450px' }}>
              <motion.div 
                className="yellowbello-tile"
                style={{ 
                  padding: '0',
                  minHeight: '700px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/content/yellowbello/Yellowbello_home.jpg"
                  alt="Yellowbello"
                  width={450}
                  height={600}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2
                }}>
                  <h2 style={{
                    fontSize: '140px',
                    fontWeight: '700',
                    color: '#FFFF00',
                    margin: 0,
                    fontFamily: 'var(--font-titillium), "Titillium Web", sans-serif',
                    textAlign: 'center',
                    lineHeight: 1
                  }}>
                    yellow bello
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#FFFF00',
                    margin: '20px 40px 0 40px',
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    textAlign: 'center',
                    lineHeight: 1.4
                  }}>
                    Met Yellowbello sta jij binnen drie simpele stappen lokaal bovenaan en bepaal je zelf waar je verkoopt.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Second Row - Manage Expectations + Circle Story */}
          <div className="story-row" style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '44px'
          }}>
            {/* Story 2 - Manage Expectations (50% width on desktop) */}
            <Link href="/digital-experiences" style={{ textDecoration: 'none', flex: '1 1 400px', minWidth: '0' }}>
              <motion.div 
                className="manage-expectations-tile"
                style={{ 
                  backgroundColor: '#009DBF',
                  padding: '40px 0 0 0',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
              <div style={{ padding: '40px 40px 20px 40px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '40px'
                }}>
                  <Image 
                    src="/content/abp/ABP_logo.svg"
                    alt="ABP Logo"
                    width={80}
                    height={30}
                    style={{ 
                      width: 'auto',
                      height: '30px'
                    }}
                  />
                </div>
                <h2 className="manage-title" style={{ 
                  fontSize: '90px',
                  fontWeight: '300',
                  color: '#0057A3',
                  margin: '0 0 32px 0',
                  fontFamily: 'var(--font-source-serif), "Source Serif 4", serif',
                  lineHeight: '0.9'
                }}>
                  Manage<br/>expectations
                </h2>
                <p style={{ 
                  fontSize: '16px',
                  color: '#0057A3',
                  lineHeight: '1.6',
                  margin: 0,
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
                }}>
                  What ever profile tag. Triggers a thought, reaction or other. Important to manage their expectation.
                </p>
              </div>
              
              {/* Images Row with Animation */}
              <div style={{ 
                position: 'relative',
                width: '100%',
                height: '150px',
                overflow: 'hidden',
                marginTop: 'auto',
                marginBottom: '0'
              }}>
                <motion.div 
                  className="abp-images-scroll"
                  style={{ 
                    display: 'flex',
                    gap: '20px',
                    position: 'absolute',
                    alignItems: 'center',
                    height: '100%'
                  }}
                  initial={{ x: 0 }}
                  whileInView={{ 
                    x: [0, '-100%'],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50,
                        ease: "linear",
                      },
                    }
                  }}
                  viewport={{ once: false }}
                >
                  {/* First set of images */}
                  {[
                    '01-pensioenpot-leeg.png',
                    '02-beleggen-is-goochelen.png',
                    '03-jaar-tussenuit.png',
                    '04-niet-doorwerk.png',
                    '05-meer-werk-meer-pensioen.png',
                    '06-sociaal-pensioen.png',
                    '07-pensioenpot.png',
                    '08-pensioenfonds-beheerd-geld.png'
                  ].map((img, index) => (
                    <Image 
                      key={`first-${index}`}
                      src={`/content/abp/${img}`}
                      alt={`ABP ${index + 1}`}
                      width={150}
                      height={150}
                      style={{ 
                        height: '150px',
                        width: 'auto',
                        flexShrink: 0
                      }}
                    />
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    '01-pensioenpot-leeg.png',
                    '02-beleggen-is-goochelen.png',
                    '03-jaar-tussenuit.png',
                    '04-niet-doorwerk.png',
                    '05-meer-werk-meer-pensioen.png',
                    '06-sociaal-pensioen.png',
                    '07-pensioenpot.png',
                    '08-pensioenfonds-beheerd-geld.png'
                  ].map((img, index) => (
                    <Image 
                      key={`second-${index}`}
                      src={`/content/abp/${img}`}
                      alt={`ABP ${index + 1}`}
                      width={150}
                      height={150}
                      style={{ 
                        height: '150px',
                        width: 'auto',
                        flexShrink: 0
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              </motion.div>
            </Link>

            {/* New Story with Overlapping Circles (50% width on desktop) */}
            <Link href="/digital-experiences" style={{ textDecoration: 'none', flex: '1 1 400px', minWidth: '0' }}>
              <motion.div 
                className="ikea-circles-story"
                style={{ 
                  position: 'relative',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
              {/* Circles Object - scales as one unit */}
              <div className="circles-object">
                {/* Top Circle - IKEA Portal */}
                <div className="circle top-circle">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/content/ikea/ikea_portal_home.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%'
                  }}>
                  </div>
                </div>

                {/* Bottom Circle - IKEA Coworker */}
                <div className="circle bottom-circle">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/content/ikea/ikea_coworker_home.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%'
                  }}>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          </div>

          {/* Story 3 - Pick-up Lines */}
          <Link href="/digital-experiences" style={{ textDecoration: 'none' }}>
            <motion.div 
              className="story-row"
              style={{ 
                padding: '0',
                maxWidth: '1200px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '500px',
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
            <Image 
              src="/content/ziggo/zIggo_pickuplines.png"
              alt="The best pick-up lines"
              width={1200}
              height={600}
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 'clamp(20px, 5vw, 60px)',
              right: 'clamp(20px, 5vw, 60px)',
              maxWidth: '400px',
              zIndex: 2,
              textAlign: 'right'
            }}>
              <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <Image 
                  src="/content/ziggo/zIggo_hands.svg"
                  alt="Ziggo Hands"
                  width={120}
                  height={120}
                  style={{ 
                    width: '120px',
                    height: 'auto'
                  }}
                />
              </div>
              <h2 style={{ 
                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                fontWeight: 'bold',
                color: '#f48c00',
                margin: 0,
                fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                lineHeight: '1.1'
              }}>
                <span style={{ display: 'block' }}>The best</span>
                <span style={{ display: 'block' }}>pick-up lines</span>
              </h2>
            </div>
          </motion.div>
          </Link>

          {/* Fourth Row - 3/5 + 2/5 Split */}
          <div className="story-row" style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '44px',
            alignItems: 'stretch'
          }}>
            {/* Story 4 - Epic Plan Stack (3/5 width on desktop) */}
            <Link href="/digital-experiences" style={{ textDecoration: 'none', flex: '3 1 450px', minWidth: '0' }}>
              <motion.div 
                className="story-4-tile"
                style={{ 
                  padding: '20px',
                  minHeight: '500px',
                  height: '500px',
                  position: 'relative',
                  backgroundColor: 'transparent',
                  margin: '0 auto',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
              {/* Bottom card (4th in stack) */}
              <div className="card-4" style={{
                position: 'absolute',
                top: '75px',
                left: '75px',
                right: '5px',
                bottom: '5px',
                backgroundColor: '#CAC9BE',
                borderRadius: '48px',
                zIndex: 1,
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }} />
              
              {/* Third card in stack */}
              <div className="card-3" style={{
                position: 'absolute',
                top: '50px',
                left: '50px',
                right: '10px',
                bottom: '35px',
                backgroundColor: '#D8D7CC',
                borderRadius: '48px',
                zIndex: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} />
              
              {/* Second card in stack */}
              <div className="card-2" style={{
                position: 'absolute',
                top: '25px',
                left: '25px',
                right: '20px',
                bottom: '110px',
                backgroundColor: '#E5E4D9',
                borderRadius: '48px',
                zIndex: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} />
              
              {/* Top card (main content) */}
              <div className="main-card" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '35px',
                bottom: '150px',
                backgroundColor: '#F1F0E5',
                borderRadius: '48px',
                zIndex: 4,
                overflow: 'hidden',
                boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
              }}>
                <Image 
                  src="/content/epicplan/epicplan_home.svg"
                  alt="Epic Plan"
                  width={900}
                  height={500}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    padding: '20px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  width: 'calc(100% - 80px)'
                }}>
                  <p style={{
                    fontSize: '18px',
                    color: '#544540',
                    lineHeight: '1.4',
                    margin: 0,
                    fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                    fontWeight: '400'
                  }}>
                    No plan? No clue?<br/>We make it epic for you
                  </p>
                </div>
              </div>
            </motion.div>
            </Link>

            {/* Story 5 - FedEx Impossible Shipping (2/5 width on desktop) */}
            <Link href="/digital-experiences" style={{ textDecoration: 'none', flex: '2 1 300px', minWidth: '0' }}>
              <motion.div 
                className="fedex-tile"
                style={{ 
                  padding: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '700px',
                  height: '700px',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
              <Image 
                src="/content/fedex-tnt/Fedex_home.jpg"
                alt="Impossible shipping"
                width={600}
                height={500}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                width: '100%',
                padding: '0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Image 
                  src="/content/fedex-tnt/FedEx_Express.svg"
                  alt="FedEx Express"
                  width={150}
                  height={50}
                  style={{ 
                    width: 'auto',
                    height: '40px',
                    marginBottom: '20px'
                  }}
                />
                <h2 className="fedex-title" style={{ 
                  fontSize: 'clamp(1.5rem, 15vw, 5.625rem)',
                  fontWeight: 'bold',
                  color: '#4d148c',
                  margin: 0,
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                  lineHeight: '0.9',
                  textAlign: 'center'
                }}>
                  Impossible<br/>shipping
                </h2>
              </div>
            </motion.div>
            </Link>
          </div>

        </div>
        </div>

      </motion.div>
      
    </div>
  )
}