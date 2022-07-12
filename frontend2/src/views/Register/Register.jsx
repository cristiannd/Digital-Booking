import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { register } from 'services/user'

export const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [firstNameError, setFirstNameError] = useState(null)
  const [lastNameError, setLastNameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [password2Error, setPassword2Error] = useState(null)
  const [passwordShown, setPasswordShown] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const expressions = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,100}$/,
  }

  const messages = {
    empty: 'Este campo es obligatorio',
    invalidFirstName: 'Por favor, ingrese un nombre válido',
    invalidLastName: 'Por favor, ingrese un appelido válido',
    invalidEmail: 'Por favor, ingrese un correo electrónico válido',
    invalidPassword: 'La contraseña debe tener al menos 6 caracteres',
    differentPassword: 'Las contraseñas no coinciden',
    badCredentials: 'Por favor vuelva a intentarlo, sus credenciales son inválidas',
  }

  const validateFirstName = firstName => {
    if (firstName.length === 0) return setFirstNameError(messages.empty)
    if (!expressions.firstName.test(firstName)) return setFirstNameError(messages.invalidFirstName)

    setFirstNameError(null)
    return true
  }

  const validateLastName = lastName => {
    if (lastName.length === 0) return setLastNameError(messages.empty)
    if (!expressions.lastName.test(lastName)) return setLastNameError(messages.invalidLastName)

    setLastNameError(null)
    return true
  }

  const validateEmail = email => {
    if (email.length === 0) return setEmailError(messages.empty)
    if (!expressions.email.test(email)) return setEmailError(messages.invalidEmail)

    setEmailError(null)
    return true
  }

  const validatePassword = password => {
    if (password.length === 0) return setPasswordError(messages.empty)
    if (!expressions.password.test(password)) return setPasswordError(messages.invalidPassword)

    setPasswordError(null)
    return true
  }

  const validatePassword2 = (password, password2) => {
    if (password.length === 0) return setPassword2Error(messages.empty)
    if (password !== password2) return setPassword2Error(messages.differentPassword)

    setPassword2Error(null)
    return true
  }

  const handleRegister = async e => {
    e.preventDefault()

    validateFirstName(firstName)
    validateLastName(lastName)
    validateEmail(email)
    validatePassword(password)
    validatePassword2(password, password2)

    if (
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validatePassword2(password, password2)
    ) {
      const user = await register(firstName, lastName, email, password)
      if (user) navigate('/login', { state: location.state })
    }
  }

  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown)
  }

  const goToLoginPage = () => {
    navigate('/login', { state: location.state })
  }

  return (
    <RegisterStyled>
      <RegisterTitle>Crear cuenta</RegisterTitle>
      <RegisterForm onSubmit={handleRegister}>
        <FullnameContainer>
          <InputContainer>
            <LabelInput htmlFor='name'>Nombre</LabelInput>
            <FirstNameInput
              type='text'
              name='name'
              id='name'
              placeholder='Bruno'
              state={firstName}
              onChange={e => setFirstName(e.target.value)}
              firstNameError={firstNameError}
            />
            <ErrorMessage>{firstNameError}</ErrorMessage>
          </InputContainer>

          <InputContainer>
            <LabelInput htmlFor='lastname'>Apellido</LabelInput>
            <LastNameInput
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Rodriguez'
              state={lastName}
              onChange={e => setLastName(e.target.value)}
              lastNameError={lastNameError}
            />
            <ErrorMessage>{lastNameError}</ErrorMessage>
          </InputContainer>
        </FullnameContainer>

        <LabelInput htmlFor='email'>Correo electrónico</LabelInput>
        <EmailInput
          type='text'
          name='email'
          id='email'
          placeholder='brodriguez@gmail.com'
          state={email}
          onChange={e => setEmail(e.target.value)}
          emailError={emailError}
        />
        <ErrorMessage>{emailError}</ErrorMessage>

        <LabelInput htmlFor='password'>Contraseña</LabelInput>
        <PasswordInputContainer passwordError={passwordError}>
          <PasswordInput
            type={passwordShown ? 'text' : 'password'}
            name='password'
            id='password'
            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
            state={password}
            onChange={e => setPassword(e.target.value)}
          />
          <PasswordIcon onClick={toggleShowPassword}>
            {passwordShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </PasswordIcon>
        </PasswordInputContainer>
        <ErrorMessage>{passwordError}</ErrorMessage>

        <LabelInput htmlFor='password2'>Confirmar contraseña</LabelInput>
        <Password2Input
          type='password'
          name='password2'
          id='password2'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          state={password2}
          onChange={e => setPassword2(e.target.value)}
          password2Error={password2Error}
        />
        <ErrorMessage>{password2Error}</ErrorMessage>

        <ButtonSubmit>Crear cuenta</ButtonSubmit>
        <ButtonMessage>
          ¿Ya tenés una cuenta?{' '}
          <LinkToRegisterPage type='button' onClick={goToLoginPage}>Inicia sesión</LinkToRegisterPage>
        </ButtonMessage>
      </RegisterForm>
    </RegisterStyled>
  )
}

const RegisterStyled = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 93px - 58px);
  padding: 2rem 0;
`

const FullnameContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`

const InputContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const Input = styled.input`
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  width: 100%;
  border: 0px;
  padding-left: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px #00000029;

  :focus {
    outline: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
`

const FirstNameInput = styled(Input)`
  border: ${({ firstNameError, theme }) =>
    firstNameError !== null && `1px solid ${theme.colors.red}`};
  background-color: ${({ firstNameError, theme }) => firstNameError !== null && theme.colors.pink};
`

const LastNameInput = styled(Input)`
  border: ${({ lastNameError, theme }) =>
    lastNameError !== null && `1px solid ${theme.colors.red}`};
  background-color: ${({ lastNameError, theme }) => lastNameError !== null && theme.colors.pink};
`

const EmailInput = styled(Input)`
  border: ${({ emailError, theme }) => emailError !== null && `1px solid ${theme.colors.red}`};
  background-color: ${({ emailError, theme }) => emailError !== null && theme.colors.pink};
`

const Password2Input = styled(Input)`
  letter-spacing: 2px;
  ::placeholder {
    letter-spacing: 2px;
    font-size: 0.5rem;
  }

  border: ${({ password2Error, theme }) =>
    password2Error !== null && `1px solid ${theme.colors.red}`};
  background-color: ${({ password2Error, theme }) => password2Error !== null && theme.colors.pink};
`

const ErrorMessage = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.red};
  display: flex;
  justify-content: flex-end;
  height: 1rem;
`

const RegisterTitle = styled.h1`
  color: ${props => props.theme.colors.orange};
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
  }
`

const LabelInput = styled.label`
  margin: 16px 0px 8px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  position: relative;
`

const PasswordInputContainer = styled.div`
  height: 40px;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 0px #00000029;

  border: ${({ passwordError, theme }) =>
    passwordError !== null && `1px solid ${theme.colors.red}`};
  background-color: ${({ passwordError, theme }) => passwordError !== null && theme.colors.pink};
`

const PasswordInput = styled.input`
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  width: 100%;
  border: 0px;
  padding-left: 20px;
  border-radius: 5px;
  background-color: transparent;

  letter-spacing: 2px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    letter-spacing: 2px;
    font-size: 0.5rem;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
`

const PasswordIcon = styled.span`
  width: 15%;
  font-size: 24px;
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
  text-align: center;
`

const ButtonSubmit = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.colors.orange};
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`

const ButtonMessage = styled.p`
  margin-top: 7px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  position: relative;
`

const LinkToRegisterPage = styled.button`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.orange};
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const RegisterForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    width: 45%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    width: 450px;
  }
`

/* h6 {
            display: none;

            &.errorInvalidEmail {
                display: block;
                margin-top: 5px;
                font-size: 12px;
                font-weight: 500;
                color: ${(props) => props.theme.colors.red};
                display: flex;
                justify-content: flex-end;
            }
        } */

/* Tablet Landscape (iPad Mini) para agregar */
/* @media only screen and (min-width: 600px) and (orientation: landscape) {
    h1 {
      padding-top: 100px;
    }

    form {
      height: calc(100vh - 99px - 58px - 30px - 95px);
      width: 45%;

      label {
        margin: 21px 0px 11px;
      }

      button {
        margin-top: 55px;
      }
    }
  } */
