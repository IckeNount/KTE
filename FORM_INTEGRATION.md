# Application Form Integration

This document explains how the application form works and how to integrate it with your backend services.

## Overview

The application form is accessible at `/apply` and allows users to submit their information for international job opportunities. When users click "Apply Now" from the homepage, they are redirected to this form.

## Form Structure

### Personal Information

- **First Name** (required)
- **Last Name** (required)
- **Age** (required, minimum 18)
- **Phone Number** (required)
- **Website** (optional, must be valid URL)

### Preferences & Availability

- **Willing to relocate** (required, must be true)
- **Previous experience** (boolean)
- **Preferred shifts** (checkboxes, multiple selection)
- **Favorite color** (radio buttons)
- **Excitement scale** (slider, 1-10)

### Additional Information

- **Preferred callback time** (dropdown, required)
- **Additional notes** (textarea, required, minimum 50 characters)

## API Endpoint

### POST `/api/applications`

The form submits data to this endpoint with the following structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 25,
  "phoneNumber": "+1-234-567-8900",
  "website": "https://johndoe.com",
  "willingToRelocate": true,
  "favoriteColor": "#0000ff",
  "preferredShift": ["afternoons", "evenings"],
  "additionalNotes": "I am excited to work abroad and gain international experience...",
  "previousExperience": true,
  "callbackTime": "afternoon",
  "excitementScale": 8,
  "submittedAt": "2025-09-25T10:30:00.000Z",
  "source": "landing_page_apply_now"
}
```

### Response Format

**Success Response (200):**

```json
{
  "success": true,
  "message": "Application submitted successfully",
  "confirmationId": "KTE-1695646200000-ABC123DEF",
  "data": {
    "applicantName": "John Doe",
    "submittedAt": "2025-09-25T10:30:00.000Z",
    "nextSteps": [
      "Review application within 24 hours",
      "Initial phone screening if qualified",
      "Match with suitable international positions",
      "Begin documentation process"
    ]
  }
}
```

**Error Response (400/500):**

```json
{
  "error": "Missing required fields",
  "missingFields": ["firstName", "lastName"]
}
```

## Current Dummy Implementation

The current API endpoint (`/app/api/applications/route.ts`) is a **dummy implementation** that:

1. **Validates** required fields
2. **Logs** the application data to console
3. **Simulates** processing time (1 second delay)
4. **Returns** a success response with confirmation ID

### Console Output Example

```
📧 New Application Received:
================================
Name: John Doe
Age: 25
Phone: +1-234-567-8900
Website: https://johndoe.com
Willing to relocate: Yes
Preferred shifts: afternoons, evenings
Previous experience: Yes
Callback time: afternoon
Excitement level: 8/10
Additional notes: I am excited to work abroad...
Submitted at: 2025-09-25T10:30:00.000Z
Source: landing_page_apply_now
================================
📤 Sending confirmation email to: applications@kteccs.com
📤 Sending notification to admin: admin@kteccs.com
📋 Confirmation ID: KTE-1695646200000-ABC123DEF
```

## Integration with Real Backend

To integrate with a real backend system, replace the dummy implementation with:

### 1. Database Storage

```typescript
// Save to database
const application = await db.applications.create({
  data: applicationData,
})
```

### 2. Email Integration

```typescript
// Send confirmation email to applicant
await emailService.send({
  to: applicationData.email,
  template: 'application-confirmation',
  data: applicationData,
})

// Send notification to admin
await emailService.send({
  to: 'admin@kteccs.com',
  template: 'new-application-notification',
  data: applicationData,
})
```

### 3. CRM/ATS Integration

```typescript
// Integrate with your CRM or Applicant Tracking System
await crmService.createLead({
  name: `${applicationData.firstName} ${applicationData.lastName}`,
  phone: applicationData.phoneNumber,
  source: 'landing_page',
  customFields: {
    willingToRelocate: applicationData.willingToRelocate,
    preferredShifts: applicationData.preferredShift,
    // ... other fields
  },
})
```

### 4. Webhook Integration

```typescript
// Send to external webhook
await fetch(process.env.WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(applicationData),
})
```

## Environment Variables

Add these to your `.env.local` file:

```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password

# Database Configuration
DATABASE_URL=your-database-url

# CRM/Webhook Integration
CRM_API_KEY=your-crm-api-key
WEBHOOK_URL=your-webhook-url

# Admin Configuration
ADMIN_EMAIL=admin@kteccs.com
APPLICATIONS_EMAIL=applications@kteccs.com
```

## Testing the Form

1. **Start the development server**: `pnpm run dev`
2. **Navigate to**: `http://localhost:3001`
3. **Click**: "Apply Now" button in the hero section
4. **Fill out**: the application form
5. **Submit**: and check console logs for the dummy data
6. **Verify**: success message and form reset

## Form Validation

The form uses Yup schema validation with the following rules:

- **Required fields**: firstName, lastName, age, phoneNumber, additionalNotes, callbackTime
- **Age validation**: Minimum 18 years old
- **URL validation**: Website must be valid URL if provided
- **Text length**: Additional notes must be at least 50 characters
- **Boolean validation**: Must be willing to relocate
- **Array validation**: Must select at least 1 preferred shift

## Customization

To customize the form:

1. **Add new fields**: Update the `FormData` interface and validation schema
2. **Modify layout**: Edit `/app/(marketing)/apply/page.tsx`
3. **Change validation**: Update the `applicationValidationSchema`
4. **Customize styling**: Modify Chakra UI props in the form components

## Security Considerations

- **Input validation**: All inputs are validated both client-side and server-side
- **Rate limiting**: Consider adding rate limiting to prevent spam
- **CSRF protection**: Add CSRF tokens for production
- **Data sanitization**: Sanitize all user inputs before processing
- **Privacy compliance**: Ensure GDPR/CCPA compliance for user data
