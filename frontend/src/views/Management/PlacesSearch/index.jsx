import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { OptionsList } from './OptionsList'

const PlacesSearch = ({ data, setSelectedCity }) => {
  const [ActivedSearchOptions, setActivedSearchOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const citySearchHandler = e => {
    setSelectedOption(e.target.value)
  }

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
      <span>
        <IoLocationSharp />
      </span>
      <input type='shared' placeholder='Ciudad' value={selectedOption} onChange={e => citySearchHandler(e)} />
      <OptionsList
        ActivedSearchOptions={ActivedSearchOptions}
        setActivedSearchOptions={setActivedSearchOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        data={data}
        setSelectedCity={setSelectedCity}
      />
    </StyledLabel>
  )
}

export default PlacesSearch

const StyledLabel = styled.label`
  display: flex;
  height: 2.5rem;
  position: relative;
  align-items: center;

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
    padding-left: 2rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 0 1rem 0 #00000035;

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
