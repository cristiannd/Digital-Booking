import { useState, useRef } from 'react'
import styled from 'styled-components'
import { AccommodationsContextProvider } from 'context/AccommodationsContext'
import { Search } from './search/Search'
import { CardCategoryContainer } from './CardCategory/CardCategoryContainer'
import { CardAccommodationContainer } from './CardAccommodation/CardAccommodationContainer'

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const accommodationRef = useRef(null)

  const executeScroll = () => accommodationRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <AccommodationsContextProvider>
      <HomeStyle>
        <Search setSelectedCategory={setSelectedCategory} executeScroll={executeScroll} />
        <CardCategoryContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          executeScroll={executeScroll}
        />
        <CardAccommodationContainer
          accommodationRef={accommodationRef}
          selectedCategory={selectedCategory}
        />
      </HomeStyle>
    </AccommodationsContextProvider>
  )
}

const HomeStyle = styled.main`
  min-height: calc(100vh - 93px - 58px);
`
