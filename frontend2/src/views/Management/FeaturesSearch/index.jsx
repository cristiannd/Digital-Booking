import { useState } from 'react'
import styled from 'styled-components'
import { OptionsList } from './OptionList'

const FeaturesSearch = ({ data, selectedFeature, setSelectedFeature, selectedFeatures, setSelectedFeatures }) => {
  const [activedSearchOptions, setActivedSearchOptions] = useState(false)
  const [featureOnInput, setFeatureOnInput] = useState('')

  return (
    <StyledLabel
      onFocus={() => setActivedSearchOptions(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActivedSearchOptions(false)
        }
      }}
      tabIndex={0}
    >
      <input
        type='shared'
        placeholder='Característica'
        value={featureOnInput}
        onChange={e => setFeatureOnInput(e.target.value)}
      />
      <OptionsList
        activedSearchOptions={activedSearchOptions}
        setActivedSearchOptions={setActivedSearchOptions}
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        data={data}
        selectedFeatures={selectedFeatures}
        featureOnInput={featureOnInput}
        setFeatureOnInput={setFeatureOnInput}
        setSelectedFeatures={setSelectedFeatures}
      />
    </StyledLabel>
  )
}

export default FeaturesSearch

const StyledLabel = styled.label`
  display: flex;
  height: 2.5rem;
  position: relative;
  align-items: center;
  width: 100%;

  & > span {
    display: flex;
    place-content: center;
    position: absolute;
    left: 0.5rem;
    color: #aaabbb;
  }

  & > input {
    border-radius: 0.5rem;
    border: none;
    height: 2.5rem;
    padding-left: 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 1rem 0 #00000035;
    text-transform: capitalize;

    :disabled {
      background-color: #fff;
      cursor: pointer;
    }

    ::placeholder {
      color: #aaabbb;
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 700;
    }

    :focus {
      outline: none;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
`
