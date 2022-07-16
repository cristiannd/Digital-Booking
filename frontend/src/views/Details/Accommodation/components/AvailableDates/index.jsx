import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from 'context/UserContext'
import { ButtonFilled } from 'components/Button'
import { Calendar } from '../Calendar'
import { AvailableDatesSkeleton } from './AvailableDatesSkeleton'
import { CalendarContainer, Reservation, ReservationFooter } from './styles'

export const AvailableDates = ({ date, setDate, accommodation }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loggedUser } = useContext(UserContext)

  const startReservationHandler = () => {
    if (loggedUser) navigate('reservation')
    else navigate('/login', { state: location.pathname })
  }

  if (!accommodation) return <AvailableDatesSkeleton />

  return (
    <Reservation>
      <CalendarContainer>
        <Calendar date={date} setDate={setDate} accommodation={accommodation} />
      </CalendarContainer>
      <ReservationFooter>
        <p>Agregá tus fechas de viaje para obtener precios exactos</p>
        <ButtonFilled onClick={startReservationHandler}>Iniciar reserva</ButtonFilled>
      </ReservationFooter>
    </Reservation>
  )
}
