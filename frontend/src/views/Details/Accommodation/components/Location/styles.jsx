import styled from 'styled-components'

const StyledLocation = styled.section`
  padding: 1rem 0.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
  }
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 1rem;
`

const MapContainer = styled.div`
  height: 400px;
`

export { StyledLocation, Description, MapContainer }
