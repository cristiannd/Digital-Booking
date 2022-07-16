import styled from 'styled-components'

const StyledArrivalSchedule = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #0000002d;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    padding-bottom: 1rem;

    span {
      svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }

    p {
      font-weight: 700;
      padding-left: 0.5rem;
    }
  }

  & > label {
    font-size: 14px;
    padding-bottom: 0.5rem;
  }

  & > select {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #0000002d;
    padding-left: 0.5rem;

    @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
      width: 50%;
    }
  }
`

export { StyledArrivalSchedule }
