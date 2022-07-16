import { AiOutlineCheckCircle } from 'react-icons/ai'
import { featureList } from 'utils/features.helpers'
import { StyledFeaturesIcons, StyledFeaturesIconsAndNames } from './styles'

function getIcons(feature) {
  const featureName = feature.feature.toLowerCase()

  const result = featureList.find(e => e.name === featureName)
  const defaultResult = { name: featureName, icon: <AiOutlineCheckCircle /> }

  return result ?? defaultResult
}

function FeatureIcons({ feature }) {
  const response = getIcons(feature)

  return <StyledFeaturesIcons>{response.icon}</StyledFeaturesIcons>
}

function FeatureIconsAndNames({ feature }) {
  const response = getIcons(feature)

  return (
    <StyledFeaturesIconsAndNames>
      {response.icon} {response.name}
    </StyledFeaturesIconsAndNames>
  )
}

export { FeatureIcons, FeatureIconsAndNames }
