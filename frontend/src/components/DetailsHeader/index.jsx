import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { DetailsHeaderSkeleton } from './DetailsHeaderSkeleton'
import { Button, StyledDetailsHeader } from './styles'

function DetailsHeader({ title, subtitle }) {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(-1)
  }

  if (!title && !subtitle) return <DetailsHeaderSkeleton />

  return (
    <StyledDetailsHeader>
      <div>
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>
      <Button onClick={goToHome}>
        <MdArrowBackIosNew />
      </Button>
    </StyledDetailsHeader>
  )
}

export { DetailsHeader }
