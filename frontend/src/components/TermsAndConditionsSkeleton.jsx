import React from 'react'
import styled from 'styled-components'

export const TermsAndConditionsSkeleton = () => {
  return (
    <StyledTermsAndConditions>
      <DescriptionContainer>
        <div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
        </div>
      </DescriptionContainer>
    </StyledTermsAndConditions>
  )
}

const StyledTermsAndConditions = styled.section`
  padding: 1rem 0.5rem;
  background-color: #fff;

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

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > div:nth-child(1) {
      width: 10rem;
      height: 1.5rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    & > div:nth-child(n+2) {
      width: 7rem;
      height: 1rem;
      border-radius: 1rem;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }
`
