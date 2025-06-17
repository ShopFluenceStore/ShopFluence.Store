"use client";
import React from 'react';
import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import OffersSection from '@/components/OffersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Container className="py-12">
        <CategorySection />
        <FeaturedProducts />
        <OffersSection />
      </Container>
    </div>
  );
};

export default HomePage;