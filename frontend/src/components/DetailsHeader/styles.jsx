import styled from 'styled-components'

const StyledDetailsHeader = styled.section`
  background-color: ${({ theme }) => theme.colors.grey};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  h3 {
    font-size: 14px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
  }

  svg {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.tablet}) {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewport.desktop}) {
    padding: 1rem 10rem;
  }
`

const Button = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  border-radius: 10px;
  transition: 0.25s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey};
    transform: scale(1.1);
  }
`

export { StyledDetailsHeader, Button }
