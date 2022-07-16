import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { Features } from './components/Features'
import { AvailableDates } from './components/AvailableDates'
import { Subtitle } from 'components/Subtitle'
import { TermsAndConditions } from 'components/TermsAndConditions'
import { Divider } from 'components/Divider'
import { SubHeader } from './components/SubHeader'
import { Location } from './components/Location'
import { Carousel } from './components/Carousel'
import { Gallery } from './components/Gallery'

export const Accommodation = () => {
  const { accommodation, date, setDate } = useOutletContext()
  const { width } = useWindowDimensions()

  return (
    <StyledAccommodation>
      <SubHeader accommodation={accommodation} />

      {width < 1366 ? (
        <Carousel accommodation={accommodation} />
      ) : (
        <Gallery accommodation={accommodation} />
      )}

      <Subtitle view='accommodation'>{accommodation?.descriptionTitle}</Subtitle>
      <Description>{accommodation?.description}</Description>

      <Subtitle view='accommodation'>¿Qué ofrece este lugar?</Subtitle>
      <Divider lineColor='orange' />
      <Features accommodation={accommodation} />

      <Subtitle view='accommodation' background='lightGrey'>
        Fechas disponibles
      </Subtitle>
      <AvailableDates date={date} setDate={setDate} accommodation={accommodation} />

      <Subtitle view='accommodation'>¿Dónde vas a estar?</Subtitle>
      <Divider lineColor='orange' />
      <Location accommodation={accommodation} />

      <Subtitle view='accommodation'>Que tenés que saber</Subtitle>
      <Divider lineColor='orange' />
      <TermsAndConditions accommodation={accommodation} />
    </StyledAccommodation>
  )
}

const StyledAccommodation = styled.section`
  min-height: calc(100vh - 93px - 58px);
  padding-bottom: 25px;
`

const Description = styled.p`
  padding: 0 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
  }
`
