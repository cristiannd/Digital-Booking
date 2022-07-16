import { LinkFilled } from 'components/Button'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import StyledSuccessMessage from './styles'

function SuccessMessage({ title, subtitle, button, to }) {
  return (
    <StyledSuccessMessage>
      <BsFillPatchCheckFill />
      <p>{title}</p>
      <p>{subtitle}</p>
      <LinkFilled to={to} replace>
        {button}
      </LinkFilled>
    </StyledSuccessMessage>
  )
}

export { SuccessMessage }
