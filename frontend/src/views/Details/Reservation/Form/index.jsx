import { useState, useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'context/UserContext'
import { UserData } from 'views/Details/Reservation/Form/UserData'
import { ArrivalSchedule } from 'views/Details/Reservation/Form/ArrivalSchedule'
import { AccommodationCard } from 'views/Details/Reservation/Form/AccommodationCard'
import { Subtitle } from 'components/Subtitle'
import { createReservation } from 'services/reservation'
import { Calendar } from 'views/Details/Accommodation/components/Calendar'

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

const StyledForm = styled.form`
  margin-bottom: 2rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }
  }
`

const CalendarContainer = styled.div`
  background-color: #fff;
  padding: 0.5rem 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #0000002d;
`
