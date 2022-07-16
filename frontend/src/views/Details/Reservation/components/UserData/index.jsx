import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { UserDataSkeleton } from './UserDataSkeleton'
import { StyledInput, StyledLabel, StyledSelect, StyledUserData } from './styles'

export const UserData = () => {
  const { loggedUser } = useContext(UserContext)

  if (!loggedUser) return <UserDataSkeleton />

  return (
    <StyledUserData>
      <StyledInput>
        <StyledLabel htmlFor='first-name'>Nombre</StyledLabel>
        <input
          type='text'
          id='first-name'
          placeholder='Ingrese su nombre'
          value={loggedUser.name}
          disabled
          required
        />
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor='last-name'>Apellido</StyledLabel>
        <input
          type='text'
          id='last-name'
          placeholder='Ingrese su apellido'
          value={loggedUser.lastname}
          disabled
          required
        />
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor='email'>Correo electrónico</StyledLabel>
        <input
          type='email'
          id='email'
          placeholder='Ingrese su correo electrónico'
          value={loggedUser.email}
          disabled
          required
        />
      </StyledInput>
      <StyledSelect>
        <StyledLabel htmlFor='city'>Ciudad</StyledLabel>
        <input type='text' id='city' placeholder='Elija su ciudad de residencia' required />
      </StyledSelect>
    </StyledUserData>
  )
}
