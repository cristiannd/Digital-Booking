import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'

export const StringRating = ({ rating }) => {
  if (!Number(rating)) return 'Sin datos'

  const roundedRating = Math.round(rating)

  const getStringRating = () => {
    if (roundedRating <= 2) return 'Muy malo'
    if (roundedRating <= 4) return 'Malo'
    if (roundedRating <= 6) return 'Regular'
    if (roundedRating <= 8) return 'Bueno'
    return 'Muy bueno'
  }

  return <StyledStringRating>{getStringRating()}</StyledStringRating>
}

const StyledStringRating = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.grey};
`

export const NumberRating = ({ rating }) => {
  const roundedRating = !Number(rating) ? '-' : Math.round(rating)

  return <StyledNumberRating>{roundedRating}</StyledNumberRating>
}

const StyledNumberRating = styled.div`
  width: 2.5rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const StarRating = ({ rating }) => {
  if(!Number(rating)) return null

  const roundedNumberOfStars = Math.round(rating) / 2
  let stars = []

  const getTotalStars = () => {
    for (let i = 0; i < 5; i++) {
      if (i < roundedNumberOfStars) stars.push(<Icon key={i} />)
      else stars.push(<Icon key={i} stardisable='true' />)
    }
  }

  getTotalStars()
  return <StyledStarRating>{stars.map(e => e)}</StyledStarRating>
}

const StyledStarRating = styled.div`
  width: min-content;
  display: flex;
`

const Icon = styled(AiFillStar)`
  color: ${({ theme, stardisable }) => (stardisable ? '#bebebe' : theme.colors.orange)};
`
