import { useState } from 'react'
import { ShareAndLike } from '../ShareAndLike'
import { GallerySkeleton } from './GallerySkeleton'
import { PopupCarousel } from '../PopUpCarousel'
import { StyledGallery, ViewMoreContainer } from './styles'

export const Gallery = ({ accommodation }) => {
  const [viewMoreGallery, setViewMoreGallery] = useState(false)

  if (!accommodation) return <GallerySkeleton />

  const { imageDTOSet } = accommodation

  return (
    <>
      <ShareAndLike />
      <StyledGallery>
        {imageDTOSet
          .filter((image, index) => index < 5)
          .map((image, index) => {
            if (index === 4)
              return (
                <ViewMoreContainer key={image.id}>
                  <button onClick={() => setViewMoreGallery(true)}>Ver más</button>
                  <img src={image.url} alt={image.title} />
                </ViewMoreContainer>
              )
            return <img key={image.id} src={image.url} alt={image.title} />
          })}
        <PopupCarousel
          viewMoreGallery={viewMoreGallery}
          setViewMoreGallery={setViewMoreGallery}
          imageDTOSet={imageDTOSet}
        />
      </StyledGallery>
    </>
  )
}
