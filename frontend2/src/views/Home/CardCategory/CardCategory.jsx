import styled, { css } from 'styled-components'

export const CardCategory = ({
  showAccommodationsByCategory,
  selectedCategory,
  category,
}) => {
  const { id, singularTitle, pluralTitle, image, total } = category

  return (
    <StyledCardCategory
      onClick={() => showAccommodationsByCategory(category)}
      aria-pressed={selectedCategory?.id === id}
      selectedCategory={selectedCategory?.id === id}
    >
      <CardImg src={image} alt={pluralTitle} />
      <AccommodationDate>
        <AccommodationType>{singularTitle}</AccommodationType>
        <AccommodationsNumber>
          {total} {pluralTitle}
        </AccommodationsNumber>
      </AccommodationDate>
    </StyledCardCategory>
  )
}

const StyledCardCategory = styled.button`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 4px 0px #00000029;
  height: 275px;
  transition: 0.25s ease;

  ${({ selectedCategory }) =>
    !selectedCategory
      ? css`
          &:hover {
            transform: scale(1.02);
            box-shadow: 0px 0px 15px 0px #0000006e;
          }
        `
      : css`
          border-radius: 10px 10px 0 0;
          border-bottom: ${({ theme }) => `3px solid ${theme.colors.orange}`};
        `}
`

const CardImg = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`

const AccommodationDate = styled.div`
  height: 20%;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.colors.grey};
  padding-left: 10px;
`

const AccommodationType = styled.h4`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: start;
`

const AccommodationsNumber = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
  text-align: start;
`
