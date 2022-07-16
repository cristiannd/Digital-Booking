import { Icon, StyledNumberRating, StyledStarRating, StyledStringRating } from './styles'

function StringRating({ rating }) {
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

function NumberRating({ rating }) {
  const roundedRating = !Number(rating) ? '-' : Math.round(rating)

  return <StyledNumberRating>{roundedRating}</StyledNumberRating>
}

function StarRating({ rating }) {
  if (!Number(rating)) return null

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

export { StringRating, NumberRating, StarRating }
