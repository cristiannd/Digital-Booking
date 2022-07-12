import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useWindowDimensions from 'hooks/useWindowDimensions'
import UserContext from 'context/LoggedUserContext'
import { Drawer } from './Drawer/Drawer'
import { UserLoggedTabletAndDesktop } from 'views/Main/Header/userLogged/UserLoggedTabletAndDesktop'
import logo from 'assets/images/logo.svg'
import { IoMenuOutline } from 'react-icons/io5'
import { UserLocalStorage } from 'services/localStorage'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const { loggedUser, setLoggedUser } = useContext(UserContext)

  const location = useLocation()
  const navigate = useNavigate()

  const singOutHandler = () => {
    setLoggedUser(null)
    setShowMenu(false)
    UserLocalStorage.remove()

    navigate('/')
  }

  const navigateToProfileHandler = () => {
    setShowMenu(false)
    navigate('/profile')
  }

  const navigateHandler = path => {
    navigate(path, { state: location.state })
  }

  return (
    <HeaderStyled>
      <LinkStyled to='/'>
        <Logo src={logo} alt='logo de Digital Booking' />
        {useWindowDimensions().width >= 1366 && <Slogan>Sentite como en tu hogar</Slogan>}
      </LinkStyled>

      {useWindowDimensions().width < 768 ? (
        <>
          <BurgerMenuButton onClick={() => setShowMenu(true)}>
            <IoMenuOutline />
          </BurgerMenuButton>
          <Drawer
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            singOutHandler={singOutHandler}
            navigateToProfileHandler={navigateToProfileHandler}
          />
        </>
      ) : loggedUser === null ? (
        <div>
          {location.pathname === '/login' ? (
            <AnchorChangeDirection onClick={() => navigateHandler('/register')}>
              Crear cuenta
            </AnchorChangeDirection>
          ) : location.pathname === '/register' ? (
            <AnchorChangeDirection onClick={() => navigateHandler('/login')}>
              Iniciar sesión
            </AnchorChangeDirection>
          ) : (
            <>
              <AnchorChangeDirection onClick={() => navigateHandler('/register')}>
                Crear cuenta
              </AnchorChangeDirection>
              <AnchorChangeDirection onClick={() => navigateHandler('/login')}>
                Iniciar sesión
              </AnchorChangeDirection>
            </>
          )}
        </div>
      ) : (
        <UserLoggedTabletAndDesktop
          singOutHandler={singOutHandler}
          navigateToProfileHandler={navigateToProfileHandler}
        />
      )}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  top: 0;
  position: sticky;
  background-color: #fff;
  box-shadow: 0px 2px 5px #00000071;
  z-index: 3;
  overflow-x: hidden;
  padding: 0px 30px;
`

const Logo = styled.img`
  width: 68px;
  height: 50px;
`

const Slogan = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 5px;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
`

const BurgerMenuButton = styled.button`
  color: ${props => props.theme.colors.orange};
  background-color: #fff;
  border: none;
  display: flex;
  cursor: pointer;
  margin-right: 15px;

  svg {
    font-size: 2.5rem;
  }
`

const AnchorChangeDirection = styled.button`
  padding: 10px 35px;
  margin-left: 15px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 16px;
  font-weight: 700;
  transition: 0.4s ease;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: #fff;
  }
`
