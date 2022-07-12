import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'

const ProfileMe = () => {
  const { loggedUser } = useOutletContext()

  return (
    <StyledProfileMe>
      <section>
        <div>{loggedUser?.name[0]}{loggedUser?.lastname[0]}</div>
        <div>
          <div>
            <span>Nombre</span>
            <span>{loggedUser.name}</span>
          </div>
          <div>
            <span>Apellido</span>
            <span>{loggedUser.lastname}</span>
          </div>
          <div>
            <span>Correo electrónico</span>
            <span>{loggedUser.email}</span>
          </div>
        </div>
      </section>
    </StyledProfileMe>
  )
}

export default ProfileMe

const StyledProfileMe = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.grey};
  padding: 2rem;
  min-height: calc(100vh - 93px - 58px - 2.5rem);

  & > section {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: ${props => props.theme.viewport.tablet}) {
      flex-direction: column;
      align-items: flex-start;
    }

    & > div:nth-child(1) {
      min-width: 10rem;
      min-height: 10rem;
      height: 10rem;
      border-radius: 100%;
      display: grid;
      place-content: center;
      font-size: 5rem;
      background-color: #fff;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      & > div {
        display: flex;
        flex-direction: column;

        & > span {
          font-size: 1rem;

          &:nth-child(1) {
            font-weight: 700;
            background-color: #fff;
            width: fit-content;
            padding: 0 0.5rem;
          }

          &:nth-child(2) {
            color: #fff;
          }
        }
      }
    }
  }
`
