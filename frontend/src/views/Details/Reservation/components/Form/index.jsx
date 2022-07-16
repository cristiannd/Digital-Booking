import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'context/UserContext'
import { UserData } from 'views/Details/Reservation/components/UserData'
import { ArrivalSchedule } from 'views/Details/Reservation/components/ArrivalSchedule'
import { AccommodationCard } from 'views/Details/Reservation/components/AccommodationCard'
import { Calendar } from 'views/Details/Accommodation/components/Calendar'
import { Subtitle } from 'components/Subtitle'
import { createReservation } from 'services/reservation'
import { CalendarContainer, StyledForm } from './styles'

export const Form = ({ accommodation, date, setDate }) => {
  const [checkIn, setCheckIn] = useState(undefined)
  const { loggedUser } = useContext(UserContext)

  const navigate = useNavigate()

  const formHandler = async event => {
    event.preventDefault()

    if (!loggedUser || !accommodation || !date || !checkIn) return

    const reservation = await createReservation(
      loggedUser.id,
      accommodation.id,
      date,
      checkIn,
      loggedUser.jwt
    )

    if (reservation) return navigate('/successful-booking')
  }

  return (
    <StyledForm onSubmit={formHandler}>
      <Subtitle view='reservation'>Completá tus datos</Subtitle>
      <div>
        <div>
          <UserData />
          <Subtitle view='reservation'>Seleccioná tu fecha de reserva</Subtitle>
          <CalendarContainer>
            <Calendar date={date} setDate={setDate} accommodation={accommodation} />
          </CalendarContainer>
          <Subtitle view='reservation'>Tu horario de llegada</Subtitle>
          <ArrivalSchedule checkIn={checkIn} setCheckIn={setCheckIn} />
        </div>
        <AccommodationCard accommodation={accommodation} date={date} />
      </div>
    </StyledForm>
  )
}
