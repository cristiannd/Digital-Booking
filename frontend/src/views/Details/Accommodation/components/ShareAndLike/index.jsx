import { useState } from 'react'
import { StyledShareAndLike } from './styles'
import { BiShareAlt, BiHeart } from 'react-icons/bi'
import { PopupSocialMedia } from '../PopUpSocialMedia'

export const ShareAndLike = () => {
  const [popupActived, setPopupActived] = useState(false)

  return (
    <StyledShareAndLike>
      <button onClick={() => setPopupActived(!popupActived)}>
        <BiShareAlt />
        <PopupSocialMedia popupActived={popupActived} setPopupActived={setPopupActived} />
      </button>
      <button>
        <BiHeart />
      </button>
    </StyledShareAndLike>
  )
}
