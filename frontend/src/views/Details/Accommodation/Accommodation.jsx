import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { Carousel } from './Carousel/Carousel'
import { Features } from './Features/Features'
import { Gallery } from './Gallery/Gallery'
import { Location } from './Location/Location'
import { SubHeader } from './SubHeader/SubHeader'
import { AvailableDates } from './AvailableDates/AvailableDates'
import { Subtitle } from 'components/Subtitle'
import { Line } from 'components/Line'
import { TermsAndConditions } from 'components/TermsAndConditions'

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

      <Subtitle view="accommodation">
        {accommodation?.descriptionTitle}
      </Subtitle>
      <Description>{accommodation?.description}</Description>

      <Subtitle view="accommodation">¿Qué ofrece este lugar?</Subtitle>
      <Line lineColor="orange" />
      <Features accommodation={accommodation} />

      <Subtitle view="accommodation" background="lightGrey">
        Fechas disponibles
      </Subtitle>
      <AvailableDates date={date} setDate={setDate} accommodation={accommodation} />

      <Subtitle view="accommodation">¿Dónde vas a estar?</Subtitle>
      <Line lineColor="orange" />
      <Location accommodation={accommodation} />

      <Subtitle view="accommodation">Que tenés que saber</Subtitle>
      <Line lineColor="orange" />
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
