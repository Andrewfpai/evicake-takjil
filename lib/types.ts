import { StaticImageData } from "next/image"

export type CartItem = {
  id: number
  name: string
  price: number
  qty: number
}

export type Product = {
  id: number
  name: string
  price: number
  image: StaticImageData
}

export type ConfirmCardProps = {
  header: string
  body: string
  onClose: () => void
}