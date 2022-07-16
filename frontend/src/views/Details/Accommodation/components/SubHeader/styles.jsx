import styled from 'styled-components'

const StyledSubHeader = styled.section`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 0.5rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 0.5rem 10rem;
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  div {
    padding-top: 2.5px;

    svg {
      font-size: 1.2rem;
    }
  }

  p {
    padding-left: 0.5rem;
  }
`

const Rating = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  div {
    text-align: center;
  }
`

export { StyledSubHeader, Location, Rating }
