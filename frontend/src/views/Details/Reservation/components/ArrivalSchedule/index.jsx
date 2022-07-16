import { StyledArrivalSchedule } from './styles'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const hoursArray = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]

export const ArrivalSchedule = ({ checkIn, setCheckIn }) => {
  return (
    <StyledArrivalSchedule>
      <div>
        <span>
          <AiOutlineCheckCircle />
        </span>
        <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 12:00 AM</p>
      </div>
      <label htmlFor='time'>Indicá tu horario estimado de llegada</label>
      <select
        name='time'
        id='time'
        defaultValue='DEFAULT'
        required
        value={checkIn}
        onChange={e => setCheckIn(e.target.value)}
      >
        <option value='DEFAULT' disabled hidden>
          Seleccionar hora
        </option>
        {hoursArray.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </StyledArrivalSchedule>
  )
}
