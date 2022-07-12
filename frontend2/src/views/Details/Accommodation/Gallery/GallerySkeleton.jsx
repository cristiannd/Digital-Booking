import styled from 'styled-components'

export const GallerySkeleton = () => {
  return (
    <>
      <ShareAndLike>
        <div></div>
        <div></div>
      </ShareAndLike>
      <StyledGallerySkeleton>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledGallerySkeleton>
    </>
  )
}

const ShareAndLike = styled.div`
  height: 50px;
  width: 100%;
  padding: .5rem 10rem;
  display: flex;
  gap: .5rem;

  & > div {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    animation: skeleton-loading 1s linear infinite alternate;
  }

`

const StyledGallerySkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  padding: 0 10rem;
  gap: 1rem;

  & > div {
    border-radius: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
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
