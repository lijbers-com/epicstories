'use client'

export default function ManageExpectationsPage() {
  return (
    <div style={{ backgroundColor: '#544449', minHeight: '100vh' }}>
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
            Manage<br/>expectations
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
          `}</style>
          
          {/* Content will be added later */}
          <div style={{
            color: '#988F92',
            fontSize: '20px',
            fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
          }}>
            Content coming soon...
          </div>
        </div>
      </div>
    </div>
  )
}