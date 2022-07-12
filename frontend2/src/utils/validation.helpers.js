const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  lastname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{6,100}$/,
}

const messages = {
  empty: 'Este campo es obligatorio',
  invalidEmail: 'Por favor ingrese un correo electrónico válido',
  invalidPassword: 'La contraseña debe tener al menos 6 caracteres',
  badCredentials:
    'Por favor vuelva a intentarlo, sus credenciales son inválidas',
}

export const validateEmail = (email) => {
  if (email.length === 0) return messages.empty
  if (!expressions.email.test(email)) return messages.invalidEmail

  return null
}

export const validatePassword = (password) => {
  if (password.length === 0) return messages.empty
  if (!expressions.password.test(password)) return messages.invalidPassword

  return null
}
