import styled from 'styled-components'

export const Subtitle = ({ children, background, view }) => {
  return (
    <SubtitleStyled view={view} background={background}>
      {children}
    </SubtitleStyled>
  )
}

const SubtitleStyled = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${({ theme, background }) => {
    if (background === 'lightGrey') return theme.colors.lightGrey
    if (background === 'white') return '#fff'
  }};
  padding: ${({ view }) => {
    if (view === 'accommodation') return '2rem 0.5rem 0.5rem'
    if (view === 'reservation') return '2rem 0rem 0.5rem'
  }};

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: ${({ view }) => {
      if (view === 'accommodation') return '2rem 2rem 0.5rem'
    }};
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: ${({ view }) => {
      if (view === 'accommodation') return '2rem 10rem 0.5rem'
      if (view === 'reservation') return '2rem 0rem 0.5rem'
    }};
  }
`
