import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'
import { CardAccommodation } from 'views/Home/CardAccommodation/CardAccommodation'
import ProfileEmpty from './ProfileEmpty'

const ProfileFavorites = () => {
  const { favoriteList } = useOutletContext()

  return (
    <StyledProfileFavorites disabledGrid={favoriteList.length === 0}>
      {favoriteList.length > 0 ? (
        favoriteList.map(e => <CardAccommodation key={e.id} accommodation={e} />)
      ) : (
        <ProfileEmpty>No tienes ningún alojamiento en favoritos</ProfileEmpty>
      )}
    </StyledProfileFavorites>
  )
}

export default ProfileFavorites

const StyledProfileFavorites = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  background-color: ${props => props.theme.colors.grey};
  min-height: calc(100vh - 93px - 58px - 2.5rem);

  @media screen and (min-width: ${props => props.theme.viewport.desktop}) {
    grid-template-columns: ${props => (props.disabledGrid ? null : 'repeat(2, 1fr)')};
  }
`
