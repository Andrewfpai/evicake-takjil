"use client"

import { ConfirmCardProps } from "@/lib/types"
import { Check } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function ConfirmCard(params:ConfirmCardProps) {

  const header = params.header
  const body = params.body
  const onClose = params.onClose
  
  return (
    <div className="max-w-lg bg-white rounded-xl mx-auto font-poppins">
        <div className="flex flex-col text-center py-10 px-4 sm:px-12 space-y-8 min-w-full">

            <div className="flex flex-col gap-5">
                <div className="text-2xl font-bold text-primary text-t-black">{header}</div>
                <div className="text-sm whitespace-pre-line text-t-black">{body}</div>
            </div>

            <div>
                <button onClick={onClose} className="px-10 py-3 bg-t-accent border border-primary font-bold text-sm text-white rounded-lg cursor-pointer hover:bg-transparent hover:text-primary">Oke</button>
            </div>
        </div>
    </div>
  )
}
