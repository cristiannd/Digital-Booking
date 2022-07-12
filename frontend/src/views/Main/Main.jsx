import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Outlet />
      <Footer />
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`