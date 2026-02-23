"use client"

import { useState } from "react"
import { CartItem } from "@/lib/types"
import { Trash2, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react"
import ConfirmCard from "./ConfirmCard"

type Props = {
  cart: CartItem[]
  removeItem: (id: number) => void
  clearCart: () => void
}

export default function Cart({ cart, removeItem, clearCart }: Props) {
  const [customerName, setCustomerName] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0)

  const handleCheckout = () => {
    if (cart.length === 0) return
    if (!customerName.trim()) {
      setShowConfirm(true)
      return
    }

    const orderList = cart
      .map(item => {
        const subtotal = (item.price * item.qty).toLocaleString("id-ID")
        return `- ${item.name} x${item.qty} — Rp ${subtotal}`
      })
      .join("\n")

    const message = `Nama: ${customerName}

Pesanan:
${orderList}

Total: Rp ${total.toLocaleString("id-ID")}`

    const encoded = encodeURIComponent(message)

    const phoneNumber = "6285845489102"

    window.open(
      `https://wa.me/${phoneNumber}?text=${encoded}`,
      "_blank"
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
      
      {/* Header */}
      {/* <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold text-t-black text-lg">
          Keranjang Anda ({totalQty})
        </h2>

        {isOpen ? (
          <ChevronDown className="text-t-black" size={22} />
        ) : (
          <ChevronUp className="text-t-black" size={22} />
        )}
      </div> */}
      {!isOpen && (
      <div
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-t-black text-white px-5 py-3 rounded-full shadow-lg"
      >
        <span className="flex flex-row items-center gap-2">
            <ShoppingCart className="text-t-white" size={22} />
            <div> Keranjang Anda ({totalQty})  </div>
        </span>
       
      </div>
    )}

      {/* Body */}
      {isOpen && (
      <div
        className="fixed inset-0 bg-black/30 flex items-end justify-center p-4"
        onClick={() => setIsOpen(false)}
        >
        
        {/* Cart Modal */}
        <div
            className="bg-white w-[380px] max-h-[80vh] rounded-3xl shadow-2xl p-5 overflow-y-auto"
             onClick={(e) => e.stopPropagation()}
             >
          
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-t-black text-lg">
              Keranjang Anda
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500"
            >
              <ChevronDown size={22} />
            </button>
          </div>

          {/* Empty State */}
          {cart.length === 0 && (
            <p className="text-sm text-gray-500">
              Keranjang masih kosong nih.
            </p>
          )}

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2 text-t-black"
            >
              <div className="font-semibold">
                {item.name} {`(${item.qty})`}
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Bottom Section */}
          {cart.length > 0 && (
            <>
              <div className="mt-4 font-semibold text-right text-t-black">
                Total: Rp {total.toLocaleString("id-ID")}
              </div>

              <input
                type="text"
                placeholder="Masukkan nama"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="mt-3 w-full border rounded-lg px-3 py-2 text-t-black focus:outline-none focus:ring-2 focus:ring-t-accent"
              />

              <div className="mt-3 flex gap-2">
                <button
                  onClick={clearCart}
                  className="px-4 bg-red-500 text-white py-2 rounded-lg"
                >
                  Hapus Daftar
                </button>

                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-t-accent text-white py-2 rounded-lg font-semibold"
                >
                  Kirim Via WA
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )}

      {/* Confirm modal for missing name */}
      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
          onClick={() => setShowConfirm(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ConfirmCard
              header="Nama Belum Diisi"
              body="Maaf, silakan isi nama Anda sebelum mengirim pesanan ke WhatsApp."
              onClose={() => setShowConfirm(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}