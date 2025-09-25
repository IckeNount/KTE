import { NextRequest, NextResponse } from 'next/server'

// Dummy email for testing - replace with your actual endpoint
const DUMMY_EMAIL = 'applications@kteccs.com'
const ADMIN_EMAIL = 'admin@kteccs.com'

// Interface for the application data
interface ApplicationData {
  firstName: string
  lastName: string
  age: number
  phoneNumber: string
  website?: string
  willingToRelocate: boolean
  favoriteColor: string
  preferredShift: string[]
  additionalNotes: string
  previousExperience: boolean
  callbackTime: string
  excitementScale: number
  submittedAt: string
  source: string
}

export async function POST(request: NextRequest) {
  try {
    const applicationData: ApplicationData = await request.json()

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'age',
      'phoneNumber',
      'additionalNotes',
      'callbackTime',
    ]
    const missingFields = requiredFields.filter(
      (field) => !applicationData[field as keyof ApplicationData],
    )

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          missingFields,
        },
        { status: 400 },
      )
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the application data (in a real app, you'd save to database)
    console.log('📧 New Application Received:')
    console.log('================================')
    console.log(
      `Name: ${applicationData.firstName} ${applicationData.lastName}`,
    )
    console.log(`Age: ${applicationData.age}`)
    console.log(`Phone: ${applicationData.phoneNumber}`)
    console.log(`Website: ${applicationData.website || 'Not provided'}`)
    console.log(
      `Willing to relocate: ${applicationData.willingToRelocate ? 'Yes' : 'No'}`,
    )
    console.log(
      `Preferred shifts: ${applicationData.preferredShift.join(', ')}`,
    )
    console.log(
      `Previous experience: ${applicationData.previousExperience ? 'Yes' : 'No'}`,
    )
    console.log(`Callback time: ${applicationData.callbackTime}`)
    console.log(`Excitement level: ${applicationData.excitementScale}/10`)
    console.log(`Additional notes: ${applicationData.additionalNotes}`)
    console.log(`Submitted at: ${applicationData.submittedAt}`)
    console.log(`Source: ${applicationData.source}`)
    console.log('================================')

    // Generate a dummy confirmation ID
    const confirmationId = `KTE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email to applicant
    // 3. Send notification email to admin
    // 4. Possibly integrate with CRM or ATS system

    // Simulate email sending (replace with actual email service)
    console.log(`📤 Sending confirmation email to: ${DUMMY_EMAIL}`)
    console.log(`📤 Sending notification to admin: ${ADMIN_EMAIL}`)
    console.log(`📋 Confirmation ID: ${confirmationId}`)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      confirmationId,
      data: {
        applicantName: `${applicationData.firstName} ${applicationData.lastName}`,
        submittedAt: applicationData.submittedAt,
        nextSteps: [
          'Review application within 24 hours',
          'Initial phone screening if qualified',
          'Match with suitable international positions',
          'Begin documentation process',
        ],
      },
    })
  } catch (error) {
    console.error('❌ Error processing application:', error)

    return NextResponse.json(
      {
        error: 'Failed to process application',
        message:
          'There was an internal error processing your application. Please try again later.',
      },
      { status: 500 },
    )
  }
}

// Handle GET requests to provide API information
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/applications',
    method: 'POST',
    description: 'Submit job application for international opportunities',
    requiredFields: [
      'firstName',
      'lastName',
      'age',
      'phoneNumber',
      'additionalNotes',
      'callbackTime',
    ],
    optionalFields: [
      'website',
      'willingToRelocate',
      'favoriteColor',
      'preferredShift',
      'previousExperience',
      'excitementScale',
    ],
    dummyEmail: DUMMY_EMAIL,
    note: 'This is a dummy endpoint for demonstration. Replace with actual email service integration.',
  })
}
