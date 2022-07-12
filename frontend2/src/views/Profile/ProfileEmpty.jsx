import React from 'react'
import styled from 'styled-components'

const ProfileEmpty = ({ children }) => {
  return <StyledProfileEmpty>{children}</StyledProfileEmpty>
}

export default ProfileEmpty

const StyledProfileEmpty = styled.div`
  background-color: ${props => props.theme.colors.orange};
  padding: 2rem;
  margin: auto;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.grey};
  color: #fff;
  box-shadow: 0 0 0.5rem 0 #00000035;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.viewport.tablet}) {
    padding: 2rem 5rem;
  }

  @media screen and (min-width: ${props => props.theme.viewport.desktop}) {
    padding: 2rem 10rem;
    font-size: 1.5rem;
  }
`

