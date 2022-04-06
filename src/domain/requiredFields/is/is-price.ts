export const isPrice = (value: any) => {
  if (Number(value) >= 130.42 && Number(value) <= 195.65) {
    return true
  }

  return false
}
