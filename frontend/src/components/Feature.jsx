import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { featureList } from 'utils/features.helpers'

const getIcons = (feature) => {
  const featureName = feature.feature.toLowerCase()

  const result = featureList.find((e) => e.name === featureName)
  const defaultResult = { name: featureName, icon: <AiOutlineCheckCircle /> }

  return result ?? defaultResult
}

export const FeatureIcons = ({ feature }) => {
  const response = getIcons(feature)

  return <FeaturesIconsStyled>{response.icon}</FeaturesIconsStyled>
}

const FeaturesIconsStyled = styled.div`
  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const FeatureIconsAndNames = ({ feature }) => {
  const response = getIcons(feature)

  return (
    <FeaturesIconsAndNamesStyled>
      {response.icon} {response.name}
    </FeaturesIconsAndNamesStyled>
  )
}

const FeaturesIconsAndNamesStyled = styled.p`
  text-transform: capitalize;
`
