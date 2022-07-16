import { useContext } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from 'context/UserContext'
import { AiOutlineClose } from 'react-icons/ai'

const ButtonToManagement = ({ loggedUser, location }) => {
  if (loggedUser?.role !== 'ROLE_ADMIN') return
  if (location.pathname === '/management') return

  return <StyledLink to='/management'>Crear un alojamiento</StyledLink>
}

export const UserLoggedTabletAndDesktop = ({ singOutHandler, navigateToProfileHandler }) => {
  const { loggedUser } = useContext(UserContext)
  const location = useLocation()

  return (
    <>
      <UserLoggedTabletAndDesktopStyled>
        <ButtonToManagement loggedUser={loggedUser} location={location} />
        <CloseIcon onClick={singOutHandler}>
          <AiOutlineClose />
        </CloseIcon>
        <UserLogo onClick={navigateToProfileHandler}>
          {loggedUser.name[0]}
          {loggedUser.lastname[0]}
        </UserLogo>
        <p>
          Hola,{' '}
          <span>
            {loggedUser.name} {loggedUser.lastname}
          </span>
        </p>
      </UserLoggedTabletAndDesktopStyled>
    </>
  )
}

const UserLoggedTabletAndDesktopStyled = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    display: flex;
    flex-direction: column;
    font-weight: 700;

    span {
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`

const UserLogo = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  text-transform: uppercase;
  border: none;

  color: #fff;
  font-size: 20px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 #00000035;
  }
`

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }

  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`

const StyledLink = styled(Link)`
  display: grid;
  place-content: center;
  text-decoration: none;
  font-weight: 700;
  padding-right: 0.5rem;
  color: #000;
  border-right: 1px solid ${props => props.theme.colors.grey};

  :hover {
    color: ${props => props.theme.colors.orange};
  }
`
