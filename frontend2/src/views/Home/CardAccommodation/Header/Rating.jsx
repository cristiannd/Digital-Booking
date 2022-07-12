import { NumberRating, StringRating } from 'components/Rating'
import styled from 'styled-components'

export const Rating = ({ rating }) => {
  return (
    <StyledRating>
      <NumberRating rating={rating} />
      <StringRating rating={rating} />
    </StyledRating>
  )
}

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
