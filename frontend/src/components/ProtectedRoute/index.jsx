import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from 'context/UserContext'
import { UserLocalStorage } from 'services/localStorage'

function ProtectedRoute({ children, redirectPath, permissionsForLoggedUser }) {
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

export { ProtectedRoute }
