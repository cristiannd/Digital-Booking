import styled from 'styled-components'

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  padding: 0 10rem;
  gap: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`

const ViewMoreContainer = styled.div`
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  & > button {
    position: absolute;
    width: 100%;
    height: 100%;
    font-weight: 700;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 0.5;
    border: none;
    border-radius: 5px;
    text-decoration: underline;
    transition: 0.25s ease;
    border-radius: 1rem;

    :hover {
      opacity: 0.8;
    }
  }
`

export { StyledGallery, ViewMoreContainer }
