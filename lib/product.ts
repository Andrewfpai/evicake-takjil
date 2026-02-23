import { StaticImageData } from "next/image"
import ilusSmokebeef from "@/assets/ilus-smokebeef.jpg"
import ilusRogurt from "@/assets/ilus-rogurt.jpg"
import ilusKroket from "@/assets/ilus-kroket.jpg"
import ilusSosisSolo from "@/assets/ilus-sosisSolo.jpg"
import ilusLemper from "@/assets/ilus-lemper.jpg"
import ilusSus from "@/assets/ilus-sus.jpg"
import ilusSushi from "@/assets/ilus-sushi.jpg"

import ilusBoluKukus from "@/assets/ilus-boluKukus.jpg"
import ilusBrowniesKeju from "@/assets/ilus-browniesKeju.jpg"
import ilusBrowniesPanggang from "@/assets/ilus-browniesPanggang.png" 
import ilusKetanSrikaya from "@/assets/ilus-ketanSrikaya.jpg"
import ilusSingkongThailand from "@/assets/ilus-singkongThailand.jpg"
import ilusKolak from "@/assets/ilus-kolak.png"
import ilusLupis from "@/assets/ilus-lupis.png"
// import ilusSerabi from "@/assets/ilus-serabi.png"
import ilusPastel from "@/assets/ilus-pastel.png"
import ilusLontongOncom from "@/assets/ilus-lontongOncom.jpg"
import ilusLontongKentangWortel from "@/assets/ilus-lontongKentangWortel.jpg" 
import ilusSerabi from "@/assets/ilus-serabi.jpg"

import { Product } from "./types"

export const snackBox: Product[] = [
  {
    id: 1,
    name: "Smoke Beef",
    price: 10000,
    image: ilusSmokebeef,
  },
  {
    id: 2,
    name: "Rogurt",
    price: 10000,
    image: ilusRogurt,
  },
  {
    id: 3,
    name: "Kroket",
    price: 10000,
    image: ilusKroket,
  },
  {
    id: 4,
    name: "Sosis Solo",
    price: 10000,
    image: ilusSosisSolo,
  },
  {
    id: 5,
    name: "Lemper",
    price: 10000,
    image: ilusLemper,
  },
  {
    id: 6,
    name: "Soes",
    price: 10000,
    image: ilusSus,
  },
  {
    id: 7,
    name: "Sushi",
    price: 10000,
    image: ilusSushi,
  },
]

export const snackKue: Product[] = [
  {
    id: 1,
    name: "Bolu Kukus",
    price: 3000,
    image: ilusBoluKukus,
  },
  {
    id: 2,
    name: "Brownies Keju",
    price: 5000,
    image: ilusBrowniesKeju,
  },
  {
    id: 3,
    name: "Brownies Panggang",
    price: 8000,
    image: ilusBrowniesPanggang,
  },
  {
    id: 4,
    name: "Ketan Srikaya",
    price: 10000,
    image: ilusKetanSrikaya,
  },
  {
    id: 5,
    name: "Singkong Thailand",
    price: 9000,
    image: ilusSingkongThailand,
  },
  {
    id: 6,
    name: "Kolak",
    price: 9000,
    image: ilusKolak,
  },
  {
    id: 7,
    name: "Lupis",
    price: 7000,
    image: ilusLupis,
  },
  {
    id: 8,
    name: "Serabi",
    price: 8000,
    image: ilusSerabi,
  },
  {
    id: 9,
    name: "Pastel",
    price: 4000,
    image: ilusPastel,
  },
  {
    id: 10,
    name: "Lontong Oncom",
    price: 3000,
    image: ilusLontongOncom,
  },
  {
    id: 11,
    name: "Lontong Kentang Wortel",
    price: 3000,
    image: ilusLontongKentangWortel,
  },
]

