import useWindowDimensions from 'hooks/useWindowDimensions'
import { StyledCalendar } from './styles'

export const Calendar = ({ date, setDate, accommodation }) => {
  const { width } = useWindowDimensions()

  if (!accommodation) return <div>Loading...</div>

  const { reservationDTOList } = accommodation

  const formatDate = e => {
    const day = e.getDate() < 10 ? '0' + e.getDate() : e.getDate()
    const month = e.getMonth() < 10 ? '0' + (e.getMonth() + 1) : e.getMonth() + 1
    const year = e.getFullYear()

    return [year, month, day].join('-')
  }

  const tileDisabledHandler = (date, view) => {
    if (view === 'month') {
      return reservationDTOList.some(e => e === formatDate(date))
    }
  }

  const tileDisabledClassName = (date, view) => {
    if (view === 'month') {
      const reservedDate = reservationDTOList.find(e => e === formatDate(date))
      if (reservedDate) return 'disabled-day'
    }
  }

  return (
    <StyledCalendar
      value={date}
      onChange={value => setDate(value)}
      calendarType='US'
      locale='es-ES'
      minDate={new Date(Date.now())}
      next2Label={null}
      prev2Label={null}
      showDoubleView={width >= 768 ? true : false}
      showFixedNumberOfWeeks={false}
      showNeighboringMonth={false}
      selectRange={true}
      allowPartialRange={false}
      formatShortWeekday={(locale, date) =>
        date.toLocaleDateString('es-es', { weekday: 'short' })[0]
      }
      formatMonthYear={(locale, date) => date.toLocaleDateString('es-es', { month: 'long' })}
      tileDisabled={({ date, view }) => tileDisabledHandler(date, view)}
      tileClassName={({ date, view }) => tileDisabledClassName(date, view)}
    />
  )
}
