import styled from 'styled-components'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (
    <FooterStyle>
      <article>©2022 Digital Booking</article>
      {useWindowDimensions().width >= 768 && (
        <article>
          <a
            href="https://www.facebook.com/digitalhouseschool/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.linkedin.com/school/digitalhouseschool/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/_digitalhouse"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/_digitalhouse/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </article>
      )}
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.colors.orange};
  width: 100%;
  height: 58px;
  font-size: 14px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-weight: 700;

  article {
    display: flex;
    gap: 1.5rem;

    & > a {
      &:visited {
        color: #fff;
      }

      &:hover {
        color: #cecece;
      }

      & > svg {
        font-size: 1.5rem;
      }
    }
  }
`
