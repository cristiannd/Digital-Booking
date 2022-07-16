import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useContext } from 'react'
import { DetailsContext } from 'context/DetailsContext'
import { Facebook, Instagram, LinkedIn, StyledPopupSocialMedia, Twitter } from './styles'

export const PopupSocialMedia = ({ popupActived, setPopupActived }) => {
  const { accommodation } = useContext(DetailsContext)

  if (!accommodation) return <div></div>

  const { name, categoryDTO } = accommodation

  return (
    <StyledPopupSocialMedia
      onBlur={() => setPopupActived(false)}
      tabIndex='0'
      popupActived={popupActived}
    >
      <Facebook>
        <BsFacebook />
      </Facebook>
      <Twitter
        href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${name}&via=digitalbooking&hashtags=${categoryDTO.singularTitle}`}
        data-show-count='false'
        data-lang='es'
        target='_blank'
        rel='noreferrer'
      >
        <BsTwitter />
      </Twitter>
      <Instagram>
        <AiOutlineInstagram />
      </Instagram>
      <LinkedIn>
        <FaLinkedinIn />
      </LinkedIn>
    </StyledPopupSocialMedia>
  )
}
