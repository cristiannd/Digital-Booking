import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'

const StyledStringRating = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.grey};
`

const StyledNumberRating = styled.div`
  width: 2.5rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const StyledStarRating = styled.div`
  width: min-content;
  display: flex;
`

const Icon = styled(AiFillStar)`
  color: ${props => (props.stardisable ? '#bebebe' : props.theme.colors.orange)};
`

export { StyledStringRating, StyledNumberRating, StyledStarRating, Icon }
