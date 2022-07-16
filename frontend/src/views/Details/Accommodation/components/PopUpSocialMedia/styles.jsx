import styled from 'styled-components'

const StyledPopupSocialMedia = styled.div`
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
        color: ${props => props.theme.colors.orange};
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
  color: #c13584;

  &:visited {
    color: #c13584;
  }
`

export { StyledPopupSocialMedia, Facebook, Twitter, Instagram, LinkedIn }
