import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const DetailsHeaderSkeleton = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(-1)
  }

  return (
    <StyledDetailsHeaderSkeleton>
      <div>
        <div></div>
        <div></div>
      </div>
      <Button onClick={goToHome}>
        <MdArrowBackIosNew />
      </Button>
    </StyledDetailsHeaderSkeleton>
  )
}

const StyledDetailsHeaderSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 3rem;

    & > div:nth-child(1) {
      width: 3rem;
      height: 1rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    & > div:nth-child(2) {
      width: 10rem;
      height: 1.5rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
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

const Button = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  border-radius: 10px;
  transition: 0.25s ease;

  & > svg {
    font-size: 2rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey};
    transform: scale(1.1);
  }
`
