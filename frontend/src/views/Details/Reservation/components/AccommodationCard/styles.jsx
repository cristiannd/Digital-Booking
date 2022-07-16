import styled from 'styled-components'

const StyledAccommodationCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #0000002d;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    display: grid;
    height: 100%;

    /* prettier-ignore */
    @media screen
    and (min-width: ${({ theme }) => theme.viewport.tablet})
    and (max-width: ${({ theme }) => theme.viewport.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem;
      gap: 0.5rem;
    }

    & > img {
      width: 100%;
      height: 300px;
      object-fit: cover;

      @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
        border-radius: 5px;
      }

      @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
        border-radius: 0px;
      }
    }

    & > div {
      display: grid;
      padding: 1rem 0.5rem;

      /* prettier-ignore */
      @media screen
      and (min-width: ${({ theme }) => theme.viewport.tablet})
      and (max-width: ${({ theme }) => theme.viewport.desktop}) {
        padding: 0 0.5rem;
      }

      & > h3 {
        font-size: 14px;
        text-transform: uppercase;
      }

      & > h2 {
        font-size: 1.5rem;
        padding-bottom: 5px;
      }

      & > button {
        margin-top: 1rem;
      }
    }
  }
`

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0.5rem;
`

const Location = styled.div`
  display: flex;
  padding: 0.5rem 0;

  & > span {
    padding-right: 5px;
    & > svg {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & > span {
    font-weight: 700;
  }
`

export { StyledAccommodationCard, Subtitle, Location, Check }
