import { ButtonFilled } from 'components/Button'
import Divider from 'components/Divider'
import { StarRating } from 'components/Rating'
import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import Map from 'components/Map'
import ProfileEmpty from './ProfileEmpty'

const ReservationCard = ({ reservationList }) => {
  const [viewMap, setViewMap] = useState(false)
  const { startDay, finishDay, product } = reservationList

  const viewMapHandler = () => {
    setViewMap(!viewMap)
  }

  return (
    <StyledReservationCard>
      <div>
        <img src={product.imageDTOSet[0].url} alt={product.imageDTOSet[0].title} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <span>
          <StarRating rating={product.score} />
        </span>
        <Location>
          <span>
            <IoLocationSharp />
          </span>
          <p>
            {product.locationDTO.address} {product.locationDTO.addressNumber}
          </p>
        </Location>
        <Divider />
        <div>
          <p>Check in</p>
          <p>{startDay}</p>
        </div>
        <Divider />
        <div>
          <p>Check out</p>
          <p>{finishDay}</p>
        </div>
        <Divider />
        <ButtonFilled onClick={viewMapHandler}>Ver mapa</ButtonFilled>
      </div>
      <MapContainer viewMap={viewMap}>
        <ButtonFilled onClick={viewMapHandler}>Cerrar mapa</ButtonFilled>
        <Map latitude={product.locationDTO.latitude} longitude={product.locationDTO.longitude} />
      </MapContainer>
    </StyledReservationCard>
  )
}

const ProfileReservations = () => {
  const { reservationList } = useOutletContext()

  return (
    <StyledProfileReservations>
      {reservationList.length > 0 ? (
        reservationList.map(e => <ReservationCard key={e.id} reservationList={e} />)
      ) : (
        <ProfileEmpty>No tienes ninguna reserva</ProfileEmpty>
      )}
    </StyledProfileReservations>
  )
}

export default ProfileReservations

const StyledProfileReservations = styled.div`
  background-color: ${props => props.theme.colors.grey};
  min-height: calc(100vh - 93px - 58px - 2.5rem);
  padding: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const StyledReservationCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 300px;
  height: 450px;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 #00000045;

  & > div:nth-child(1) {
    border-radius: 1rem 1rem 0 0;
    height: 225px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem 1rem 0 0;
    }
  }

  & > div:nth-child(2) {
    background-color: #fff;
    border-radius: 0 0 1rem 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h3 {
      font-size: 1.5rem;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
`

const Location = styled.div`
  display: flex;
  justify-content: flex-start !important;
  gap: 0.5rem;
`

const MapContainer = styled.div`
  display: ${({ viewMap }) => (viewMap ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;

  & > button {
    position: absolute;
    z-index: 5;
    top: 26px;
    right: 4.6rem;
    width: 10rem;
    background-color: #fff;
    color: #242424;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
    border-radius: 0px;
    cursor: pointer;
  }
`
