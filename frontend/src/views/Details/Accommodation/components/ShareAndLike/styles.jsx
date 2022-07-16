import styled from 'styled-components'

const StyledShareAndLike = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  font-size: 1rem;
  filter: drop-shadow(0 0 3px #0000006c);

  button {
    background-color: transparent;
    border: none;
    position: relative;

    & > svg {
      color: #fff;
      font-size: 2rem;
      margin-right: 1rem;
      transition: 0.25s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
        transform: scale(1.1);
      }

      @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    position: relative;
    left: 0;
    top: 0;
    padding: 0.5rem 2rem;
    filter: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 0.5rem 10rem;
  }
`

export { StyledShareAndLike }
