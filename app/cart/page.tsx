"use client";
import React from 'react';
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore();
  const { isSignedIn } = useUser();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleCheckout = () => {
    if (!isSignedIn) {
      toast.error('Please sign in to proceed to checkout');
      return;
    }
    // Redirect to checkout page
    window.location.href = '/checkout';
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <Container className="py-16">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 bg-[var(--main)]/10 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-16 h-16 text-[var(--main)]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text)] mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-[var(--sub-text)] text-lg mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link href="/shop">
                <Button className="bg-[var(--main)] hover:bg-[var(--main)]/90 text-white px-8 py-3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Container className="py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Shopping Cart
          </h1>
          <p className="text-[var(--sub-text)] text-lg">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-32 h-32 flex-shrink-0">
                    <img
                      src={item.product?.image_url || ''}
                      alt={item.product?.name || ''}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-semibold text-[var(--text)] text-lg">
                        {item.product?.name}
                      </h3>
                      <p className="text-[var(--sub-text)] text-sm">
                        {item.product?.description}
                      </p>
                      <p className="text-[var(--main)] font-bold text-xl mt-2">
                        ${item.product?.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.product_id, item.quantity - 1)}
                          className="p-2 rounded-full border border-[var(--sub-text)]/20 hover:bg-[var(--main)]/10 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.product_id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                          min="1"
                        />
                        
                        <button
                          onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)}
                          className="p-2 rounded-full border border-[var(--sub-text)]/20 hover:bg-[var(--main)]/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.product_id, item.product?.name || '')}
                        className="p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-[var(--text)] font-semibold">
                        Subtotal: ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Link href="/shop">
                <Button variant="outline" className="border-[var(--main)] text-[var(--main)]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              
              <Button
                onClick={clearCart}
                variant="outline"
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h3 className="font-semibold text-[var(--text)] text-xl mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--sub-text)]">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[var(--sub-text)]">Shipping</span>
                  <span className="font-semibold">
                    {getTotalPrice() > 50 ? 'Free' : '$9.99'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[var(--sub-text)]">Tax</span>
                  <span className="font-semibold">
                    ${(getTotalPrice() * 0.08).toFixed(2)}
                  </span>
                </div>
                
                <hr className="border-[var(--sub-text)]/20" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[var(--main)]">
                    ${(getTotalPrice() + (getTotalPrice() > 50 ? 0 : 9.99) + (getTotalPrice() * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>

              {getTotalPrice() < 50 && (
                <div className="bg-[var(--main)]/10 text-[var(--main)] p-3 rounded-lg text-sm mb-6">
                  Add ${(50 - getTotalPrice()).toFixed(2)} more for free shipping!
                </div>
              )}

              <Button
                onClick={handleCheckout}
                className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90 text-white py-3 text-lg font-semibold"
              >
                Proceed to Checkout
              </Button>

              <p className="text-xs text-[var(--sub-text)] text-center mt-4">
                Secure checkout powered by Stripe
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;