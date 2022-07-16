import { StyledButtonFilled, StyledLinkFilled } from './styles'

function ButtonFilled({ children, onClick, type }) {
  return (
    <StyledButtonFilled type={type} onClick={onClick}>
      {children}
    </StyledButtonFilled>
  )
}

function LinkFilled({ children, to }) {
  return <StyledLinkFilled to={to}>{children}</StyledLinkFilled>
}

export { ButtonFilled, LinkFilled }
