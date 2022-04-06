export const isStockSymbol = (value: any) => {
  const regex = /[A-Z]{2,4}/

  if (value.match(regex)) {
    return true
  }

  return false
}
