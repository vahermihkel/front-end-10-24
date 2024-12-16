
export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating,
  stock: number,
  active: boolean
}

type Rating = {
  rate: number
  count: number
}