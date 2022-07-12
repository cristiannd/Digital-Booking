import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'
import { TermsAndConditionsSkeleton } from './TermsAndConditionsSkeleton'

export const TermsAndConditions = ({ accommodation }) => {
  if (!accommodation) return <TermsAndConditionsSkeleton />

  const { policyProductDTOSet } = accommodation

  const cancellationPolicy = policyProductDTOSet.filter(
    (e) => e.policy === 'Política de cancelación'
  )
  const healthAndSecurity = policyProductDTOSet.filter(
    (e) => e.policy === 'Salud y seguridad'
  )
  const houseRules = policyProductDTOSet.filter(
    (e) => e.policy === 'Normas de la casa'
  )

  return (
    
    <StyledTermsAndConditions>
      <DescriptionContainer>
        <DescriptionTaC>
          <TitleTaC>{houseRules[0].policy}</TitleTaC>
          {houseRules.map((e) => (
            <Item key={e.description}>
              <Icon>
                <AiFillCheckCircle />
              </Icon>
              <p>{e.description}</p>
            </Item>
          ))}
        </DescriptionTaC>
        <DescriptionTaC>
          <TitleTaC>{healthAndSecurity[0].policy}</TitleTaC>
          {healthAndSecurity.map((e) => (
            <Item key={e.description}>
              <Icon>
                <AiFillCheckCircle />
              </Icon>
              <p>{e.description}</p>
            </Item>
          ))}
        </DescriptionTaC>
        <DescriptionTaC>
          <TitleTaC>{cancellationPolicy[0].policy}</TitleTaC>
          {cancellationPolicy.map((e) => (
            <Item key={e.description}>
              <Icon>
                <AiFillCheckCircle />
              </Icon>
              <p>{e.description}</p>
            </Item>
          ))}
        </DescriptionTaC>
      </DescriptionContainer>
    </StyledTermsAndConditions>
  )
}

const StyledTermsAndConditions = styled.section`
  padding: 1rem 0.5rem;
  background-color: #fff;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
  }
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TitleTaC = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem 0;
`

const DescriptionTaC = styled.div`
  p {
    font-size: 14px;
    padding-bottom: 1rem;
    width: 100%;
  }
`

const Item = styled.div`
  display: flex;
`

const Icon = styled.div`
  width: 25px;
  padding-top: 1px;
  color: ${({ theme }) => theme.colors.orange};
`
