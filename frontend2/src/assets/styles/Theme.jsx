import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    orange: '#F0572D',
    lightGrey: '#dfe4ea',
    grey: '#31363f',
    black: '#191b1d',
    red: '#ff0000',
    pink: '#ffe1e1',
  },
  viewport: {
    tablet: '768px',
    desktop: '1366px',
  },
  padding: {
    mobile: '0.5rem',
    tablet: '2rem',
  },
}

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
