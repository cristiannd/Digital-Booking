import styled from 'styled-components'

const StyledUserData = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 #0000002d;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StyledLabel = styled.label`
  font-weight: 700;
  padding-bottom: 5px;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    height: 40px;
    background-color: #dfe4ea7a;
    border: none;
    border-radius: 5px;
    padding-left: 1rem;
    box-shadow: 0 0 5px 0 #00000014;
    font-size: 14px;
  }

  & > input[type='text'] {
    text-transform: capitalize;
  }
`

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding-left: 0.5rem;
    box-shadow: 0 0 5px 0 #0000002d;
    font-size: 14px;
    padding-left: 1rem;
  }
`

export { StyledUserData, StyledLabel, StyledInput, StyledSelect }
