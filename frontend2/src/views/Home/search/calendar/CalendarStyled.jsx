import React from 'react'
import { Calendar } from 'react-calendar'
import styled from 'styled-components'
import useWindowDimensions from 'hooks/useWindowDimensions'

export const CalendarStyled = ({ date, setDate }) => {
  const { width } = useWindowDimensions()

  return (
    <CalendarMainStyled
      value={date}
      onChange={(value) => setDate(value)}
      calendarType="US"
      locale="es-ES"
      minDate={new Date(Date.now())}
      next2Label={null}
      prev2Label={null}
      showDoubleView={width >= 768 ? true : false}
      showFixedNumberOfWeeks={false}
      showNeighboringMonth={false}
      selectRange={true}
      formatShortWeekday={(locale, date) =>
        date.toLocaleDateString('es-es', { weekday: 'short' })[0]
      }
      formatMonthYear={(locale, date) =>
        date.toLocaleDateString('es-es', { month: 'long' })
      }
    />
  )
}

const CalendarMainStyled = styled(Calendar)`
  div.react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    button {
      height: 25px;
      background-color: transparent;
      cursor: pointer;

      &.react-calendar__navigation__arrow {
        border: none;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        margin: 0px 8.5px;
      }

      &.react-calendar__navigation__label {
        text-transform: capitalize;
        border: 0;

        span {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }

  button.react-calendar__year-view__months__month,
  button.react-calendar__decade-view__years__year,
  button.react-calendar__century-view__decades__decade {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 50px;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGrey};
    }
  }

  div.react-calendar__month-view__weekdays__weekday {
    text-align: center;
    color: #000;

    abbr {
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  div.react-calendar__month-view__days {
    button {
      background-color: transparent;
      border: none;
      margin-top: 10px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;

      abbr {
        border-radius: 100%;
        width: 25px;
        height: 25px;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: ${(props) => props.theme.colors.lightGrey};
        }
      }

      &.react-calendar__tile--active {
        abbr {
          background-color: ${(props) => props.theme.colors.orange};
          color: #fff;
        }
      }

      &.react-calendar__tile--hover {
        abbr {
          background-color: ${(props) => props.theme.colors.orange};
          color: #fff;
        }
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    button.react-calendar__navigation__label {
      display: flex;
      justify-content: space-around;
      align-items: center;

      span.react-calendar__navigation__label__divider {
        display: none;
      }
    }

    div.react-calendar__viewContainer {
      display: flex;

      div.react-calendar__month-view:first-child {
        border-right: 1px solid ${(props) => props.theme.colors.grey};
      }
    }
  }
`
