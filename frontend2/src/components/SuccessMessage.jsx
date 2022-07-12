import { LinkFilled } from 'components/Button'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import styled from 'styled-components'

const SuccessMessage = ({ title, subtitle, button, to }) => {
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

export default SuccessMessage

const StyledSuccessMessage = styled.section`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 1rem 0 #00000050;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 5px;
  width: 90%;
  background-color: ${props => props.theme.colors.orange};
  color: #fff;

  & > p:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & > p:nth-child(2) {
    font-size: 1rem;
    font-weight: 700;
  }

  & > a {
    border: 1px solid #fff;
    width: 200px;

    &:hover {
      color: ${props => props.theme.colors.orange};
      background-color: #fff;
    }
  }

  & > svg {
    font-size: 4rem;
    color: #fff;
  }
`