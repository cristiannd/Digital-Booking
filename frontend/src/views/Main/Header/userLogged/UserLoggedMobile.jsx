import { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from 'context/UserContext'

export const UserLoggedMobile = ({ navigateToProfileHandler }) => {
  const { loggedUser } = useContext(UserContext)

  return (
    <UserLoggedMobileStyled>
      <button onClick={navigateToProfileHandler}>
        {loggedUser.name[0]}
        {loggedUser.lastname[0]}
      </button>
      <p>
        Hola,{' '}
        <span>
          {loggedUser.name} {loggedUser.lastname}
        </span>
      </p>
    </UserLoggedMobileStyled>
  )
}

const UserLoggedMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  & > button {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fff;
    border: none;
    border-radius: 100%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease-out;

    :hover {
      background-color: ${props => props.theme.colors.lightGrey};
      transform: scale(1.1);
    }
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      color: ${({ theme }) => theme.colors.black};
      text-transform: capitalize;
    }
  }
`
