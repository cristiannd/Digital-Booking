import { useEffect, useContext, useCallback } from 'react'
import { getRandomAccommodations } from 'services/accommodations'
import styled from 'styled-components'
import { CardAccommodation } from './CardAccommodation'
import Context from 'context/AccommodationsContext'
import { CardAccommodationSkeleton } from './CardAccommodationSkeleton'

export const CardAccommodationContainer = ({ selectedCategory, accommodationRef }) => {
  const { accommodations, setAccommodations } = useContext(Context)

  const getAccommodations = useCallback(async () => {
    const response = await getRandomAccommodations(4)
    setAccommodations(response)
  }, [setAccommodations])

  useEffect(() => {
    getAccommodations()
  }, [getAccommodations])

  if (!accommodations) {
    return (
      <CardAccommodationContainerStyled>
        <AccommodationContainerTitle>Recomendaciones</AccommodationContainerTitle>
        <AccommodationContainer>
          <CardAccommodationSkeleton />
          <CardAccommodationSkeleton />
          <CardAccommodationSkeleton />
          <CardAccommodationSkeleton />
        </AccommodationContainer>
      </CardAccommodationContainerStyled>
    )
  }

  return (
    <CardAccommodationContainerStyled ref={accommodationRef}>
      <AccommodationContainerTitle>
        {selectedCategory ? selectedCategory.pluralTitle : 'Recomendaciones'}
      </AccommodationContainerTitle>
      <AccommodationContainer>
        {accommodations.map(e => (
          <CardAccommodation key={e.id} accommodation={e} />
        ))}
      </AccommodationContainer>
    </CardAccommodationContainerStyled>
  )
}

const CardAccommodationContainerStyled = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  padding: 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
`

const AccommodationContainerTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
  padding: 1rem 0;
  text-transform: capitalize;
`

const AccommodationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
