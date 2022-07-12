import styled from 'styled-components'

export const CardCategorySkeleton = () => {
  return (
    <StyledCardCategorySkeleton>
      <CardImg />
      <AccommodationDate>
        <AccommodationType />
        <AccommodationsNumber />
      </AccommodationDate>
    </StyledCardCategorySkeleton>
  )
}

const StyledCardCategorySkeleton = styled.div`
  height: 275px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000029;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`

const CardImg = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  animation: skeleton-loading 1s linear infinite alternate;
`

const AccommodationDate = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  padding-left: 10px;
  `

const AccommodationType = styled.div`
  width: 5rem;
  height: 1rem;
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
  `

const AccommodationsNumber = styled.div`
  width: 4rem;
  height: 0.5rem;
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
`
