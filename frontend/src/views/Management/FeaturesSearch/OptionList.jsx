import styled from 'styled-components'
import { Divider } from 'components/Divider'
import { useState } from 'react'

export const OptionsList = ({
  activedSearchOptions,
  data,
  selectedFeatures,
  featureOnInput,
  setFeatureOnInput,
  setSelectedFeatures,
}) => {
  const [featuresName, setFeaturesName] = useState([])

  if (!data) return

  const filterSelectedFeatures = featureOnDatabase => {
    return !selectedFeatures.some(feature => feature.feature === featureOnDatabase.feature)
  }

  const filterSearchedFeature = featureOnDatabase => {
    const featureName = featureOnDatabase.feature.toLowerCase()
    const featureNameToSearch = featureOnInput.toLowerCase()
    return featureName.includes(featureNameToSearch)
  }

  const featureClickHandler = featureOnDatabase => {
    setFeaturesName(featuresName.concat(featureOnDatabase.feature))
    setSelectedFeatures(selectedFeatures.concat(featureOnDatabase))
    setFeatureOnInput('')
  }

  return (
    <StyledOptions activedSearchOptions={activedSearchOptions}>
      {data
        ?.filter(featureOnDatabase => filterSelectedFeatures(featureOnDatabase))
        .filter(featureOnDatabase => filterSearchedFeature(featureOnDatabase))
        .map((featureOnDatabase, indice, array) => (
          <li key={featureOnDatabase.id} className='list-location'>
            <Row type='button' onClick={() => featureClickHandler(featureOnDatabase)}>
              <OptionRow>
                <div>{featureOnDatabase.feature}</div>
              </OptionRow>
              {array.length - 1 > indice && <Divider lineColor='orange' />}
            </Row>
          </li>
        ))}
    </StyledOptions>
  )
}

const Row = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
`

const OptionRow = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  color: ${props => props.theme.colors.grey};

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  & > div:nth-child(1) {
    display: flex;
    place-content: center;
  }

  & > div:nth-child(2) {
    font-size: 14px;
    font-weight: 700;
    padding-left: 1rem;
    text-transform: capitalize;
  }
`

const StyledOptions = styled.ul`
  position: absolute;
  top: 2.65rem;
  width: 100%;
  background-color: #fff;
  max-height: 290px;
  overflow-y: scroll;
  border-radius: 0px 0px 10px 10px;
  z-index: 2;
  box-shadow: 0px 0px 10px 0px #00000029;

  display: ${props => (props.activedSearchOptions ? 'block' : 'none')};

  ::-webkit-scrollbar {
    display: none;
  }

  li.list-location {
    display: flex;
    flex-direction: column;
  }
`
