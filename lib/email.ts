import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  shippingAddress: string;
}

export interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendOrderConfirmationEmail = async (data: OrderEmailData) => {
  const itemsList = data.items
    .map(item => `• ${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.customerEmail,
    subject: `Order Confirmation - ${data.orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3d8bfd; margin: 0; font-size: 28px;">Shopfluence</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Your Premium Shopping Destination</p>
          </div>
          
          <h2 style="color: #333; border-bottom: 2px solid #3d8bfd; padding-bottom: 10px;">Order Confirmation</h2>
          
          <p style="font-size: 16px; color: #333;">Dear ${data.customerName},</p>
          
          <p style="font-size: 16px; color: #333;">Thank you for your order! We're excited to confirm that we've received your order and it's being processed.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3d8bfd; margin-top: 0;">Order Details</h3>
            <p><strong>Order Number:</strong> ${data.orderNumber}</p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          
          <h3 style="color: #333;">Items Ordered:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            ${data.items.map(item => `
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span>${item.name} (Qty: ${item.quantity})</span>
                <span style="font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
            <div style="display: flex; justify-content: space-between; padding: 15px 0 0 0; font-size: 18px; font-weight: bold; color: #3d8bfd;">
              <span>Total:</span>
              <span>$${data.total.toFixed(2)}</span>
            </div>
          </div>
          
          <h3 style="color: #333;">Shipping Address:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 0; white-space: pre-line;">${data.shippingAddress}</p>
          </div>
          
          <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #3d8bfd; margin-top: 0;">What's Next?</h3>
            <ol style="color: #333; line-height: 1.6;">
              <li>We'll process your order within 1-2 business days</li>
              <li>You'll receive a shipping confirmation email with tracking information</li>
              <li>Your order will be delivered within 3-7 business days</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666;">Need help? Contact us at <a href="mailto:support@shopfluence.com" style="color: #3d8bfd;">support@shopfluence.com</a></p>
            <p style="color: #666; font-size: 14px;">Thank you for choosing Shopfluence!</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    throw error;
  }
};

export const sendContactEmail = async (data: ContactEmailData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3d8bfd;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `,
  };

  // Send confirmation email to customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'Thank you for contacting Shopfluence',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3d8bfd; margin: 0; font-size: 28px;">Shopfluence</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Your Premium Shopping Destination</p>
          </div>
          
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          
          <p style="font-size: 16px; color: #333;">Dear ${data.name},</p>
          
          <p style="font-size: 16px; color: #333;">Thank you for reaching out to us. We've received your message and our team will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3d8bfd; margin-top: 0;">Your Message:</h3>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666;">Best regards,<br>The Shopfluence Team</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerMailOptions);
    console.log('Contact emails sent successfully');
  } catch (error) {
    console.error('Error sending contact emails:', error);
    throw error;
  }
};