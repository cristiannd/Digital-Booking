import { ButtonFilled } from 'components/Button'
import styled from 'styled-components'

export const CardAccommodationSkeleton = () => {
  return (
    <StyledCardAccommodationSkeleton>
      <ImageContainer />
      <AccommodationContainer>
        <Header>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </Header>
        <Body>
          <div></div>
          <div></div>
        </Body>
        <Footer>
          <div></div>
          <div></div>
          <div></div>
          <ButtonFilled>Ver más</ButtonFilled>
        </Footer>
      </AccommodationContainer>
    </StyledCardAccommodationSkeleton>
  )
}

const StyledCardAccommodationSkeleton = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #00000060;
  height: 500px;
  background-color: #fff;

  display: grid;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);

    height: 250px;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    height: 300px;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`

const ImageContainer = styled.div`
  height: 250px;
  border-radius: 10px 10px 0px 0px;
  animation: skeleton-loading 1s linear infinite alternate;
  
  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    display: flex;
    border-radius: 10px 0px 0px 10px;
  }
  
  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    height: 300px;
  }
`

const AccommodationContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Header = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:nth-child(1) {
      height: 1rem;
      width: 10rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    & > div:nth-child(2) {
      height: 1.5rem;
      width: 8rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }

  & > div:nth-child(2) {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.7rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.25rem;

  & > div:nth-child(1) {
    width: 15rem;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  & > div:nth-child(2) {
    width: 8rem;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`

const Footer = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > div:nth-child(1),
  div:nth-child(2) {
    width: 100%;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  & > div:nth-child(3) {
    width: 75%;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`
