import styled from 'styled-components'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserLoggedMobile } from 'views/Main/Header/userLogged/UserLoggedMobile'
import { UserLoggedMobileSignOut } from 'views/Main/Header/userLogged/UserLoggedMobileSignOut'
import { useContext } from 'react'
import UserContext from 'context/LoggedUserContext'

const ButtonToManagement = ({ loggedUser, location, navigateHandler }) => {
  if (loggedUser?.role !== 'ROLE_ADMIN') return
  if (location.pathname === '/management') return

  return (
    <AnchorChangeDirection onClick={() => navigateHandler('/management')}>
      Crear un alojamiento
    </AnchorChangeDirection>
  )
}

export const Drawer = ({ showMenu, setShowMenu, singOutHandler, navigateToProfileHandler }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { loggedUser } = useContext(UserContext)

  const navigateHandler = path => {
    navigate(path, { state: location.state })
    setShowMenu(false)
  }

  return (
    <StyledDrawer className={`${showMenu ? 'active' : ''}`}>
      <ClickToHiddenMenu onClick={() => setShowMenu(false)} />
      <MenuContainer className={showMenu ? 'active' : ''}>
        <MenuHeader>
          <button onClick={() => setShowMenu(false)}>
            <AiOutlineClose />
          </button>

          {loggedUser === null ? (
            <div className='menu'>MENÚ</div>
          ) : (
            <UserLoggedMobile navigateToProfileHandler={navigateToProfileHandler} />
          )}
        </MenuHeader>
        <MenuBody>
          <ButtonToManagement
            loggedUser={loggedUser}
            location={location}
            navigateHandler={navigateHandler}
          />
          {loggedUser === null &&
            (location.pathname === '/register' ? (
              <AnchorChangeDirection onClick={() => navigateHandler('login')}>
                Iniciar sesión
              </AnchorChangeDirection>
            ) : location.pathname === '/login' ? (
              <AnchorChangeDirection onClick={() => navigateHandler('register')}>
                Crear cuenta
              </AnchorChangeDirection>
            ) : (
              <>
                <AnchorChangeDirection onClick={() => navigateHandler('register')}>
                  Crear cuenta
                </AnchorChangeDirection>
                <AnchorChangeDirection onClick={() => navigateHandler('login')}>
                  Iniciar sesión
                </AnchorChangeDirection>
              </>
            ))}
        </MenuBody>
        {loggedUser !== null && <UserLoggedMobileSignOut singOutHandler={singOutHandler} />}
        <MenuFooter>
          <a href='https://www.facebook.com/digitalhouseschool/' target='_blank' rel='noreferrer'>
            <BsFacebook />
          </a>
          <a
            href='https://www.linkedin.com/school/digitalhouseschool/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </a>
          <a href='https://twitter.com/_digitalhouse' target='_blank' rel='noreferrer'>
            <BsTwitter />
          </a>
          <a href='https://www.instagram.com/_digitalhouse/' target='_blank' rel='noreferrer'>
            <AiOutlineInstagram />
          </a>
        </MenuFooter>
      </MenuContainer>
    </StyledDrawer>
  )
}

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  transition: 0.5s ease-in-out;
  background-color: transparent;

  &.active {
    background-color: #00000060;
    visibility: visible;
  }
`

const ClickToHiddenMenu = styled.div`
  height: 100vh;
  width: 25%;
`

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(1000px);
  transition: 0.5s ease-in-out;
  width: 75%;
  background-color: #fff;
  min-height: 100vh;

  &.active {
    transform: translateX(0px);
  }
`

const AnchorChangeDirection = styled.button`
  margin: 10px 0px 0px;
  padding: 10px 15px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  background-color: transparent;
  border: none;
`

const MenuHeader = styled.div`
  background-color: ${props => props.theme.colors.orange};
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  & > button {
    background-color: transparent;
    color: #fff;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;

    svg {
      font-size: 2.5rem;
    }
  }

  div.menu {
    text-align: end;
  }
`

const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: calc(100vh - 175px - 75px - 20px);
`

const MenuFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 75px;
  gap: 1.5rem;
  padding: 0 1rem;

  & > a {
    color: ${props => props.theme.colors.grey};

    &:visited {
      color: ${props => props.theme.colors.grey};
    }

    &:hover {
      color: ${props => props.theme.colors.orange};
    }

    & > svg {
      font-size: 1.5rem;
    }
  }
`
