import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem } from './supabase'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: Product, quantity = 1) => {
        const items = get().items
        const existingItem = items.find(item => item.product_id === product.id)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.product_id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          })
        } else {
          const newItem: CartItem = {
            id: Math.random().toString(36).substr(2, 9),
            user_id: '',
            product_id: product.id,
            quantity,
            created_at: new Date().toISOString(),
            product
          }
          set({ items: [...items, newItem] })
        }
      },
      removeItem: (productId: string) => {
        set({
          items: get().items.filter(item => item.product_id !== productId)
        })
      },
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set({
          items: get().items.map(item =>
            item.product_id === productId
              ? { ...item, quantity }
              : item
          )
        })
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          return total + (item.product?.price || 0) * item.quantity
        }, 0)
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)

interface FavoriteStore {
  favorites: string[]
  addFavorite: (productId: string) => void
  removeFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
  clearFavorites: () => void
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (productId: string) => {
        const favorites = get().favorites
        if (!favorites.includes(productId)) {
          set({ favorites: [...favorites, productId] })
        }
      },
      removeFavorite: (productId: string) => {
        set({
          favorites: get().favorites.filter(id => id !== productId)
        })
      },
      isFavorite: (productId: string) => {
        return get().favorites.includes(productId)
      },
      clearFavorites: () => set({ favorites: [] })
    }),
    {
      name: 'favorites-storage'
    }
  )
)