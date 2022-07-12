import { useState } from 'react'
import styled from 'styled-components'
import { ShareAndLike } from '../ShareAndLike/ShareAndLike'
import { GallerySkeleton } from './GallerySkeleton'
import { PopupCarousel } from './PopupCarousel'

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
                  <button onClick={() => setViewMoreGallery(true)}>
                    Ver más
                  </button>
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

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  padding: 0 10rem;
  gap: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`

const ViewMoreContainer = styled.div`
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  & > button {
    position: absolute;
    width: 100%;
    height: 100%;
    font-weight: 700;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 0.5;
    border: none;
    border-radius: 5px;
    text-decoration: underline;
    transition: 0.25s ease;
    border-radius: 1rem;

    :hover {
      opacity: 0.8;
    }
  }
`
