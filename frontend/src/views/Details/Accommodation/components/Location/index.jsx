import { Map } from 'components/Map'
import { LocationSkeleton } from './LocationSkeleton'
import { Description, MapContainer, StyledLocation } from './styles'

export const Location = ({ accommodation }) => {
  if (!accommodation) return <LocationSkeleton />

  const { locationDTO } = accommodation
  const { address, addressNumber, city, country, latitude, longitude } = locationDTO

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
