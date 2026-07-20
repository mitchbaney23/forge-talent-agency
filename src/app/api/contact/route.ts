import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 2000

function escapeHtml(value: unknown): string {
  const str = String(value ?? '')
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatMultiline(value: unknown): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br>')
}

type ContactType = 'creator' | 'brand'

interface ContactData {
  name?: string
  email?: string
  company?: string
  handle?: string
  followers?: string
  platform?: string
  category?: string
  budget?: string
  message?: string
}

function validate(type: ContactType, data: ContactData): string | null {
  if (!data.name || data.name.trim().length === 0) return 'Name is required'
  if (!data.email || !EMAIL_REGEX.test(data.email)) return 'A valid email is required'
  if (!data.message || data.message.trim().length === 0) return 'Message is required'
  if (type === 'brand' && (!data.company || data.company.trim().length === 0)) {
    return 'Company name is required'
  }

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string' && value.length > MAX_FIELD_LENGTH) {
      return `Field "${key}" exceeds maximum length`
    }
  }

  return null
}

export async function POST(request: NextRequest) {
  let body: { type?: ContactType; data?: ContactData }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    )
  }

  const { type, data } = body

  if (type !== 'creator' && type !== 'brand') {
    return NextResponse.json(
      { success: false, message: 'Invalid form type' },
      { status: 400 }
    )
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Missing form data' },
      { status: 400 }
    )
  }

  const validationError = validate(type, data)
  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 400 }
    )
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials are not configured')
    return NextResponse.json(
      { success: false, message: 'Email service is not configured. Please email mitch@forgetalentagency.com directly.' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const subject = type === 'creator'
    ? `New Creator Application from ${data.name}`
    : `New Brand Inquiry from ${data.name} (${data.company})`

  let emailContent = `
    <h2>New ${type === 'creator' ? 'Creator Application' : 'Brand Inquiry'}</h2>

    <h3>Contact Information:</h3>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
  `

  if (type === 'creator') {
    emailContent += `
      <h3>Creator Details:</h3>
      <p><strong>Social Media Handle:</strong> ${escapeHtml(data.handle) || 'Not provided'}</p>
      <p><strong>Follower Count:</strong> ${escapeHtml(data.followers) || 'Not provided'}</p>
      <p><strong>Primary Platform:</strong> ${escapeHtml(data.platform) || 'Not provided'}</p>
      <p><strong>Content Category:</strong> ${escapeHtml(data.category) || 'Not provided'}</p>
    `
  } else {
    emailContent += `
      <h3>Brand Details:</h3>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Campaign Budget:</strong> ${escapeHtml(data.budget) || 'Not provided'}</p>
    `
  }

  emailContent += `
    <h3>Message:</h3>
    <p>${formatMultiline(data.message)}</p>

    <hr>
    <p><em>This message was sent from the Forge Talent Agency website contact form.</em></p>
  `

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mitch@forgetalentagency.com',
      subject,
      html: emailContent,
      replyTo: data.email,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    console.log('Form submission received:', JSON.stringify({ type, data }, null, 2))

    return NextResponse.json(
      { success: false, message: 'Unable to send your message right now. Please email mitch@forgetalentagency.com directly.' },
      { status: 502 }
    )
  }
}
