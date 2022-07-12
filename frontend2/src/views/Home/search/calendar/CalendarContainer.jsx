import styled from 'styled-components'
import { CalendarStyled } from './CalendarStyled'

export const CalendarContainer = ({
  calendarActived,
  setCalendarActived,
  date,
  setDate,
  dateSelectedHandler,
}) => {
  const handleSubmitCalendar = (event) => {
    event.preventDefault()
    setCalendarActived(false)
    dateSelectedHandler()
  }

  return (
    <CalendarContainerStyled calendarActived={calendarActived}>
      <CalendarStyled date={date} setDate={setDate} />
      <ButtonStyled onClick={handleSubmitCalendar}>Aplicar</ButtonStyled>
    </CalendarContainerStyled>
  )
}

const CalendarContainerStyled = styled.div`
  position: absolute;
  top: 43px;
  display: ${(props) => (props.calendarActived ? 'block' : 'none')};
  max-width: 500px;
  padding: 25px 35px;
  box-shadow: 0px 4px 4px #00000045;
  background-color: #fff;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    min-width: 550px;
    max-width: 700px;
    right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: ${(props) => (props.calendarActived ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    width: 700px;
    left: 0px;
  }
`

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.orange};
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  height: 40px;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    width: 33%;
  }
`
