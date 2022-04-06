import dayjs from 'dayjs'

interface Dates {
  start: string
  end: string
  date: string
}

export const isBetweenDatesRange = (dates: Dates) => {
  const { start, end, date } = dates

  const starts = start.split('-')
  const ends = end.split('-')
  const tradeDates = date.split('-')

  const startDate = dayjs(new Date(Number(starts[0]), Number(starts[1]), Number(starts[2])))
  const endDate = dayjs(new Date(Number(ends[0]), Number(ends[1]), Number(ends[2])))
  const tradeDate = dayjs(new Date(Number(tradeDates[0]), Number(tradeDates[1]), Number(tradeDates[2])))

  const isBeforeStartDate = tradeDate.isBefore(startDate)
  const isAfterEndDate = tradeDate.isAfter(endDate)

  return !isBeforeStartDate && !isAfterEndDate
}
