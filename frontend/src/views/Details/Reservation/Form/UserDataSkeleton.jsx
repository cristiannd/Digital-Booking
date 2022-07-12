import styled from 'styled-components'

export const UserDataSkeleton = () => {
  return (
    <StyledUserDataSkeleton>
      <div>
        <StyledLabel>Nombre</StyledLabel>
        <div />
      </div>
      <div>
        <StyledLabel>Apellido</StyledLabel>
        <div />
      </div>
      <div>
        <StyledLabel>Correo electrónico</StyledLabel>
        <div />
      </div>
      <div>
        <StyledLabel>Ciudad</StyledLabel>
        <div />
      </div>
    </StyledUserDataSkeleton>
  )
}

const StyledUserDataSkeleton = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 #0000002d;

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      width: 100%;
      height: 2.5rem;
      border-radius: 5px;
      animation: skeleton-loading 1s linear infinite alternate;
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`

const StyledLabel = styled.label`
  font-weight: 700;
  padding-bottom: 5px;
`
