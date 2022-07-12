import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <StyledNotFound>
      <IoWarningOutline />
      <span>La página no existe, intenté ir a otra sección</span>
      <Link to='/'>Ir al inicio</Link>
    </StyledNotFound>
  )
}

export default NotFound

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${props => props.theme.colors.grey};
  margin: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem 0 #00000025;
  color: #fff;

  & > svg {
    font-size: 4rem;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  & > a {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    border: 2px solid #fff;
    padding: 1rem;
    border-radius: 1rem;
    text-decoration: none;
    
    &:hover {
      border: 2px solid ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.orange};
    }
  }
`
