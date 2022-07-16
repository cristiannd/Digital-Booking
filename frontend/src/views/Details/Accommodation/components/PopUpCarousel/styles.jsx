import styled from 'styled-components'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

const StyledPopupCarousel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000ca;
  z-index: 2;
  display: ${({ viewMoreGallery }) => (viewMoreGallery ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

const Carousel = styled(ReactCarousel)`
  position: relative;
  width: 50%;
  height: 50vh;

  div {
    height: 400px;
  }

  .carousel-slider {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 1rem 1rem 0 0;
    }
  }

  .thumbs-wrapper {
    margin: 0;
    padding-top: 2rem;
    background-color: #fff;
    height: 200px;
    border-radius: 0 0 1rem 1rem;
  }

  .thumbs {
    flex-wrap: nowrap;
    overflow-x: scroll;
    display: grid;
    grid-template-columns: repeat(${({ length }) => length}, 1fr);
    padding: 0 0.5rem;

    ::-webkit-scrollbar {
      height: 1rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .thumb {
    border: none;
    height: 125px;
    cursor: pointer;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  .carousel-status {
    font-size: 1rem;
    right: 5px;
  }

  .thumb.selected,
  .thumb:hover {
    border: 2px solid black;
    border-radius: 1rem;
    padding: 0px;
  }

  .control-arrow.control-next,
  .control-arrow.control-prev {
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 0.5;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    top: 50%;
    margin: 0 10px;

    :hover {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.grey};
      transform: scale(1.1);
    }
  }
`

const IconClose = styled.button`
  display: grid;
  place-content: center;
  position: absolute;
  top: 26vh;
  left: 25.5vw;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  opacity: 0.5;
  transition: 0.25s ease;

  svg {
    font-size: 2rem;
    color: #fff;
  }

  :hover {
    transform: scale(1.1);
    opacity: 1;
  }
`
export { StyledPopupCarousel, Carousel, IconClose }
