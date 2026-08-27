export const formatPHP = (n: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(n)

export const formatKm = (n: number) =>
  new Intl.NumberFormat("en-PH").format(n) + " km"
