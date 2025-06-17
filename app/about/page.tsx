import React from 'react';
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';
import { Users, Award, Globe, Heart, ShoppingBag, Star } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: ShoppingBag, label: 'Products Sold', value: '1M+' },
    { icon: Globe, label: 'Countries Served', value: '25+' },
    { icon: Award, label: 'Years of Excellence', value: '10+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product is carefully selected and tested to meet our high standards of quality and reliability.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve customers worldwide with fast, reliable shipping and localized customer support.'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best shopping experience with cutting-edge technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Container className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            About Shopfluence
          </h1>
          <p className="text-xl text-[var(--sub-text)] max-w-3xl mx-auto leading-relaxed">
            We're more than just an e-commerce platform. We're your trusted partner in discovering 
            amazing products, connecting with quality brands, and creating memorable shopping experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[var(--main)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[var(--main)]" />
                </div>
                <div className="text-2xl font-bold text-[var(--main)] mb-2">{stat.value}</div>
                <div className="text-[var(--sub-text)] text-sm">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Our Story</h2>
            <div className="space-y-4 text-[var(--sub-text)] leading-relaxed">
              <p>
                Founded in 2015, Shopfluence began as a small startup with a big dream: to revolutionize 
                the way people shop online. We believed that shopping should be more than just a transaction—it 
                should be an experience that brings joy, discovery, and value to people's lives.
              </p>
              <p>
                Over the years, we've grown from a small team of passionate entrepreneurs to a global 
                e-commerce platform serving millions of customers worldwide. Our commitment to quality, 
                innovation, and customer satisfaction has remained unchanged since day one.
              </p>
              <p>
                Today, we're proud to offer over 10,000 carefully curated products from trusted brands 
                and emerging designers, all backed by our promise of quality, authenticity, and exceptional service.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[var(--main)]/20 to-[var(--second)]/20 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">Our Values</h2>
            <p className="text-[var(--sub-text)] text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we serve our customers and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 border-0 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--main)] to-[var(--second)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-[var(--text)] text-lg mb-3">{value.title}</h3>
                  <p className="text-[var(--sub-text)] text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Section */}
        <Card className="p-12 text-center bg-gradient-to-br from-[var(--main)]/5 to-[var(--second)]/5 border-0">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Our Mission</h2>
          <p className="text-xl text-[var(--sub-text)] max-w-4xl mx-auto leading-relaxed">
            To empower people around the world to discover, connect, and shop with confidence. 
            We strive to create a platform where quality meets affordability, where innovation meets tradition, 
            and where every customer feels valued and heard.
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default AboutPage;