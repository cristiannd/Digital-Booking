import styled from 'styled-components'

export const LocationSkeleton = () => {
  return (
    <StyledLocationSkeleton>
      <Description>
        <div></div>
        <div></div>
        <div></div>
      </Description>
      <MapContainer />
    </StyledLocationSkeleton>
  )
}

const StyledLocationSkeleton = styled.section`
  padding: 1rem 0.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
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

const Description = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;
  
  & > div {
    width: 5rem;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`

const MapContainer = styled.div`
  height: 400px;
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 1rem;
`
