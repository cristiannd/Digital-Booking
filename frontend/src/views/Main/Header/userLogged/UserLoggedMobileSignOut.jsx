import React from 'react'
import styled from 'styled-components'

export const UserLoggedMobileSignOut = ({ singOutHandler }) => {
  return (
    <UserLoggedMobileSignOutStyled>
      <p>
        ¿Desea <button onClick={singOutHandler}>cerrar sesión</button>?
      </p>
      <div></div>
    </UserLoggedMobileSignOutStyled>
  )
}

const UserLoggedMobileSignOutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
    height: 1rem;
    width: 100%;
    text-align: right;

    button {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.orange};
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
  }

  div {
    width: calc(100% - 2rem);
    border: 1px solid #000;
  }
`
