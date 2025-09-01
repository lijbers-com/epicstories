import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Here you would typically use a service like SendGrid, Resend, or Nodemailer
    // For now, we'll create a simple email template that can be integrated with your preferred service
    
    const emailContent = {
      to: 'mail@epicstories.nl',
      from: email,
      subject: `New contact form submission from ${name}`,
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #544449;">New contact form submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <h3 style="color: #544449;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    }

    // TODO: Integrate with your email service
    // Example with Resend (you'll need to install: npm install resend)
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send(emailContent)

    // Example with SendGrid (you'll need to install: npm install @sendgrid/mail)
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send(emailContent)

    // For development, log the email content
    console.log('Email would be sent:', emailContent)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}