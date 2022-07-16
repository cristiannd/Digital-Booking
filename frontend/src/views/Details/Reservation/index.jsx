import styled from 'styled-components'
import { Subtitle } from 'components/Subtitle'
import { Divider } from 'components/Divider'
import { TermsAndConditions } from 'components/TermsAndConditions'
import { useOutletContext } from 'react-router-dom'
import { Form } from './components/Form'

export const Reservation = () => {
  const { accommodation, date, setDate } = useOutletContext()

  return (
    <StyledReservation>
      <Form accommodation={accommodation} date={date} setDate={setDate} />
      <Subtitle background='white' view='accommodation'>
        Qué tenés que saber
      </Subtitle>
      <Divider lineColor='orange' />
      <TermsAndConditions accommodation={accommodation} />
    </StyledReservation>
  )
}

const StyledReservation = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGrey};

  & > form {
    padding: 0 0.5rem;

    @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
      padding: 0 2rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
      padding: 0 10rem;
    }
  }
`
