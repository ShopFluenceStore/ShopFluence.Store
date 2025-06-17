"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Container from './Container';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--main)] rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--second)] rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[var(--star)] rounded-full blur-xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[var(--main)]/10 text-[var(--main)] px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                #1 E-Commerce Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] leading-tight">
                Shop Smart,
                <span className="text-[var(--main)]"> Live Better</span>
              </h1>
              
              <p className="text-lg text-[var(--sub-text)] max-w-lg leading-relaxed">
                Discover amazing products at unbeatable prices. From electronics to fashion, 
                we have everything you need with fast delivery and excellent customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-[var(--main)] hover:bg-[var(--main)]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Start Shopping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link href="/offers">
                <Button variant="outline" size="lg" className="border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  View Offers
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--sub-text)]/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--main)]">10K+</div>
                <div className="text-sm text-[var(--sub-text)]">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--main)]">50K+</div>
                <div className="text-sm text-[var(--sub-text)]">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--main)]">4.9★</div>
                <div className="text-sm text-[var(--sub-text)]">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[var(--main)]/20 to-[var(--second)]/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="aspect-square bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-[var(--main)] to-[var(--second)] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-16 h-16 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)]">Premium Shopping</h3>
                    <p className="text-[var(--sub-text)]">Experience Excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[var(--star)] text-white p-3 rounded-full shadow-lg">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--tag)] text-white p-3 rounded-full shadow-lg">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;