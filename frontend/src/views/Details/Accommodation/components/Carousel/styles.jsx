import styled from 'styled-components'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

const StyledCarousel = styled.div`
  position: relative;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 0.5rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 3rem 2rem 0;
  }
`

const StyledReactCarousel = styled(ReactCarousel)`
  .carousel {
    position: relative;
  }

  .carousel-status {
    font-size: 1rem;
    font-weight: 700;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: flex-end;
  }

  div {
    height: 400px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: none;
  }
`

export { StyledCarousel, StyledReactCarousel }
