import styled from 'styled-components'

const StyledFeaturesIcons = styled.div`
  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey};
  }
`

const StyledFeaturesIconsAndNames = styled.p`
  text-transform: capitalize;
`

export { StyledFeaturesIcons, StyledFeaturesIconsAndNames }
