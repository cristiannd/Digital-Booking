import styled from 'styled-components'

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

export { StyledForm, CalendarContainer }
