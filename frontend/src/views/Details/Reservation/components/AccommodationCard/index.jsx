import { StarRating } from 'components/Rating'
import { IoLocationSharp } from 'react-icons/io5'
import { Divider } from 'components/Divider'
import { ButtonFilled } from 'components/Button'
import { AccommodationCardSkeleton } from './AccommodationCardSkeleton'
import { Check, Location, StyledAccommodationCard, Subtitle } from './styles'

export const AccommodationCard = ({ accommodation, date }) => {
  if (!accommodation) return <AccommodationCardSkeleton />

  const { name, categoryDTO, score, imageDTOSet, locationDTO } = accommodation
  const { address, addressNumber, city, country } = locationDTO

  const formatDate = date => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
  }

  return (
    <StyledAccommodationCard>
      <Subtitle view='reservation'>Detalle de la reserva</Subtitle>
      <div>
        <img src={imageDTOSet[0]?.url} alt={imageDTOSet[0]?.title} />
        <div>
          <h3>{categoryDTO.title}</h3>
          <h2>{name}</h2>
          <span>
            <StarRating rating={score} />
          </span>
          <Location>
            <span>
              <IoLocationSharp />
            </span>
            <p>
              {address} {addressNumber}, {city}, {country}
            </p>
          </Location>
          <Divider />
          <Check>
            <span>Check in</span>
            <span>{date ? formatDate(date[0]) : '_/_/_'}</span>
          </Check>
          <Divider />
          <Check>
            <span>Check out</span>
            <span>{date ? formatDate(date[1]) : '_/_/_'}</span>
          </Check>
          <Divider />
          <ButtonFilled type='submit'>Confirmar reserva</ButtonFilled>
        </div>
      </div>
    </StyledAccommodationCard>
  )
}
