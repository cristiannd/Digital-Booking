import styled from 'styled-components'
import { FeatureIconsAndNames } from 'components/Feature'
import { FeaturesSkeleton } from './FeaturesSkeleton'

export const Features = ({ accommodation }) => {
  if (!accommodation) return <FeaturesSkeleton />

  const { featureDTOSet } = accommodation

  return (
    <StyledFeatures>
      <AmenitiesList>
        {featureDTOSet.map((feature) => (
          <FeatureIconsAndNames key={feature.id} feature={feature} />
        ))}
      </AmenitiesList>
    </StyledFeatures>
  )
}

const StyledFeatures = styled.section`
  padding: 1rem 0.5rem 0;
  color: ${({ theme }) => theme.colors.grey};

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 2rem 10rem;
  }
`

const AmenitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  p {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    gap: 0.5rem;
    padding: 8px 0;
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
