import styled from 'styled-components'
import { BiShareAlt, BiHeart } from 'react-icons/bi'
import { useState } from 'react'
import { PopupSocialMedia } from './PopupSocialMedia'

export const ShareAndLike = () => {
  const [popupActived, setPopupActived] = useState(false)

  return (
    <StyledShareAndLike>
      <button onClick={() => setPopupActived(!popupActived)}>
        <BiShareAlt />
        <PopupSocialMedia
        popupActived={popupActived}
        setPopupActived={setPopupActived}
      />
      </button>
      <button>
        <BiHeart />
      </button>

    </StyledShareAndLike>
  )
}

const StyledShareAndLike = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  font-size: 1rem;
  filter: drop-shadow(0 0 3px #0000006c);
  
  button {
    background-color: transparent;
    border: none;
    position: relative;
    
    & > svg {
      color: #fff;
      font-size: 2rem;
      margin-right: 1rem;
      transition: .25s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
        transform: scale(1.1);
      }

      @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    position: relative;
    left: 0;
    top: 0;
    padding: .5rem 2rem;
    filter: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: .5rem 10rem;
  }
`
