import { useContext, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { getAllCategories } from 'services/categories'
import { AccommodationsContext } from 'context/AccommodationsContext'
import { getAccommodationsByCategory } from 'services/accommodations'
import { CardCategory } from './CardCategory'
import { CardCategorySkeleton } from './CardCategorySkeleton'

export const CardCategoryContainer = ({ selectedCategory, setSelectedCategory, executeScroll }) => {
  const [categories, setCategories] = useState(null)
  const { setAccommodations } = useContext(AccommodationsContext)

  const getCategories = useCallback(async () => {
    const response = await getAllCategories()
    setCategories(response)
  }, [setCategories])

  useEffect(() => {
    getCategories()
  }, [getCategories])

  const showAccommodationsByCategory = async category => {
    if (category.id === selectedCategory?.id) return

    setAccommodations(null)
    executeScroll()

    const response = await getAccommodationsByCategory(category.id)
    setAccommodations(response)
    setSelectedCategory(category)
  }

  if (!categories) {
    return (
      <CardCategoryContainerStyled>
        <CategoryTitle>Buscar por tipo de alojamiento</CategoryTitle>
        <CategoryType>
          <CardCategorySkeleton />
          <CardCategorySkeleton />
          <CardCategorySkeleton />
          <CardCategorySkeleton />
        </CategoryType>
      </CardCategoryContainerStyled>
    )
  }

  return (
    <CardCategoryContainerStyled>
      <CategoryTitle>Buscar por tipo de alojamiento</CategoryTitle>
      <CategoryType>
        {categories.map(e => (
          <CardCategory
            key={e.id}
            setAccommodations={setAccommodations}
            showAccommodationsByCategory={showAccommodationsByCategory}
            selectedCategory={selectedCategory}
            category={e}
          />
        ))}
      </CategoryType>
    </CardCategoryContainerStyled>
  )
}

const CardCategoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 3rem;
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.grey};
  padding-bottom: 1rem;
`

const CategoryType = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
