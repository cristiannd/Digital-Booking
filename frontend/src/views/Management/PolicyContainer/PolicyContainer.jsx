import { ButtonFilled } from 'components/Button'
import React from 'react'
import { useState } from 'react'
import { AiFillEdit, AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

const PolicyContainer = ({
  placeholder,
  policyId,
  accommodationPolicyList,
  setAccommodationPolicyList,
  deleteAPolicy,
}) => {
  const [policyDescription, setPolicyDescription] = useState('')
  const [policyList, setPolicyList] = useState([])

  const addHouseRulesHandler = () => {
    if (!policyDescription) return

    const idGenerator = Math.random().toString(16).slice(2)

    const newPolicy = { id: idGenerator, description: policyDescription, policy: { id: policyId } }

    setPolicyList([...policyList, newPolicy])
    setAccommodationPolicyList(accommodationPolicyList.concat(newPolicy))
    setPolicyDescription('')
  }

  const modifyAHouseRuleHandler = (e, index) => {
    const policyToModify = policyList.find((e, i) => i === index)
    setPolicyDescription(policyToModify.description)
    deleteAHouseRuleHandler(e, index)
  }

  const deleteAHouseRuleHandler = (e, index) => {
    const newPolicies = policyList.filter((e, i) => i !== index)
    setPolicyList(newPolicies)
    deleteAPolicy(e.id)
  }

  return (
    <StyledPolicyContainer>
      <div>
        <input
          type='text'
          placeholder={placeholder || 'Descripción'}
          value={policyDescription}
          onChange={e => setPolicyDescription(e.target.value)}
        />
        <ButtonFilled type='button' onClick={addHouseRulesHandler}>
          +
        </ButtonFilled>
      </div>
      <div>
        {policyList.map((e, index) => (
          <div key={index}>
            <span>
              <AiOutlineCheckCircle />
            </span>
            <p>{e.description}</p>
            <ButtonFilled type='button' onClick={() => modifyAHouseRuleHandler(e, index)}>
              <AiFillEdit />
            </ButtonFilled>
            <ButtonFilled type='button' onClick={() => deleteAHouseRuleHandler(e, index)}>
              <AiOutlineClose />
            </ButtonFilled>
          </div>
        ))}
      </div>
    </StyledPolicyContainer>
  )
}

export default PolicyContainer

const StyledPolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div:nth-child(1) {
    display: flex;
    gap: 1rem;

    & > button {
      width: 2.5rem;
      min-width: 2.5rem;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      border-bottom: 1px solid #fff;
      padding: 0.5rem 1rem;
      background-color: ${props => props.theme.colors.orange};

      & > span {
        display: flex;
        color: #fff;
        padding-top: 2px;
      }

      & > p {
        color: #fff;
        width: 100%;
      }

      & > button {
        display: grid;
        place-content: center;
        min-width: 2.5rem;
        width: 2.5rem;
        border-radius: 100%;
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
      }
    }
  }
`
