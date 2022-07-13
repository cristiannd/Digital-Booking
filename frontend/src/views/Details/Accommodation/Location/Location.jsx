import styled from 'styled-components'
import Map  from 'components/Map'
import { LocationSkeleton } from './LocationSkeleton'

export const Location = ({ accommodation }) => {
  if (!accommodation) return <LocationSkeleton />

  const { locationDTO } = accommodation
  const { address, addressNumber, city, country, latitude, longitude } =
    locationDTO

  return (
    <StyledLocation>
      <Description>
        {address} {addressNumber}, {city}, {country}
      </Description>

      <MapContainer>
        <Map latitude={latitude} longitude={longitude} />
      </MapContainer>
    </StyledLocation>
  )
}

const StyledLocation = styled.section`
  padding: 1rem 0.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
  }
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 1rem;
`

const MapContainer = styled.div`
  height: 400px;
`
