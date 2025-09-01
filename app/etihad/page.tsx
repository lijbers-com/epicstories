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
              margin: 0 0 60px 0;
              border-radius: 12px;
              overflow: hidden;
              max-width: 800px;
            }
            
            .left-column .image-container:first-child {
              margin-top: 0;
            }
            
            @media (min-width: 769px) {
              .left-column .image-container:first-child {
                height: auto !important;
              }
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
              {/* Etihad Image */}
              <div className="image-container" style={{ position: 'relative', height: '300px' }}>
                <Image 
                  src="/content/etihad/Etihad.jpg"
                  alt="Etihad Airways"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Our Role Section */}
              <div className="content-section">
                <h2 className="section-title">Our Role</h2>
                <p className="body-text">
                  We were part of the Digital 2020 program: new digital touchpoints, including a completely redesigned website platform; an offer management platform with a merchandising engine; and new marketing platforms to manage the digital guest experience and generate personalized messages and offers. Within this program, we delivered high-level research, ideas, and feasibility studies on all of the above. To accomplish this, we conducted interviews with customers, guided creative sessions with multiple stakeholders, built prototypes and MVPs, and conducted user tests and quantitative research. We then ensured that stakeholders could make further steps with these insights and resources. After the initial research, we led the UI/Visual designers in developing their deliverables to the developers in India. This was a process that we needed to set up to ensure delivery. What began as a hands-on process grew to our clients becoming a functional UI team in their own right. For this project, we worked jointly in the Netherlands, Abu Dhabi, and India.
                </p>
              </div>

              {/* Problem Statement Section */}
              <div className="content-section">
                <h2 className="section-title">Problem statement</h2>
                <p className="body-text">
                  Improve digital channels before 2020. The airline has neglected their digital channels for some time. As result, the airline has old systems and has missed opportunities and chances for growth. With the Digital 2020 plan, the company wants to improve the experience, add touchpoints, add products, grow Abu Dhabi as a destination, cut costs, and maintain its level of service.
                </p>
              </div>

              {/* Website Redesign Section */}
              <div className="content-section">
                <h2 className="section-title">New website: content interaction</h2>
                <p className="body-text">
                  At the start of our project, the first task was a new website. The question was, "We're moving to a new CMS; can we do a lift and shift first?" The first thought was, "Moving it from one place to another is not really helpful." But this was an opportunity to really improve, and improve not based on a medium but on a topic.
                </p>
                <p className="body-text">
                  We started looking at the numerous content topics and checked the analytics and call center data. We wanted a topic that really needed UX attention to improve. Baggage was by far the most fitting topic for us to research, a topic with a lot of questions around it. But we needed more input to really improve. We began with interviews—with just listening and viewing, we had some very useful insights. One of them was the fact that half of the people misused the booking tool to find flight information about issues such as baggage.
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
            <h2 className="section-title">Stopover: A strategic product for Abu Dhabi</h2>
            <p className="body-text">
              Stopover: A strategic product for Abu Dhabi – A stopover is when a user needs to transfer from one flight to another. For a hub like Abu Dhabi, this is very common. By extending a stopover by a few days, it could become an extra holiday within a holiday. This is what makes this a strategic product for destination Abu Dhabi.
            </p>
            <p className="body-text">
              We started with user and stakeholder interviews, as we always do to get insights before sketching any ideas. We call this our "divine and understand" phase. After our interviews, we realized that stopovers have a different meaning all over the world. Whereas in Australia, it's something common due to longer flights, in Europe, it's seen as an option for cheaper flights.
            </p>
            <p className="body-text">
              Most airlines have stopover products, especially when they are connected with a city or country. Singapore is often mentioned as a great example. After our benchmark, we saw that none of the other airlines made a real attempt to sell stopovers in their key user flows. Most of the time, it's a hidden flow. After multiple tests in search/bookings flow, we found just the right time and place that made a significant increase in stopover bookings without impacting the conversion. Both in qualitative and quantitative tests.
            </p>
            <p className="body-text">
              We found four things we needed to get right: (1) If someone wants a connection flight in the next twelve hours, don't bother them with stopovers. (2) Make the offer inspirational, not transactional (make the offer about the experience of the destination rather than the airline product). (3) Don't make them think too much; have a really simple choose flow. (4) Show them they are still making progress toward their main destination. These four factors were found by doing more than 20 user tests around different concepts. After we found the right stopover placements and concepts, we moved to generating more traffic, which means more people seeing the stopover offers. This is done by smart algorithms, destination marketing, and retargeting. One of the successes was increasing the conversion of stopovers from 0.08% to 2.3%.
            </p>
            
            <p className="body-text">
              Extra overlay between search and search results
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
            <h2 className="section-title">Holidays: Gaining growth</h2>
            
            <p className="body-text">
              The company growth lies in launching additional products, not so much in the airline itself. Holidays are part of this—selling accommodations, activities, car rentals, and more. This is not a new concept, but just like this airline, no airline has truly succeeded in this.
            </p>
            <p className="body-text">
              In our first phase, we realized that this would mean a shift in purpose from airline to retailer, at least for the digital part of the company—from one product to a multi-product retailer. Airlines basically have a single flow checkout for searching and booking flights. For retailers, this doesn't work. Users want to explore, browse, save, and then book their personal holiday. Not doing any research could lead to easy solutions like these.
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
            <h2 className="section-title">One account: Building a relationship</h2>
            <p className="body-text">
              How can you build a long-lasting relationship with your customers? A difficult question to answer, but it's what most companies want. Airlines like you to become a member of their loyalty program. But to truly benefit from an airline's loyalty program, you need to fly multiple times in a year with them. Most of us don't fly that much.
            </p>
            <p className="body-text">
              And signing up for an airline loyalty program could mean filling in a form with up to 27 fields. To compare, for other branches, it's a short as two.
            </p>
            <p className="body-text">
              In essence, a loyalty program should be designed to offer rewards and incentives that move customers along to a better relationship.
            </p>
            <p className="body-text">
              It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do. No, users are only willing to share more personal data about themselves if a direct advantage comes from the use of that data. They are willing to accept cookies if their flight searches are saved for them. They are willing to give an email address in exchange for a price alert. And users long for central and easy-to-access places to change and/or delete their data. All of this is then considered a fair relationship.
            </p>
            <p className="body-text">
              You can understand the benefits for a company like this one. No wonder there was a unanimous buy-in for a solution like one account. But most stakeholders had some hesitation due to the size of the proposed project—so we proposed to build the vision feature-by-feature, showing direct value for new and existing customers to get a taste of a real relationship. This also fit much better into our overall vision, bringing important features in line with the rest of the content. It's odd how often content and action are separated; a seat map rarely shows me why I should pay extra for that seat.
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


            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '20px 0' }}>
              <div>
                <div className="image-container">
                  <Image 
                    src="/content/etihad/Account-survey1.png"
                    alt="Survey result 1"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="body-text" style={{ marginTop: '10px' }}>
                  Would you register an account with an airline?
                </p>
              </div>
              <div>
                <div className="image-container">
                  <Image 
                    src="/content/etihad/Account-survey2.png"
                    alt="Survey result 2"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="body-text" style={{ marginTop: '10px' }}>
                  What would encourage you to join an airline's loyalty program?
                </p>
              </div>
              <div>
                <div className="image-container">
                  <Image 
                    src="/content/etihad/Account-survey3.png"
                    alt="Survey result 3"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="body-text" style={{ marginTop: '10px' }}>
                  Would you like to enter additional data about yourself so that we can help you with the booking choices you are currently making?
                </p>
              </div>
              <div>
                <div className="image-container">
                  <Image 
                    src="/content/etihad/Account-survey4.png"
                    alt="Survey result 4"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="body-text" style={{ marginTop: '10px' }}>
                  What do you feel about airlines collecting data about you, e.g., how you book flights and the choices you make?
                </p>
              </div>
            </div>

            </div>
            </div>
            
            {/* Right Column */}
            <div className="right-column">
              <div className="right-column-content">
              {/* User Research Insights */}
              <div className="content-section">
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 'normal', 
                  color: '#544449', 
                  margin: '0 0 20px 0',
                  fontFamily: 'var(--font-outfit), "Outfit", sans-serif',
                  lineHeight: '1.4'
                }}>
                  User Research Insights
                </h3>

                <div style={{ 
                  marginBottom: '20px'
                }}>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>People take, on average, 78 days across 38 websites to discover their next vacation.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>94% of leisure travelers switch between devices as they plan or book a trip.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Unique content is king.</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Nobody wants their holiday to be "average."</p>
                  </div>
                </div>
              </div>
              
              {/* The Numbers */}
              <div className="content-section">
                <h2 className="section-title">The Numbers</h2>
                <div className="stats-grid">
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Interviewed 48 stakeholders multiple times about various topics</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Started 3 survey campaigns via Facebook, which 196 people completed</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Conducted 8 user interview sessions with around 7 users per session</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Undertook 5 usability studies with around 5 users per session</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Worked across 2 continents</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Conducted 5 tree testing studies with 1,541 users to get the right IA</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>820 participants of the 1,541 completed our IA study</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>39% of participants completed the old IA in 6 minutes, 22 seconds</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>The new IA had 66% participant completion in 02:30 minutes</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>Also replayed 55 (Mouseflow) recordings to see how people used the site—including what frustrated them</p>
                  </div>
                  <div className="stat-item">
                    <p className="body-text" style={{ fontSize: '16px' }}>To learn more, we did 35 benchmarks and read 135 online research articles</p>
                  </div>
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