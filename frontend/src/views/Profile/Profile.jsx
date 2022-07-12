import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import { getAUser } from 'services/user'
import UserContext from 'context/LoggedUserContext'
import { findReservationByUserId } from 'services/reservation'

export const Profile = () => {
  const [favoriteList, setFavoriteList] = useState([])
  const [reservationList, setReservationList] = useState([])
  const [pressedButton, setPressedButton] = useState(1)
  const { loggedUser, setLoggedUser } = useContext(UserContext)

  const navigate = useNavigate()

  const goToHandler = (to, buttonNum) => {
    setPressedButton(buttonNum)
    navigate(to)
  }

  const getAUserHandler = useCallback(
    async id => {
      if (!id) return

      const user = await getAUser(id)
      setLoggedUser(prevState => ({ ...prevState, favoriteList: user.favoriteList }))
      setFavoriteList(user.favoriteList)
    },
    [setLoggedUser, setFavoriteList]
  )

  const getReservationList = async id => {
    if (!id) return

    const response = await findReservationByUserId(id)
    setReservationList(response)
  }

  useEffect(() => {
    getAUserHandler(loggedUser?.id)
    getReservationList(loggedUser?.id)
  }, [getAUserHandler, loggedUser?.id])

  if (!loggedUser) return <span>Loading...</span>

  return (
    <StyledProfile>
      <div>
        <button
          onClick={() => goToHandler('', 1)}
          className={pressedButton === 1 ? 'btn-pressed' : undefined}
        >
          Mi perfil
        </button>
        <button
          onClick={() => goToHandler('reservations', 2)}
          className={pressedButton === 2 ? 'btn-pressed' : undefined}
        >
          Reservas
        </button>
        <button
          onClick={() => goToHandler('favorites', 3)}
          className={pressedButton === 3 ? 'btn-pressed' : undefined}
        >
          Favoritos
        </button>
      </div>
      <Outlet context={{ favoriteList, reservationList, loggedUser }} />
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 93px - 58px);

  & > div:first-child {
    display: flex;
    gap: 3px;

    & > button {
      width: 100%;
      height: 2.5rem;
      color: #fff;
      background-color: ${props => props.theme.colors.orange};
      border: none;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
      padding: 0.5rem;

      &:hover {
        background-color: ${props => props.theme.colors.grey};
      }

      &.btn-pressed {
        background-color: ${props => props.theme.colors.grey};
      }
    }
  }
`
