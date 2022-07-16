import { StyledSubtitle } from './styles'

function Subtitle({ children, background, view }) {
  return (
    <StyledSubtitle view={view} background={background}>
      {children}
    </StyledSubtitle>
  )
}

export { Subtitle }
