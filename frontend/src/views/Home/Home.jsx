import { useState } from 'react'
import styled from 'styled-components'
import { Search } from './search/Search'
import { CardCategoryContainer } from './CardCategory/CardCategoryContainer'
import { CardAccommodationContainer } from './CardAccommodation/CardAccommodationContainer'
import { AccommodationsContext } from 'context/AccommodationsContext'
import { useRef } from 'react'

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const accommodationRef = useRef(null)

  const executeScroll = () => accommodationRef.current.scrollIntoView({behavior: "smooth"})

  return (
    <AccommodationsContext>
      <HomeStyle>
        <Search setSelectedCategory={setSelectedCategory} executeScroll={executeScroll} />
        <CardCategoryContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          executeScroll={executeScroll}
        />
        <CardAccommodationContainer accommodationRef={accommodationRef} selectedCategory={selectedCategory} />
      </HomeStyle>
    </AccommodationsContext>
  )
}

const HomeStyle = styled.main`
  min-height: calc(100vh - 93px - 58px);
`
