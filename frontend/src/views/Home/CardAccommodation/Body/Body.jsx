import { useState } from 'react'
import styled from 'styled-components'
import { FeatureIcons } from 'components/Feature'
import { IoLocationSharp } from 'react-icons/io5'
import { ButtonFilled } from 'components/Button'
import  Map from 'components/Map'

export const Body = ({ features, location }) => {
  const [viewMap, setViewMap] = useState(false)

  const { latitude, longitude, city, country } = location

  const viewMapHandler = () => {
    setViewMap(!viewMap)
  }

  return (
    <StyledBody>
      <Location>
        <IoLocationSharp />
        <p>
          {city}, {country} <button onClick={viewMapHandler}>MOSTRAR EN EL MAPA</button>
        </p>
      </Location>
      <Features>
        {features.map(feature => (
          <FeatureIcons key={feature.id} feature={feature} />
        ))}
      </Features>
      <MapContainer viewMap={viewMap}>
        <ButtonFilled onClick={viewMapHandler}>Cerrar mapa</ButtonFilled>
        <Map latitude={latitude} longitude={longitude} />
      </MapContainer>
    </StyledBody>
  )
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Location = styled.div`
  display: flex;
  gap: 5px;

  svg {
    color: ${props => props.theme.colors.grey};
  }

  p {
    font-size: 14px;
    font-weight: 700;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.orange};
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
`

const Features = styled.div`
  display: flex;
  gap: 5px;
`

const MapContainer = styled.div`
  display: ${({ viewMap }) => (viewMap ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid ${props => props.theme.colors.grey};
  border-radius: 12px;

  & > button {
    position: absolute;
    z-index: 5;
    top: 10px;
    right: 3.5rem;
    width: 10rem;
    background-color: #fff;
    color: #242424;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
    border-radius: 0px;
    cursor: pointer;
  }
`
