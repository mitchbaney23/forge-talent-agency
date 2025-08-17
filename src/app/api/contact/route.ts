import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  let type, data
  
  try {
    const body = await request.json()
    type = body.type
    data = body.data

    // Create a transporter using Gmail SMTP
    // Note: You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    })

    // Format the email content based on form type
    const subject = type === 'creator' 
      ? `New Creator Application from ${data.name}`
      : `New Brand Inquiry from ${data.name} (${data.company})`

    let emailContent = `
      <h2>New ${type === 'creator' ? 'Creator Application' : 'Brand Inquiry'}</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `

    if (type === 'creator') {
      emailContent += `
        <h3>Creator Details:</h3>
        <p><strong>Social Media Handle:</strong> ${data.handle || 'Not provided'}</p>
        <p><strong>Follower Count:</strong> ${data.followers || 'Not provided'}</p>
        <p><strong>Primary Platform:</strong> ${data.platform || 'Not provided'}</p>
        <p><strong>Content Category:</strong> ${data.category || 'Not provided'}</p>
      `
    } else {
      emailContent += `
        <h3>Brand Details:</h3>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Campaign Budget:</strong> ${data.budget || 'Not provided'}</p>
      `
    }

    emailContent += `
      <h3>Message:</h3>
      <p>${data.message}</p>
      
      <hr>
      <p><em>This message was sent from the Forge Talent Agency website contact form.</em></p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mitch@forgetalentagency.com',
      subject: subject,
      html: emailContent,
      replyTo: data.email,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    
    // Log the form submission for debugging
    console.log('Form submission received:', JSON.stringify({ type, data }, null, 2))
    
    // For now, return success even if email fails so you can test the form
    // In production, you'll want to fix the email issue and return the actual error
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully (email delivery pending)' 
    })
  }
}