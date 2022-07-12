import { IoLocationSharp } from 'react-icons/io5'
import styled from 'styled-components'

export const SubHeaderSkeleton = () => {
  return (
    <StyledSubHeaderSkeleton>
      <Location>
        <div>
          <IoLocationSharp />
        </div>
        <div />
      </Location>
      <Rating>
        <div>
          <div />
          <div />
        </div>
        <div />
      </Rating>
    </StyledSubHeaderSkeleton>
  )
}

const StyledSubHeaderSkeleton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 50px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 0.5rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 0.5rem 10rem;
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

const Location = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > div:nth-child(1) {
    padding-top: 2.5px;

    & > svg {
      font-size: 1.2rem;
    }
  }

  & > div:nth-child(2) {
    width: 15rem;
    height: 1rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`

const Rating = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & > div:nth-child(1),
    div:nth-child(2) {
      width: 5rem;
      height: 0.8rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }

  & > div:nth-child(2) {
    width: 2.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`
