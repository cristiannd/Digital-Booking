import styled from 'styled-components'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useContext } from 'react'
import Context from 'context/DetailsContext'

export const PopupSocialMedia = ({ popupActived, setPopupActived }) => {
  const { accommodation } = useContext(Context)

  if (!accommodation) return <div></div>

  const { name, categoryDTO } = accommodation

  return (
    <PopupSocialMediaStyled
      onBlur={() => setPopupActived(false)}
      tabIndex="0"
      popupActived={popupActived}
    >
      <Facebook>
        <BsFacebook />
      </Facebook>
      <Twitter
        href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${name}&via=digitalbooking&hashtags=${categoryDTO.singularTitle}`}
        data-show-count="false"
        data-lang="es"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </Twitter>
      <Instagram>
        <AiOutlineInstagram />
      </Instagram>
      <LinkedIn>
        <FaLinkedinIn />
      </LinkedIn>
    </PopupSocialMediaStyled>
  )
}

const PopupSocialMediaStyled = styled.div`
  background-color: #fff;
  width: fit-content;
  position: absolute;
  top: 50px;
  left: -10px;
  z-index: 4;
  display: ${({ popupActived }) => (popupActived ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 #00000035;

  a {
    margin: 0.5rem 1rem;

    svg {
      font-size: 1.5rem;

      &:hover {
        color: ${(props) => props.theme.colors.orange};
      }
    }
  }
`

const Facebook = styled.a`
  color: #4267b2;

  &:visited {
    color: #4267b2;
  }
`

const Twitter = styled.a`
  color: #1da1f2;

  &:visited {
    color: #1da1f2;
  }
`

const Instagram = styled.a`
  color: #1da1f2;

  &:visited {
    color: #1da1f2;
  }
`

const LinkedIn = styled.a`
  color: #C13584;

  &:visited {
    color: #C13584;
  }
`
