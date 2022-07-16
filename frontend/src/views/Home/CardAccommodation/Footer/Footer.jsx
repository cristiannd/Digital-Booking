import styled from 'styled-components'
import { ButtonFilled } from 'components/Button'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DetailsContext } from 'context/DetailsContext'

export const Footer = ({ description, id }) => {
  const { accommodation, setAccommodation } = useContext(DetailsContext)
  const navigate = useNavigate()

  const viewMoreHandler = () => {
    if (id !== accommodation?.id) setAccommodation(null)

    navigate(`/product/${id}`)
  }

  return (
    <StyledFooter>
      <Description>{description}</Description>
      <ButtonFilled onClick={viewMoreHandler}>Ver más</ButtonFilled>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 500;

  text-overflow: ellipsis;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
