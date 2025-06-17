"use client";
import React from 'react';
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift, Zap, Percent, Tag, Star } from 'lucide-react';
import Link from 'next/link';

const OffersPage = () => {
  const featuredOffers = [
    {
      id: 1,
      title: 'Flash Sale',
      description: 'Up to 70% off on selected electronics',
      discount: '70%',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      timeLeft: '2 days left',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      originalPrice: '$299.99',
      salePrice: '$89.99',
      featured: true
    },
    {
      id: 2,
      title: 'Weekend Special',
      description: 'Free shipping on all orders over $50',
      discount: 'FREE SHIPPING',
      icon: Gift,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      timeLeft: '3 days left',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=600',
      originalPrice: '$9.99',
      salePrice: 'FREE',
      featured: true
    },
    {
      id: 3,
      title: 'Clearance Sale',
      description: 'Last chance to grab these amazing deals',
      discount: '50%',
      icon: Percent,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      timeLeft: '1 week left',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600',
      originalPrice: '$199.99',
      salePrice: '$99.99',
      featured: true
    }
  ];

  const allOffers = [
    {
      id: 4,
      title: 'Buy 2 Get 1 Free',
      description: 'Mix and match from our fashion collection',
      discount: 'BOGO',
      category: 'Fashion',
      timeLeft: '5 days left',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Student Discount',
      description: '15% off for verified students',
      discount: '15%',
      category: 'Education',
      timeLeft: 'Ongoing',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'First Order Special',
      description: '20% off your first purchase',
      discount: '20%',
      category: 'New Customer',
      timeLeft: 'Limited time',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Bundle Deal',
      description: 'Save more when you buy together',
      discount: '30%',
      category: 'Electronics',
      timeLeft: '1 week left',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Loyalty Rewards',
      description: 'Earn points with every purchase',
      discount: 'POINTS',
      category: 'Rewards',
      timeLeft: 'Ongoing',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      title: 'Seasonal Sale',
      description: 'End of season clearance',
      discount: '60%',
      category: 'Seasonal',
      timeLeft: '2 weeks left',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Container className="py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Hot Offers & Deals
          </h1>
          <p className="text-xl text-[var(--sub-text)] max-w-3xl mx-auto leading-relaxed">
            Don't miss out on these incredible deals! Limited time offers with amazing discounts 
            on your favorite products.
          </p>
        </div>

        {/* Featured Offers */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-[var(--star)] fill-current" />
            <h2 className="text-2xl font-bold text-[var(--text)]">Featured Deals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOffers.map((offer) => {
              const IconComponent = offer.icon;
              return (
                <Card key={offer.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge className={`${offer.bgColor} ${offer.textColor} border-0 font-bold`}>
                        {offer.discount} OFF
                      </Badge>
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

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[var(--sub-text)] line-through text-sm">
                          {offer.originalPrice}
                        </span>
                        <div className="text-2xl font-bold text-[var(--main)]">
                          {offer.salePrice}
                        </div>
                      </div>
                    </div>

                    <Link href="/shop">
                      <Button className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90 text-white transition-all duration-300">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Offers */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Tag className="w-6 h-6 text-[var(--main)]" />
            <h2 className="text-2xl font-bold text-[var(--text)]">All Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOffers.map((offer) => (
              <Card key={offer.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="flex">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4 flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--main)] transition-colors">
                        {offer.title}
                      </h3>
                      <Badge variant="outline" className="text-[var(--main)] border-[var(--main)]">
                        {offer.discount}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-[var(--sub-text)] line-clamp-2">
                      {offer.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--main)] font-medium">
                        {offer.category}
                      </span>
                      <span className="text-[var(--sub-text)]">
                        {offer.timeLeft}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 p-8 text-center bg-gradient-to-br from-[var(--main)]/5 to-[var(--second)]/5 border-0">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Never Miss a Deal
          </h3>
          <p className="text-[var(--sub-text)] mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, 
            flash sales, and special promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[var(--sub-text)]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main)] focus:border-transparent"
            />
            <Button className="bg-[var(--main)] hover:bg-[var(--main)]/90 text-white px-6">
              Subscribe
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default OffersPage;