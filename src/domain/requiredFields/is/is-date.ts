export const isDate = (value: string) => {
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

  if (value.match(dateRegex)) {
    return true
  }

  return false
}
