export const isTradeType = (value: string) => {
  if (value.match('sell') || value.match('buy')) {
    return true
  }

  return false
}
