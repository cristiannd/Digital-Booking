import { NumberRating, StarRating, StringRating } from 'components/Rating'
import { IoLocationSharp } from 'react-icons/io5'
import { Location, Rating, StyledSubHeader } from './styles'
import { SubHeaderSkeleton } from './SubHeaderSkeleton'

export const SubHeader = ({ accommodation }) => {
  if (!accommodation) return <SubHeaderSkeleton />

  const { locationDTO, score } = accommodation
  const { address, addressNumber, city, country } = locationDTO

  return (
    <StyledSubHeader>
      <Location>
        <div>
          <IoLocationSharp />
        </div>
        <p>
          {address} {addressNumber}, {city}, {country}
        </p>
      </Location>
      <Rating>
        <div>
          <StringRating rating={score} />
          <StarRating rating={score} />
        </div>
        <NumberRating rating={score} />
      </Rating>
    </StyledSubHeader>
  )
}
