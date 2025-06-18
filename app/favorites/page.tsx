"use client";
import React from 'react';
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { useCartStore, useFavoriteStore, Product } from '@/lib/store';
import Link from 'next/link';
import toast from 'react-hot-toast';

// Mock products data (in a real app, this would come from your database)
const allProducts: Product[] = [
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

const FavoritesPage = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavoriteStore();
  const addItem = useCartStore((state) => state.addItem);

  // Get favorite products
  const favoriteProducts = allProducts.filter(product => favorites.includes(product.id));

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFavorite = (productId: string, productName: string) => {
    removeFavorite(productId);
    toast.success(`${productName} removed from favorites`);
  };

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <Container className="py-16">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 bg-[var(--main)]/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-16 h-16 text-[var(--main)]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text)] mb-4">
                No Favorites Yet
              </h1>
              <p className="text-[var(--sub-text)] text-lg mb-8">
                Start adding products to your favorites to see them here.
              </p>
              <Link href="/shop">
                <Button className="bg-[var(--main)] hover:bg-[var(--main)]/90 text-white px-8 py-3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Browse Products
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
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              My Favorites
            </h1>
            <p className="text-[var(--sub-text)] text-lg">
              {favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} in your favorites
            </p>
          </div>
          
          {favoriteProducts.length > 0 && (
            <Button
              onClick={clearFavorites}
              variant="outline"
              className="text-red-500 border-red-500 hover:bg-red-50"
            >
              Clear All Favorites
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favoriteProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white overflow-hidden">
              <div className="relative">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => handleRemoveFavorite(product.id, product.name)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white transition-all duration-300 hover:bg-red-600"
                >
                  <Heart className="w-4 h-4 fill-current" />
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

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button variant="outline" className="border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white px-8 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FavoritesPage;