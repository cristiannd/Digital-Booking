import { ButtonFilled } from 'components/Button'
import { AiFillEdit, AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

const ImageListContainer = ({ image, setImage, imageList, setImageList }) => {
  const deleteAnImageHandler = () => {
    const newArr = imageList.filter(e => e.id !== image.id)
    setImageList(newArr)
  }

  const modifyAnImageHandler = () => {
    setImage(image)
    deleteAnImageHandler()
  }

  return (
    <StyledImageListContainer>
      <span>
        <AiOutlineCheckCircle />
      </span>
      <p>
        <span>{image.title}:</span> {image.url}
      </p>
      <ButtonFilled type='button' onClick={modifyAnImageHandler}>
        <AiFillEdit />
      </ButtonFilled>
      <ButtonFilled type='button' onClick={deleteAnImageHandler}>
        <AiOutlineClose />
      </ButtonFilled>
    </StyledImageListContainer>
  )
}

export default ImageListContainer

const StyledImageListContainer = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0.5rem 0 #00000085;
  background-color: ${props => props.theme.colors.lightGrey};
  width: 100%;
  overflow: hidden;

  & > span {
    display: flex;
    color: ${props => props.theme.colors.orange};
    padding-top: 2px;
  }

  & > p {
    color: ${props => props.theme.colors.grey};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    & > span {
      font-weight: 700;
    }
  }

  & > button {
    display: grid;
    place-content: center;
    min-width: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.orange};
  }
`
