import { ButtonFilled } from 'components/Button'
import Divider from 'components/Divider'
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import styled from 'styled-components'

export const AccommodationCardSkeleton = () => {
  return (
    <StyledAccommodationCardSkeleton>
      <Subtitle view="reservation">Detalle de la reserva</Subtitle>
      <div>
        <div />
        <div>
          <div />
          <div />
          <div />
          <Location>
            <span>
              <IoLocationSharp />
            </span>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Location>
          <Divider />
          <Check>
            <span></span>
            <span></span>
          </Check>
          <Divider />
          <Check>
            <span></span>
            <span></span>
          </Check>
          <Divider />
          <ButtonFilled>Confirmar reserva</ButtonFilled>
        </div>
      </div>
    </StyledAccommodationCardSkeleton>
  )
}

const StyledAccommodationCardSkeleton = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #0000002d;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    display: grid;
    height: 100%;

    @media screen and (min-width: ${({ theme }) =>
        theme.viewport.tablet}) and (max-width: ${({ theme }) =>
        theme.viewport.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem;
      gap: 0.5rem;
    }

    & > div:nth-child(1) {
      width: 100%;
      height: 300px;
      animation: skeleton-loading 1s linear infinite alternate;

      @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
        border-radius: 5px;
      }

      @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
        border-radius: 0px;
      }
    }

    & > div {
      display: grid;
      padding: 1rem 0.5rem;

      @media screen and (min-width: ${({ theme }) =>
          theme.viewport.tablet}) and (max-width: ${({ theme }) =>
          theme.viewport.desktop}) {
        padding: 0 0.5rem;
      }

      & > div:nth-child(1) {
        width: 5rem;
        height: 1rem;
        border-radius: 1rem;
        animation: skeleton-loading 1s linear infinite alternate;
      }

      & > div:nth-child(2) {
        width: 10rem;
        height: 1.5rem;
        border-radius: 1rem;
        padding-bottom: 5px;
        animation: skeleton-loading 1s linear infinite alternate;
      }

      & > button {
        margin-top: 1rem;
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0.5rem;
`

const Location = styled.div`
  display: flex;
  padding: 0.5rem 0;

  & > span {
    padding-right: 5px;

    & > svg {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > div {
      width: 5rem;
      height: 1rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }
`

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & > span {
    width: 4rem;
    height: 1.5rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`
