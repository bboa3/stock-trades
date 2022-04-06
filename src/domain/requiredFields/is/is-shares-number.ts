export const isSharesNumber = (value: any) => {
  if (Number(value) >= 10 && Number(value) <= 30) {
    return true
  }

  return false
}
