import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  stock: number
  featured: boolean
  created_at: string
  updated_at: string
  rating?: number
  reviews?: number
}

export interface CartItem {
  id: string
  product_id: string
  quantity: number
  created_at: string
  product?: Product
}

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

interface UserStore {
  user: {
    name: string
    email: string
    phone?: string
    address?: string
  } | null
  setUser: (user: { name: string; email: string; phone?: string; address?: string }) => void
  clearUser: () => void
  isLoggedIn: () => boolean
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      isLoggedIn: () => get().user !== null
    }),
    {
      name: 'user-storage'
    }
  )
)