import styled from 'styled-components'
import { IoLocationSharp } from 'react-icons/io5'
import { BiCalendarEvent } from 'react-icons/bi'
import { SearchPlaceOptions } from './SearchPlaceOptions'
import { useEffect, useState } from 'react'
import { CalendarContainer } from 'views/Home/search/calendar/CalendarContainer'
import { useContext } from 'react'
import {
  getAccommodationsByCity,
  getAccommodationsByDate,
  getAccommodationsByDateAndCity,
} from 'services/accommodations'
import { AccommodationsContext } from 'context/AccommodationsContext'
import { getAllCities } from 'services/cities'

export const Search = ({ setSelectedCategory, executeScroll }) => {
  const [searchOptionsActived, setSearchOptionsActived] = useState(false)
  const [citySelected, setCitySelected] = useState('')
  const [calendarActived, setCalendarActived] = useState(false)
  const [date, setDate] = useState(null)
  const [dateSelected, setDateSelected] = useState('')
  const [cities, setCities] = useState([])

  const { setAccommodations } = useContext(AccommodationsContext)

  useEffect(() => {
    getCities()
  }, [])

  const dateSelectedHandler = () => {
    const formmatedDate = date?.map(e => {
      const formmateDay = e.toLocaleDateString('es-ES', { day: 'numeric' })
      const formmateMonth = e.toLocaleDateString('es-ES', { month: 'short' })

      return `${formmateDay} de ${formmateMonth}.`
    })

    if (formmatedDate[0] && formmatedDate[1]) {
      setDateSelected(`${formmatedDate[0]} - ${formmatedDate[1]}`)
    } else {
      setDateSelected('Debes seleccionar un rango de fechas')
    }
  }

  const getCities = async () => {
    const response = await getAllCities()
    setCities(response)
  }

  const citySearchHandler = e => {
    setCitySelected(e.target.value)
  }

  const searchHandler = async event => {
    event.preventDefault()

    if (!citySelected && !dateSelected) return

    if (citySelected && dateSelected) {
      setAccommodations(null)
      setSelectedCategory(null)
      executeScroll()

      const response = await getAccommodationsByDateAndCity(date, citySelected.split(',')[0])
      return setAccommodations(response)
    }

    if (citySelected) {
      setAccommodations(null)
      setSelectedCategory(null)
      executeScroll()

      const response = await getAccommodationsByCity(citySelected.split(',')[0])
      return setAccommodations(response)
    }

    if (dateSelected) {
      setAccommodations(null)
      setSelectedCategory(null)
      executeScroll()

      const response = await getAccommodationsByDate(date)
      return setAccommodations(response)
    }
  }

  return (
    <SearchStyled>
      <H2Styled>Busca ofertas en hoteles, casas y muchos más</H2Styled>
      <StyledForm onSubmit={event => searchHandler(event)}>
        <LabelStyled
          onFocus={() => setSearchOptionsActived(true)}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setSearchOptionsActived(false)
            }
          }}
          tabIndex={0}
        >
          <SpanStyled>
            <IoLocationSharp />
          </SpanStyled>
          <InputStyled
            type='shared'
            placeholder='¿A dónde vamos?'
            value={citySelected}
            onChange={e => citySearchHandler(e)}
          />
          <SearchPlaceOptions
            searchOptionsActived={searchOptionsActived}
            setSearchOptionsActived={setSearchOptionsActived}
            citySelected={citySelected}
            setCitySelected={setCitySelected}
            cities={cities}
          />
        </LabelStyled>
        <LabelStyled
          onFocus={() => setCalendarActived(true)}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setCalendarActived(false)
            }
          }}
          tabIndex={0}
        >
          <SpanStyled>
            <BiCalendarEvent />
          </SpanStyled>
          <InputStyled
            type='shared'
            disabled
            placeholder='Check in - Check out'
            value={dateSelected}
          />
          <CalendarContainer
            calendarActived={calendarActived}
            setCalendarActived={setCalendarActived}
            date={date}
            setDate={setDate}
            dateSelectedHandler={dateSelectedHandler}
          />
        </LabelStyled>
        <ButtonStyled type='submit'>Buscar</ButtonStyled>
      </StyledForm>
    </SearchStyled>
  )
}

const SearchStyled = styled.section`
  background-color: ${props => props.theme.colors.grey};
  color: #fff;
  padding: ${({ theme }) => theme.padding.mobile};

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: ${({ theme }) => theme.padding.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const H2Styled = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 15px;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: 3fr 3fr 2fr;
    grid-template-rows: none;
    gap: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    width: 1350px;
  }
`

const LabelStyled = styled.div`
  display: flex;
  height: 38px;
  position: relative;
`

const SpanStyled = styled.span`
  align-items: center;
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  color: #aaabbb;
  display: flex;
  font-size: 25px;
  height: 38px;
  justify-content: flex-end;
  position: absolute;
  width: 30px;
  cursor: pointer;
`

const ButtonStyled = styled.button`
  background-color: ${props => props.theme.colors.orange};
  border-radius: 5px;
  border: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 38px;
  transition: 0.4s ease;

  :hover {
    transform: scale(1.05);
  }
`

const InputStyled = styled.input`
  border-radius: 5px;
  border: 0px;
  height: 38px;
  padding-left: 38px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};

  :disabled {
    background-color: #fff;
    cursor: pointer;
  }

  ::placeholder {
    color: #aaabbb;
    font-family: 'Quicksand';
    font-size: 14px;
    font-weight: 700;
  }

  :focus {
    outline: none;
  }
`
