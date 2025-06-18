import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail, OrderEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data: OrderEmailData = await request.json();
    
    await sendOrderConfirmationEmail(data);
    
    return NextResponse.json({ success: true, message: 'Order confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending order email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send order confirmation email' },
      { status: 500 }
    );
  }
}