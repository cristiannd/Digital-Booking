import UserContext from 'context/LoggedUserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserLocalStorage } from 'services/localStorage'

export const ProtectedRoute = ({ children, redirectPath, permissionsForLoggedUser }) => {
  const { loggedUser } = useContext(UserContext)
  const user = UserLocalStorage.get()

  if (!permissionsForLoggedUser && (loggedUser || user)) {
    return <Navigate to={redirectPath} replace />
  }

  if (permissionsForLoggedUser && !loggedUser && !user) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
