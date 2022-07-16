import styled from 'styled-components'
import { ShareAndLike } from '../ShareAndLike'

export const CarouselSkeleton = () => {
  return (
    <StyledCarouselSkeleton>
      <ShareAndLike />
      <StyledReactCarousel />
    </StyledCarouselSkeleton>
  )
}

const StyledCarouselSkeleton = styled.div`
  position: relative;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 0.5rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 3rem 2rem 0;
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

const StyledReactCarousel = styled.div`
  width: 100%;
  height: 400px;
  animation: skeleton-loading 1s linear infinite alternate;

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: none;
  }
`
