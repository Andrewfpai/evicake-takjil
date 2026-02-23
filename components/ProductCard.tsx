"use client"

import { Product } from "@/lib/types"
import { useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  product: Product
  onAdd: (item: {
    id: number
    name: string
    price: number
    qty: number
  }) => void
}

export default function ProductCard({ product, onAdd }: Props) {
  const [qty, setQty] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAdd = () => {
    if (qty === 0 || isAdding) return
    setIsAdding(true)
    onAdd({ ...product, qty })
    setQty(1)
    // show added state briefly
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="bg-white rounded-xl shadow-md  w-64 overflow-hidden flex flex-col">
    {/* Image - full bleed */}
    <Image
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover  border-t-black"
    />

    {/* Content area with padding */}
    <div className="p-4 flex flex-col gap-3">
        <div>
        <h3 className="text-xl font-semibold text-t-black">{product.name}</h3>
        <p className="text-gray-600 text-lg">
            Rp {product?.price?.toLocaleString("id-ID")}
        </p>
        </div>

        <div className="flex items-center text-white gap-4">
        <div className="flex items-center bg-[#1F1F1F] rounded-full px-2 py-1 gap-4">
            <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="w-8 h-8 text-2xl flex items-center justify-center "
            >
            -
            </button>

            <span>{qty}</span>

            <button
            onClick={() => setQty(q => q + 1)}
            className="w-8 h-8 text-2xl flex items-center justify-center "
            >
            +
            </button>
        </div>

        <button
            onClick={handleAdd}
            disabled={isAdding}
            aria-busy={isAdding}
            className={`w-32 h-9.5 rounded-md transition-transform transform active:scale-95 disabled:opacity-60 ${isAdding ? 'bg-[#7A9E7E] text-white scale-105' : 'bg-t-accent text-t-white hover:scale-105'}`}
        >
            {isAdding ? (
              <span className="flex items-center justify-center gap-2">
                <Check size={16} />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Tambah
              </span>
            )}
        </button>
        </div>
    </div>
    </div>
  )
}