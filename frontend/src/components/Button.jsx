import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonFilled = ({ children, onClick, type }) => {
  return (
    <ButtonFilledStyled type={type} onClick={onClick}>
      {children}
    </ButtonFilledStyled>
  )
}

const ButtonFilledStyled = styled.button`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: 100%;

  :hover {
    box-shadow: 0 0 5px 0px #00000071;
    transform: scale(1.01);
  }
`

export const LinkFilled = ({ children, to }) => {
  return <LinkFilledStyled to={to}>{children}</LinkFilledStyled>
}

const LinkFilledStyled = styled(Link)`
  display: grid;
  place-content: center;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: 100%;
  transition: 0.25s ease;

  :hover {
    box-shadow: 0 0 5px 0px #00000071;
    transform: scale(1.01);
  }
`
