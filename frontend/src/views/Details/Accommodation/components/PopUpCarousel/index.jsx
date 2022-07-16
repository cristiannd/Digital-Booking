import { AiOutlineClose } from 'react-icons/ai'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel, IconClose, StyledPopupCarousel } from './styles'

export const PopupCarousel = ({ viewMoreGallery, setViewMoreGallery, imageDTOSet }) => {
  return (
    <StyledPopupCarousel viewMoreGallery={viewMoreGallery}>
      <Carousel
        autoPlay={false}
        emulateTouch={false}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showThumbs={true}
        statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
        thumbWidth='175px'
        length={imageDTOSet.length}
      >
        {imageDTOSet.map(img => (
          <div key={img.id}>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </Carousel>
      <IconClose onClick={() => setViewMoreGallery(false)}>
        <AiOutlineClose />
      </IconClose>
    </StyledPopupCarousel>
  )
}
