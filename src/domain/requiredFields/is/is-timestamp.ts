export const isTimestamp = (value: string) => {
  const date = value.split(' ')

  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

  const isDate = date[0].match(dateRegex)
  const isTime = date[1].match(timeRegex)

  if (isDate && isTime) {
    return true
  }

  return false
}
