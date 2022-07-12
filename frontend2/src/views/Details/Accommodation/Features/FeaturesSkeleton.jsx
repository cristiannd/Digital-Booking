import styled from 'styled-components'

export const FeaturesSkeleton = () => {
  return (
    <StyledFeaturesSkeleton>
      <AmenitiesList>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </AmenitiesList>
    </StyledFeaturesSkeleton>
  )
}

const StyledFeaturesSkeleton = styled.div`
  padding: 1rem 0.5rem 0;
  color: ${({ theme }) => theme.colors.grey};

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 2rem 10rem;
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

const AmenitiesList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  & > div {
    height: 1rem;
    width: 5rem;
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`
