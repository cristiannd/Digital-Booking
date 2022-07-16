import { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'
import { UserContext } from 'context/UserContext'
import { AiFillHeart } from 'react-icons/ai'
import { deleteFavoriteAccommodation, saveFavoriteAccommodation } from 'services/user'

export const CardAccommodation = ({ accommodation }) => {
  const { imageDTOSet, categoryDTO, name, id, description, score, featureDTOSet, locationDTO } =
    accommodation
  const { loggedUser, setLoggedUser } = useContext(UserContext)
  const navigate = useNavigate()
  const isFavorite = loggedUser?.favoriteList?.some(e => e.id === id)

  const favoriteHandler = async () => {
    if (!loggedUser) return navigate('/login')

    if (isFavorite) {
      const user = {
        ...loggedUser,
        favoriteList: loggedUser.favoriteList.filter(accommodation => accommodation.id !== id),
      }

      setLoggedUser(user)
      await deleteFavoriteAccommodation(id, loggedUser.id, loggedUser.jwt)
    } else {
      const user = {
        ...loggedUser,
        favoriteList: [...loggedUser.favoriteList, accommodation],
      }

      setLoggedUser(user)
      await saveFavoriteAccommodation(id, loggedUser.id, loggedUser.jwt)
    }
  }

  return (
    accommodation && (
      <CardAccommodationStyled>
        <ImageContainer isFavorite={isFavorite}>
          <AiFillHeart onClick={favoriteHandler} />
          <AccommodationImg src={imageDTOSet[0]?.url} alt={imageDTOSet[0]?.title} />
        </ImageContainer>
        <AccommodationContainer>
          <Header categoryDTO={categoryDTO} rating={score} name={name} />
          <Body features={featureDTOSet} location={locationDTO} />
          <Footer id={id} description={description} />
        </AccommodationContainer>
      </CardAccommodationStyled>
    )
  )
}

const CardAccommodationStyled = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000065;
  height: 500px;
  position: relative;

  display: grid;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);

    height: 250px;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    height: 300px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 250px;

  svg {
    font-size: 2rem;
    color: ${props => (props.isFavorite ? 'red' : '#fff')};
    /* color: #fff; */
    position: absolute;
    right: 1rem;
    top: 1rem;
    filter: drop-shadow(0 0 5px #00000042);
    transition: 0.5s ease;

    :hover {
      color: red;
      animation: pulsate-fwd 0.5s ease-in-out infinite both;
    }
  }

  @keyframes pulsate-fwd {
    0% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    height: 300px;
  }
`

const AccommodationImg = styled.img`
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    display: flex;
    border-radius: 10px 0px 0px 10px;
  }
`

const AccommodationContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
