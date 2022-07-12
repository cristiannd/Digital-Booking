import { createContext, useEffect, useState } from 'react'
import { UserLocalStorage } from 'services/localStorage'

const UserContext = createContext({})

export function LoggedUserContext({ children }) {
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    const user = UserLocalStorage.get()
    setLoggedUser(user)
  }, [])

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
