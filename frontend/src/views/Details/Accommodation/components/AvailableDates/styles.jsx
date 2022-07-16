import styled from 'styled-components'

const Reservation = styled.div`
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 14px;
    font-weight: 700;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding: 2rem 10rem;
  }
`

const CalendarContainer = styled.div`
  box-shadow: 0 2px 5px 0 #0000003d;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
  max-width: 400px;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    width: 100%;
    max-width: 800px;
    margin: 1rem auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    max-width: 100%;
  }
`

const ReservationFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
    align-items: center;
    height: fit-content;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 #0000003d;
    padding: 1rem;
  }
`

export { Reservation, CalendarContainer, ReservationFooter }
