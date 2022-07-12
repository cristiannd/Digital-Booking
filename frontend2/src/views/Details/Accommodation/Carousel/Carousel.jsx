import styled from 'styled-components'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { ShareAndLike } from '../ShareAndLike/ShareAndLike'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarouselSkeleton } from './CarouselSkeleton'

export const Carousel = ({ accommodation }) => {
  if (!accommodation) return <CarouselSkeleton />

  const { imageDTOSet } = accommodation

  return (
    <StyledCarousel>
      <ShareAndLike />
      <StyledReactCarousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={3000}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
      >
        {imageDTOSet.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </StyledReactCarousel>
    </StyledCarousel>
  )
}

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
