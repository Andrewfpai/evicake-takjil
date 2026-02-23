"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import Cart from "@/components/Cart"
import { snackBox, snackKue } from "@/lib/product"
import { CartItem } from "@/lib/types"

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [tab, setTab] = useState(1);

  const tabs = [
    { id: 1, label: "Snack Box (Isi 2)" },
    { id: 2, label: "Snack & Kue" },
  ];

  const selectedProducts = tab === 1 ? snackBox : snackKue

  const handleAdd = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(p => p.id === item.id)

      if (existing) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, qty: p.qty + item.qty }
            : p
        )
      }

      return [...prev, item]
    })
  }

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="min-h-screen bg-t-white p-6 pb-32">
      <h1 className="text-3xl font-bold text-t-black text-center mb-8">
        Menu Takjil Ramadhan
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-6">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-full font-semibold transition ${tab === t.id ? 'bg-t-accent text-white ' : 'bg-transparent border border-gray-400 text-gray-400'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {selectedProducts.map((product) => (
          <ProductCard
            key={`${tab}-${product.id}`}
            product={product}
            onAdd={handleAdd}
          />
        ))}
      </div>
      
      <Cart
        cart={cart}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  )
}