import { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import UserContext from 'context/LoggedUserContext'
import { ButtonFilled } from 'components/Button'
import { validateEmail, validatePassword } from 'utils/validation.helpers'
import { UserLocalStorage } from 'services/localStorage'
import { login } from 'services/user'

const userRegistered = {
  email: 'micaela@gmail.com',
  password: '123123',
  firstName: 'micaela',
  lastName: 'gomez',
}

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [passwordShown, setPasswordShown] = useState(false)
  const [badCredentials, setBadCredentials] = useState(null)

  const { setLoggedUser } = useContext(UserContext)

  const navigate = useNavigate()
  const location = useLocation()

  const messages = {
    empty: 'Este campo es obligatorio',
    invalidEmail: 'Por favor ingrese un correo electrónico válido',
    invalidPassword: 'La contraseña debe tener al menos 6 caracteres',
    badCredentials:
      'Por favor vuelva a intentarlo, sus credenciales son inválidas',
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    setEmailError(validateEmail(email))
    setPasswordError(validatePassword(password))

    if (!validateEmail(email) && !validatePassword(password)) {
      const user = await login(email, password)
      if (!user) return setBadCredentials(messages.badCredentials)

      UserLocalStorage.set(user)
      setLoggedUser(user)

      if (location.state) navigate(location.state)
      else navigate('/')
    }
  }

  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown)
  }

  const goToRegisterPage = () => {
    navigate('/register', {state: location.state})
  }

  return (
    <LoginStyled>
      {location.state && (
        <ErrorYouMustLogIn>
          <span>!</span>
          <span>Para realizar una reserva necesitas estar logueado</span>
        </ErrorYouMustLogIn>
      )}
      <LoginTitle>Iniciar sesión</LoginTitle>
      <LoginForm onSubmit={(e) => handleLogin(e, userRegistered)}>
        <LabelInput htmlFor="email">Correo electrónico</LabelInput>
        <EmailInput
          type="text"
          name="email"
          id="email"
          placeholder="brodriguez@gmail.com"
          state={email}
          onChange={(e) => setEmail(e.target.value)}
          emailError={emailError}
          badCredentials={badCredentials}
        />
        <ErrorMessage>{emailError}</ErrorMessage>

        <LabelInput htmlFor="password">Contraseña</LabelInput>
        <PasswordInputContainer
          passwordError={passwordError}
          badCredentials={badCredentials}
        >
          <PasswordInput
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            state={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordIcon onClick={toggleShowPassword}>
            {passwordShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </PasswordIcon>
        </PasswordInputContainer>
        <ErrorMessage>{passwordError}</ErrorMessage>
        <ErrorCredentialsMessage>
          {emailError === null && passwordError === null && badCredentials}
        </ErrorCredentialsMessage>
        <ButtonFilled type="submit">Ingresar</ButtonFilled>
        <ButtonMessage>
          ¿Aún no tenés cuenta?{' '}
          <LinkToRegisterPage type='button' onClick={goToRegisterPage}>Registrate</LinkToRegisterPage>
        </ButtonMessage>
      </LoginForm>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 93px - 58px);
  padding: 1rem 0;
`

const EmailInput = styled.input`
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  width: 100%;
  border: 0px;
  padding-left: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px #00000029;

  border: ${({ emailError, badCredentials, theme }) =>
    (emailError !== null || badCredentials !== null) &&
    `1px solid ${theme.colors.red}`};
  background-color: ${({ emailError, badCredentials, theme }) =>
    (emailError !== null || badCredentials !== null) && theme.colors.pink};

  :focus {
    outline: none;
  }
`

const ErrorMessage = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
  display: flex;
  justify-content: flex-end;
  height: 1rem;
`

const ErrorCredentialsMessage = styled(ErrorMessage)`
  justify-content: center;
`

const ErrorYouMustLogIn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.pink};
  padding: 1rem;
  box-shadow: 0 0 10px 0 #00000035;
  border-radius: 5px;
  color: #b00020;
  font-weight: 700;
  margin: 0 1rem 2rem;

  & > span:nth-child(1) {
    display: grid;
    place-content: center;
    width: 25px;
    height: 25px;
    color: #fff;
    background-color: #b00020;
    border-radius: 100%;
  }

  & > span:nth-child(2) {
    width: calc(100% - 25px - 0.5rem);
  }
`

const LoginTitle = styled.h1`
  color: ${(props) => props.theme.colors.orange};
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

  border: ${({ passwordError, badCredentials, theme }) =>
    (passwordError !== null || badCredentials !== null) &&
    `1px solid ${theme.colors.red}`};
  background-color: ${({ passwordError, badCredentials, theme }) =>
    (passwordError !== null || badCredentials !== null) && theme.colors.pink};
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
`

const PasswordIcon = styled.span`
  width: 15%;
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  text-align: center;
`

const ButtonMessage = styled.p`
  margin-top: 7px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  position: relative;
`

const LinkToRegisterPage = styled.button`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.orange};
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const LoginForm = styled.form`
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
