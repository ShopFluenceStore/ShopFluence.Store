import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data: ContactEmailData = await request.json();
    
    await sendContactEmail(data);
    
    return NextResponse.json({ success: true, message: 'Contact email sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send contact email' },
      { status: 500 }
    );
  }
}