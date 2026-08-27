export type FuelType = "Gasoline" | "Diesel" | "Hybrid" | "Electric"
export type Transmission = "Automatic" | "Manual" | "CVT"
export type BodyType = "Sedan" | "SUV" | "Hatchback" | "Pickup" | "MPV" | "Coupe"

export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: FuelType
  transmission: Transmission
  body: BodyType
  location: string
  image: string
  seats: number
  rating: number
  featured?: boolean
}

export interface InquiryForm {
  fullName: string
  email: string
  phone: string
  preferredDate: string
  contactMethod: "Email" | "Phone" | "SMS"
  message: string
}
