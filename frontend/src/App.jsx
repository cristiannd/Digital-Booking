import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Theme } from './assets/styles/Theme'
import { ScrollToTop } from 'utils/ScrollToTop'
import { UserContextProvider } from './context/UserContext'
import { DetailsContextProvider } from 'context/DetailsContext'
import { ProtectedRoute } from 'components/ProtectedRoute'
import { SuccessMessage } from 'components/SuccessMessage'
import { Home } from './views/Home/Home'
import { Login } from './views/Login/Login'
import { Register } from './views/Register/Register'
import { Accommodation } from './views/Details/Accommodation'
import { Reservation } from 'views/Details/Reservation/Reservation'
import { Main } from 'views/Main/Main'
import Details from 'views/Details'
import { Profile } from 'views/Profile/Profile'
import Management from 'views/Management'
import ProfileReservations from 'views/Profile/ProfileReservations'
import ProfileFavorites from 'views/Profile/ProfileFavorites'
import ProfileMe from 'views/Profile/ProfileMe'
import NotFound from 'views/NotFound'

function App() {
  return (
    <UserContextProvider>
      <DetailsContextProvider>
        <Theme>
          <GlobalStyle />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Main />}>
              <Route index element={<Home />} />
              <Route
                path='login'
                element={
                  <ProtectedRoute redirectPath='/' permissionsForLoggedUser={false}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path='register'
                element={
                  <ProtectedRoute redirectPath='/' permissionsForLoggedUser={false}>
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route path='product/:accommodationId' element={<Details />}>
                <Route index element={<Accommodation />} />
                <Route
                  path='reservation'
                  element={
                    <ProtectedRoute redirectPath='/login' permissionsForLoggedUser={true}>
                      <Reservation />
                    </ProtectedRoute>
                  }
                ></Route>
              </Route>
              <Route
                path='successful-booking'
                element={
                  <SuccessMessage
                    title='¡Muchas gracias!'
                    subtitle='Su reserva se ha realizado con éxito'
                    button='OK'
                    to='/'
                  />
                }
              />
              <Route
                path='profile'
                element={
                  <ProtectedRoute redirectPath='/' permissionsForLoggedUser={true}>
                    <Profile />
                  </ProtectedRoute>
                }
              >
                <Route index element={<ProfileMe />} />
                <Route path='reservations' element={<ProfileReservations />} />
                <Route path='favorites' element={<ProfileFavorites />} />
              </Route>
              <Route path='management' element={<Management />} />
              <Route
                path='management/successful-creation'
                element={
                  <SuccessMessage
                    subtitle='Tu propiedad se ha creado con éxito'
                    button='Volver'
                    to='/'
                  />
                }
              />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Theme>
      </DetailsContextProvider>
    </UserContextProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
    font-size: 16px;
  }
`
