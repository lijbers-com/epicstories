'use client'

import Image from 'next/image'

export default function YellowbelloPage() {
  return (
    <div style={{ backgroundColor: '#E9E7E4', minHeight: '100vh' }}>
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
              position: relative;
              padding-left: 40px;
            }
            
            .right-column-content {
              position: relative;
              border-left: 1px solid #988F92;
              padding-left: 40px;
              margin-left: -40px;
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
            
            .right-column .section-title {
              font-size: 16px;
            }

            .body-text {
              font-size: 20px;
              color: #988F92;
              line-height: 1.4;
              margin-bottom: 20px;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              font-weight: normal;
            }

            .image-container {
              margin: 60px 0;
              border-radius: 12px;
              overflow: hidden;
              max-width: 800px;
            }

            .stat-item {
              margin-bottom: 20px;
            }
            
            .stat-item p {
              font-size: 16px;
              color: #988F92;
              font-family: var(--font-outfit), "Outfit", sans-serif;
              font-weight: normal;
              line-height: 1.4;
              margin: 0;
            }

            @media (max-width: 1023px) {
              .right-column {
                display: none;
              }
            }

            /* Responsive styles for split sections */
            .responsive-split {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 40px;
              align-items: center;
            }

            @media (max-width: 768px) {
              .responsive-split {
                grid-template-columns: 1fr;
                gap: 40px;
              }
            }
          `}</style>
          
          <div className="split-container">
            {/* Left Column */}
            <div className="left-column">
              {/* Hero Image */}
              <div className="image-container">
                <Image 
                  src="/content/yellowbello/Yellowbello_title.png"
                  alt="Yellowbello"
                  width={800}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              {/* Our Role Section */}
              <div className="content-section">
                <h2 className="section-title">Our Role</h2>
                <p className="body-text">
                  We started Yellowbello after seeing a broken journey in shopping. Most product searches begin online, yet they almost always end in a webshop — impersonal, with no local service. We wanted to change that and began testing how online search could connect directly with local inventory. Our goal is simple: make it easy for customers to find what they need nearby, while giving local stores the visibility they deserve.
                </p>
              </div>

              {/* Hero Intro */}
              <div className="content-section">
                <p className="body-text">
                  yellowbello.nl brings local store inventory online and into Google search, so consumers can easily find what's available "around the corner." By doing so, it doesn't just make products visible, it makes the store itself visible. This results in 10.95% online conversion rates with partners like Nedgame, far above the 2–5% industry average.
                </p>
              </div>

              {/* The Broken Journey Section */}
              <div className="content-section">
                <h2 className="section-title">The broken journey of buying products in a store</h2>
                <div className="image-container">
                  <Image 
                    src="/content/yellowbello/Journey_yellowbello.svg"
                    alt="The broken customer journey"
                    width={800}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                
                {/* Insights Section */}
                <div style={{ margin: '40px 0 60px 0' }}>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    88% of consumers research online before buying
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    Physical stores hold €8 billion in inventory that's invisible to online searches
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    46% of Google searches now have local intent
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    100% year-over-year increase in "shopping near me" searches
                  </p>
                  <p className="body-text" style={{ marginBottom: '0' }}>
                    88% of consumers prefer to buy locally
                  </p>
                </div>
                
                {/* Yellowbello Store Section */}
                <div className="responsive-split" style={{ margin: '60px 0' }}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Image 
                      src="/content/yellowbello/Yellowbello_store.png"
                      alt="Yellowbello local shopping experience"
                      width={400}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div>
                    <h2 className="section-title">Yellowbello makes online feel like your local shopping street</h2>
                    <p className="body-text" style={{ marginBottom: '10px' }}>
                      By adding physical store inventory that's currently invisible in online searches
                    </p>
                    <p className="body-text" style={{ marginBottom: '10px' }}>
                      By adding trust through purchases from someone you know
                    </p>
                    <p className="body-text">
                      By adding comfort with immediate pickup
                    </p>
                  </div>
                </div>
                
                <p className="body-text" style={{ marginTop: '40px' }}>
                  Yellowbello.nl is riding the wave of hyperlocal commerce, one of the fastest-growing trends. Early results show strong traction: with 4 retail chains (816 stores), we've achieved an overall conversion rate of 7.37% compared to the industry average of 2 to 5 percent. Our top-performing partner reached an outstanding 10.95% conversion rate, proving the model's strength on both a broad and individual level.
                </p>
                <p className="body-text">
                  <strong>Bottom Line:</strong> The hyperlocal trend isn't just validated - it's creating billions for companies worldwide ($16.35B → $56.51B market growth by 2034). Yellowbello's early performance proves we are already outperforming the market through pure SEO, with an average order value of €43.90.
                </p>
              </div>

              {/* New Split Section - Image Left, Text Right */}
              <div className="content-section responsive-split">
                <div style={{ borderRadius: '999px', overflow: 'hidden', maxWidth: '300px', margin: '0 auto' }}>
                  <img 
                    src="/content/yellowbello/Nedgame_succes.jpg"
                    alt="Nedgame success story"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div>
                  <h2 className="section-title">Nedgame</h2>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    8 stores active
                  </p>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    Conversion Rate: 10.95% (2025 16.57%)
                  </p>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    Average Order Value: €43.90
                  </p>
                  <p className="body-text">
                    Growth Pattern: Consistent monthly performance
                  </p>
                </div>
              </div>

              {/* Other Partner Chains Section */}
              <div className="content-section responsive-split">
                <div style={{ borderRadius: '999px', overflow: 'hidden', maxWidth: '300px', margin: '0 auto' }}>
                  <img 
                    src="/content/yellowbello/Retailer_succes.jpg"
                    alt="Other partner chains success story"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div>
                  <h2 className="section-title">Other Partner Chains</h2>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    808+ stores active
                  </p>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    Conversion Rate: 7.37% overall
                  </p>
                  <p className="body-text" style={{ marginBottom: '10px' }}>
                    100% organic SEO traffic
                  </p>
                  <p className="body-text">
                    Growth Pattern: Consistent monthly performance
                  </p>
                </div>
              </div>

              {/* Market Insights Section */}
              <div className="content-section">
                <h2 className="section-title">Market insights 2025</h2>
                
                <h2 className="section-title">Search Behaviour:</h2>
                <p className="body-text" style={{ marginBottom: '10px' }}>57% of local searches now come from mobile devices</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>88% of consumers who conduct local searches visit or call a store within a day</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>76% of consumers look up a business online before visiting it</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>46% of Google search queries have local search intent</p>
                
                <h2 className="section-title">Hyperlocal Market:</h2>
                <p className="body-text" style={{ marginBottom: '10px' }}>Global hyperlocal services market: $16.35B (2024) → $56.51B (2034)</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>"Shopping near me" searches increased 100% year-over-year</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>42% of users click on Google Map Pack results</p>
                <p className="body-text" style={{ marginBottom: '10px' }}>82% of US shoppers use "near me" searches while shopping</p>
                <p className="body-text">ROPO effect: 100 additional online visits can lead to 25 additional in-store visits</p>
              </div>

              {/* Market Example Section */}
              <div className="content-section">
                <h2 className="section-title">Market example NearSt</h2>
                <p className="body-text">
                  NearSt was founded in 2015 after Max Kreijn struggled to find a lightbulb locally, starting as a book marketplace before pivoting in 2019 when Google sought help with in-store inventory accuracy. Its NearLIVE platform now processes over 3 billion stock updates monthly across 800,000+ retail locations, keeping data fresh within 15 minutes. Integration is simple, requiring only barcode, quantity, and price, with 130+ POS integrations and 99.9% uptime.
                </p>
                <p className="body-text">
                  The business model charges a £399 one-time connection fee per store, keeps the core search product free, and offers optional weekly add-ons that drive recurring revenue. Retailers save up to 60% versus in-house builds and report results like Morrison's Daily achieving 913% sales growth on delivery platforms. Beyond inventory, NearSt enriches product data with AI, provides local search analytics, and estimates store footfall — creating strong value and high switching costs.
                </p>
              </div>

              {/* First New Section - Image Left, Text Right */}
              <div className="content-section responsive-split">
                <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <img 
                    src="/content/yellowbello/NextToScale_Inven.png"
                    alt="Next to scale inventory illustration"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div>
                  <h2 className="section-title">Next to scale up</h2>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    Nedgame's 16.57% conversion rate is a milestone we're proud of. The key question: how much can we grow per store we add?
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    <strong>How:</strong> Adding inventory to all the other store. Keeping operations intentionally small for now, due to infrastructure and server capacity limits, speed and stability come first.
                  </p>
                  <p className="body-text">
                    <strong>Timeline:</strong> Give it a few weeks. Showing month-over-month growth will prove this is a solid business opportunity.
                  </p>
                </div>
              </div>

              {/* Second New Section - Image Left, Text Right */}
              <div className="content-section responsive-split">
                <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <img 
                    src="/content/yellowbello/NextToScale_SEO.png"
                    alt="Next to scale SEO illustration"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div>
                  <h2 className="section-title">Next to scale up</h2>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    Nedgame's 16.57% conversion rate is a milestone we're proud of. The key question: how much can we grow per store we add?
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    <strong>How:</strong> Adding inventory to all the other store. Keeping operations intentionally small for now, due to infrastructure and server capacity limits, speed and stability come first.
                  </p>
                  <p className="body-text">
                    <strong>Timeline:</strong> Give it a few weeks. Showing month-over-month growth will prove this is a solid business opportunity.
                  </p>
                </div>
              </div>

              {/* Questions/Collaboration Section */}
              <div className="content-section">
                <div style={{ marginBottom: '30px' }}>
                  <img 
                    src="/content/yellowbello/happy.png"
                    alt="Happy collaboration"
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
                <div>
                  <p className="body-text" style={{ marginBottom: '20px' }}>
                    Questions? Interested in collaborating on this story? Let's connect.
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    <strong>A Retail Partner:</strong> Turn your invisible inventory into online traffic with 10% conversion rates
                  </p>
                  <p className="body-text" style={{ marginBottom: '15px' }}>
                    <strong>An Investor:</strong> Back the platform connecting €8 billion in local inventory to digital consumers
                  </p>
                  <p className="body-text" style={{ marginBottom: '0' }}>
                    <strong>A Strategic Partner:</strong> Help build the infrastructure for thriving local commerce
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="right-column">
              <div className="right-column-content">
                {/* Results */}
                <div className="content-section">
                  <h3 className="section-title">Results</h3>
                  <div className="stat-item">
                    <p>4 retail chains (816 stores)</p>
                  </div>
                  <div className="stat-item">
                    <p>Overall conversion rate of 7.37%</p>
                  </div>
                  <div className="stat-item">
                    <p>Top-performing partner 10.95% conversion rate</p>
                  </div>
                  <div className="stat-item">
                    <p>Average order value of €43.90</p>
                  </div>
                </div>
                
                {/* Market Insights */}
                <div className="content-section">
                  <h3 className="section-title">Market Insights</h3>
                  <div className="stat-item">
                    <p>Physical stores hold €8 billion in inventory that's invisible to online searches</p>
                  </div>
                  <div className="stat-item">
                    <p>46% of Google searches now have local intent</p>
                  </div>
                  <div className="stat-item">
                    <p>100% year-over-year increase in "shopping near me" searches</p>
                  </div>
                  <div className="stat-item">
                    <p>57% of local searches now come from mobile devices</p>
                  </div>
                  <div className="stat-item">
                    <p>88% of consumers who conduct local searches visit or call a store within a day</p>
                  </div>
                  <div className="stat-item">
                    <p>76% of consumers look up a business online before visiting it</p>
                  </div>
                  <div className="stat-item">
                    <p>46% of Google search queries have local search intent</p>
                  </div>
                  <div className="stat-item">
                    <p>Global hyperlocal services market: $16.35B (2024) → $56.51B (2034)</p>
                  </div>
                  <div className="stat-item">
                    <p>"Shopping near me" searches increased 100% year-over-year</p>
                  </div>
                  <div className="stat-item">
                    <p>42% of users click on Google Map Pack results</p>
                  </div>
                  <div className="stat-item">
                    <p>82% of US shoppers use "near me" searches while shopping</p>
                  </div>
                  <div className="stat-item">
                    <p>ROPO effect: 100 additional online visits can lead to 25 additional in-store visits</p>
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