'use client'

import Image from 'next/image'

export default function EtihadPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Main Content */}
      <div style={{ 
        paddingTop: '220px',
        paddingBottom: '60px'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 32px'
        }}>
          
          <style jsx>{`
            .split-container {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
            }

            @media (min-width: 1024px) {
              .split-container {
                grid-template-columns: 1fr 320px;
                gap: 80px;
              }
            }

            .left-column {
              max-width: 800px;
            }

            .right-column {
              max-width: 320px;
              justify-self: end;
              padding-left: 40px;
              position: relative;
            }

            .right-column::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 1px;
              height: 100%;
              max-height: 800px;
              background-color: #988F92;
            }
            .content-section {
              margin-bottom: 60px;
            }

            .split-container .content-section {
              max-width: none;
            }

            .section-title {
              font-size: 20px;
              font-weight: normal;
              color: #544449;
              margin: 0 0 20px 0;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              line-height: 1.4;
            }

            .body-text {
              font-size: 20px;
              color: #988F92;
              line-height: 1.4;
              margin-bottom: 20px;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              font-weight: normal;
            }

            .quote {
              font-size: 20px;
              color: #D4A574;
              font-style: normal;
              font-weight: normal;
              margin: 40px 0;
              padding: 40px;
              background-color: rgba(212, 165, 116, 0.1);
              border-radius: 12px;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              line-height: 1.4;
              max-width: 800px;
            }

            .stats-grid {
              display: flex;
              flex-direction: column;
              gap: 20px;
              margin: 20px 0;
              max-width: none;
            }

            .stat-item {
              text-align: left;
              padding: 0;
              background-color: transparent;
              border-radius: 0;
              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            .stat-number {
              font-size: 20px;
              font-weight: normal;
              color: #D4A574;
              display: block;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              line-height: 1.4;
            }

            .stat-label {
              font-size: 20px;
              color: #988F92;
              margin-top: 8px;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              font-weight: normal;
              line-height: 1.4;
            }

            .image-container {
              margin: 60px 0;
              border-radius: 12px;
              overflow: hidden;
              max-width: 800px;
            }

            @media (max-width: 768px) {
              .stats-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
            }
          `}</style>
          
          <div className="split-container">
            {/* Left Column */}
            <div className="left-column">
              {/* Our Role Section */}
              <div className="content-section">
                <h2 className="section-title">Our Role</h2>
                <p className="body-text">
                  We partnered with a national airline in the United Arab Emirates to transform their digital channels 
                  and expand from a traditional airline into a multi-product retailer. Our comprehensive approach included 
                  user research, stakeholder interviews, and strategic product development across multiple touchpoints.
                </p>
              </div>

              {/* Richard Branson Quote */}
              <div className="quote">
                "If you want to be a millionaire, start with a billion dollars and launch a new airline."
                <br/><strong>— Richard Branson</strong>
              </div>

              {/* Website Redesign Section */}
              <div className="content-section">
            <h2 className="section-title">Website Redesign</h2>
            <p className="body-text">
              Focused on improving digital channels before 2020, we identified baggage as a critical content 
              interaction topic. Through extensive user research and stakeholder interviews, we redesigned 
              the core user experience.
            </p>
            
            <div className="image-container">
              <Image 
                src="/content/etihad/Baggage-heading2-e1639001764975.png"
                alt="Baggage content redesign"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Stopover Product */}
          <div className="content-section">
            <h2 className="section-title">Stopover Product Development</h2>
            <p className="body-text">
              Strategic initiative to promote Abu Dhabi as a destination. We developed a unique placement in 
              the user booking flow, aimed at converting stopovers into mini-holidays.
            </p>
            
            <div className="image-container">
              <Image 
                src="/content/etihad/Stopover-overlay2.png"
                alt="Stopover product overlay"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="image-container">
              <Image 
                src="/content/etihad/Stopover3-inspiration2.png"
                alt="Stopover inspiration design"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Holidays Product */}
          <div className="content-section">
            <h2 className="section-title">Holidays Product Expansion</h2>
            <p className="body-text">
              Shifted from airline to multi-product retailer by researching user vacation planning behaviors. 
              Key findings revealed that users take 78 days across 38 websites to plan vacations, with 94% 
              switching devices during trip planning.
            </p>
            
            <div className="image-container">
              <Image 
                src="/content/etihad/Holiday-header.png"
                alt="Holiday product header"
                width={1200}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="image-container">
              <Image 
                src="/content/etihad/Holiday-flow-1536x479.jpg"
                alt="Holiday booking flow"
                width={1536}
                height={479}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="image-container">
              <Image 
                src="/content/etihad/Holiday-flightsearch.png"
                alt="Holiday flight search"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Account/Loyalty Program */}
          <div className="content-section">
            <h2 className="section-title">Account & Loyalty Program Redesign</h2>
            <p className="body-text">
              Simplified account registration process while focusing on providing clear value to users. 
              We researched user willingness to share personal data and streamlined the entire experience.
            </p>
            
            <div className="image-container">
              <Image 
                src="/content/etihad/Account-heading.png"
                alt="Account section heading"
                width={1200}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="image-container">
              <Image 
                src="/content/etihad/Account-extralegroom.jpg"
                alt="Account extra legroom feature"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'normal', 
              color: '#544449', 
              margin: '40px 0 20px 0',
              fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
              lineHeight: '1.4'
            }}>
              User Research Insights
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '20px 0' }}>
              <div className="image-container">
                <Image 
                  src="/content/etihad/Account-survey1.png"
                  alt="Survey result 1"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="image-container">
                <Image 
                  src="/content/etihad/Account-survey2.png"
                  alt="Survey result 2"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="image-container">
                <Image 
                  src="/content/etihad/Account-survey3.png"
                  alt="Survey result 3"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="image-container">
                <Image 
                  src="/content/etihad/Account-survey4.png"
                  alt="Survey result 4"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            </div>
            </div>
            
            {/* Right Column */}
            <div className="right-column">
              {/* The Numbers */}
              <div className="content-section">
                <h2 className="section-title">The Numbers</h2>
                <div className="stats-grid">
                  <div className="stat-item">
                    <p className="body-text">Interviewed 48 stakeholders multiple times about various topics</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Started 3 survey campaigns via Facebook, which 196 people completed</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Conducted 8 user interview sessions with around 7 users per session</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Undertook 5 usability studies with around 5 users per session</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Worked across 2 continents</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Conducted 5 tree testing studies with 1,541 users to get the right IA</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">820 participants of the 1,541 completed our IA study</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">39% of participants completed the old IA in 6 minutes, 22 seconds</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">The new IA had 66% participant completion in 02:30 minutes</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Also replayed 55 (Mouseflow) recordings to see how people used the site—including what frustrated them</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">To learn more, we did 35 benchmarks and read 135 online research articles</p>
                  </div>
                </div>
              </div>

              {/* User Research Insights */}
              <div className="content-section">
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'normal', 
                  color: '#544449', 
                  margin: '40px 0 20px 0',
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                  lineHeight: '1.4'
                }}>
                  User Research Insights
                </h3>

                <div style={{ 
                  marginBottom: '20px'
                }}>
                  <div className="stat-item">
                    <p className="body-text">People take, on average, 78 days across 38 websites to discover their next vacation.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">94% of leisure travelers switch between devices as they plan or book a trip.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Unique content is king.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text">Nobody wants their holiday to be "average."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}