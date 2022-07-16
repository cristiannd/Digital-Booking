import { ShareAndLike } from '../ShareAndLike'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarouselSkeleton } from './CarouselSkeleton'
import { StyledCarousel, StyledReactCarousel } from './styles'

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
        {imageDTOSet.map(img => (
          <div key={img.id}>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </StyledReactCarousel>
    </StyledCarousel>
  )
}
