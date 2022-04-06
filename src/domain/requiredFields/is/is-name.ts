export const isName = (value: string) => {
  if (!value || value.trim().length < 4 || value.trim().length > 100) {
    return false
  }

  return true
}
