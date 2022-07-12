import { StarRating } from 'components/Rating'
import styled from 'styled-components'
import { Rating } from './Rating'

export const Header = ({ categoryDTO, rating, name }) => {
  return (
    <StyledHeader>
      <div>
        <CategoryAndStars>
          <Category>{categoryDTO.singularTitle}</Category>
          <StarRating rating={rating} />
        </CategoryAndStars>
        <AccommodationName>{name}</AccommodationName>
      </div>
      <Rating rating={rating} />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  `

const CategoryAndStars = styled.div`
  display: flex;
  gap: 5px;
`

const Category = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey};
  text-transform: uppercase;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const AccommodationName = styled.h3`
  color: ${(props) => props.theme.colors.grey};
  font-size: 24px;
  font-weight: 700;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  
  `


