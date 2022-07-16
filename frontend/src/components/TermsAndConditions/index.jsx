import { AiFillCheckCircle } from 'react-icons/ai'
import {
  DescriptionContainer,
  DescriptionTaC,
  Icon,
  Item,
  StyledTermsAndConditions,
  TitleTaC,
} from './styles'
import { TermsAndConditionsSkeleton } from './TermsAndConditionsSkeleton'

function TermsAndConditions({ accommodation }) {
  if (!accommodation) return <TermsAndConditionsSkeleton />

  const { policyProductDTOSet } = accommodation
  const cancellationPolicy = policyProductDTOSet.filter(e => e.policy === 'Política de cancelación')
  const healthAndSecurity = policyProductDTOSet.filter(e => e.policy === 'Salud y seguridad')
  const houseRules = policyProductDTOSet.filter(e => e.policy === 'Normas de la casa')

  return (
    <StyledTermsAndConditions>
      <DescriptionContainer>
        <DescriptionTaC>
          <TitleTaC>{houseRules[0].policy}</TitleTaC>
          {houseRules.map(e => (
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
          {healthAndSecurity.map(e => (
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
          {cancellationPolicy.map(e => (
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

export { TermsAndConditions }
