"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, Gift, Zap, Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Flash Sale',
    description: 'Up to 70% off on selected items',
    discount: '70%',
    icon: Zap,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    timeLeft: '2 days left',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 2,
    title: 'Weekend Special',
    description: 'Free shipping on orders over $50',
    discount: 'FREE',
    icon: Gift,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    timeLeft: '3 days left',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 3,
    title: 'Clearance Sale',
    description: 'Last chance to grab these deals',
    discount: '50%',
    icon: Percent,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    timeLeft: '1 week left',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

const OffersSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
          Special Offers
        </h2>
        <p className="text-[var(--sub-text)] text-lg max-w-2xl mx-auto">
          Don't miss out on these amazing deals and limited-time offers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => {
          const IconComponent = offer.icon;
          return (
            <Card key={offer.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                <div className="absolute top-4 right-4">
                  <div className={`${offer.bgColor} ${offer.textColor} px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                    <IconComponent className="w-4 h-4" />
                    {offer.discount} OFF
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                  <p className="text-sm opacity-90">{offer.description}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 ${offer.textColor}`}>
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{offer.timeLeft}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <Link href="/offers">
                  <Button className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90 text-white transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link href="/offers">
          <Button variant="outline" size="lg" className="border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Offers
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OffersSection;