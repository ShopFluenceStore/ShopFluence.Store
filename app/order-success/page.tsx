"use client";
import React from 'react';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Home } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const OrderSuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order') || `ORD-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Order Confirmed!
            </h1>
            <p className="text-[var(--sub-text)] text-lg mb-6">
              Thank you for your purchase. Your order has been successfully placed and is being processed.
            </p>
            
            <div className="bg-white rounded-lg p-6 border border-[var(--sub-text)]/20 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Package className="w-5 h-5 text-[var(--main)]" />
                <span className="font-semibold text-[var(--text)]">Order Number</span>
              </div>
              <p className="text-2xl font-bold text-[var(--main)]">{orderNumber}</p>
            </div>
          </div>

          <div className="bg-[var(--main)]/10 rounded-lg p-6">
            <h3 className="font-semibold text-[var(--text)] mb-4">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--main)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-medium text-[var(--text)]">Order Confirmation</p>
                  <p className="text-sm text-[var(--sub-text)]">You'll receive an email confirmation shortly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--main)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-medium text-[var(--text)]">Processing</p>
                  <p className="text-sm text-[var(--sub-text)]">We'll prepare your items for shipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--main)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-medium text-[var(--text)]">Shipping</p>
                  <p className="text-sm text-[var(--sub-text)]">You'll receive tracking information once shipped</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[var(--main)] hover:bg-[var(--main)]/90 text-white px-8 py-3">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link href="/shop">
              <Button variant="outline" className="border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white px-8 py-3">
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="text-center pt-8 border-t border-[var(--sub-text)]/20">
            <p className="text-[var(--sub-text)]">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@shopfluence.com" className="text-[var(--main)] hover:underline">
                support@shopfluence.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderSuccessPage;