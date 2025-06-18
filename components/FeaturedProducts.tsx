"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCartStore, useFavoriteStore, Product } from '@/lib/store';
import toast from 'react-hot-toast';

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation',
    price: 99.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 50,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    description: 'Advanced smartwatch with health monitoring and GPS',
    price: 299.99,
    image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    stock: 30,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Premium Coffee Maker',
    description: 'Professional grade coffee maker for the perfect brew',
    price: 149.99,
    image_url: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    stock: 25,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    rating: 4.7,
    reviews: 67
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/586344/pexels-photo-586344.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Furniture',
    stock: 15,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    rating: 4.6,
    reviews: 45
  }
];

const FeaturedProducts = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleFavorite = (productId: string, productName: string) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
      toast.success(`${productName} removed from favorites`);
    } else {
      addFavorite(productId);
      toast.success(`${productName} added to favorites`);
    }
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
          Featured Products
        </h2>
        <p className="text-[var(--sub-text)] text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of premium products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white overflow-hidden">
            <div className="relative">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => handleToggleFavorite(product.id, product.name)}
                className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
                  isFavorite(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
              </button>
              
              {product.stock < 20 && (
                <div className="absolute top-3 left-3 bg-[var(--warn)] text-white px-2 py-1 rounded-full text-xs font-medium">
                  Low Stock
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--main)] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--sub-text)] mt-1 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? 'text-[var(--star)] fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--sub-text)]">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-[var(--main)]">
                  ${product.price}
                </div>
                <div className="text-sm text-[var(--sub-text)]">
                  {product.stock} in stock
                </div>
              </div>

              <Button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90 text-white transition-all duration-300"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;