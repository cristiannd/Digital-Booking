import { FeatureIconsAndNames } from 'components/Feature'
import { FeaturesSkeleton } from './FeaturesSkeleton'
import { AmenitiesList, StyledFeatures } from './styles'

export const Features = ({ accommodation }) => {
  if (!accommodation) return <FeaturesSkeleton />

  const { featureDTOSet } = accommodation

  return (
    <StyledFeatures>
      <AmenitiesList>
        {featureDTOSet.map(feature => (
          <FeatureIconsAndNames key={feature.id} feature={feature} />
        ))}
      </AmenitiesList>
    </StyledFeatures>
  )
}
