"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Gamepad2, 
  Book,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    count: '2.5K+ items'
  },
  {
    id: 2,
    name: 'Computers',
    icon: Laptop,
    color: 'from-purple-500 to-purple-600',
    count: '1.8K+ items'
  },
  {
    id: 3,
    name: 'Fashion',
    icon: Shirt,
    color: 'from-pink-500 to-pink-600',
    count: '3.2K+ items'
  },
  {
    id: 4,
    name: 'Home & Garden',
    icon: Home,
    color: 'from-green-500 to-green-600',
    count: '1.5K+ items'
  },
  {
    id: 5,
    name: 'Gaming',
    icon: Gamepad2,
    color: 'from-red-500 to-red-600',
    count: '900+ items'
  },
  {
    id: 6,
    name: 'Books',
    icon: Book,
    color: 'from-yellow-500 to-yellow-600',
    count: '2.1K+ items'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
          Shop by Category
        </h2>
        <p className="text-[var(--sub-text)] text-lg max-w-2xl mx-auto">
          Explore our wide range of categories and find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link key={category.id} href={`/shop?category=${category.name.toLowerCase()}`}>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <div className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--main)] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[var(--sub-text)] mt-1">
                      {category.count}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-[var(--main)] mx-auto" />
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;