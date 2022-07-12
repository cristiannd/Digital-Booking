import { ButtonFilled } from 'components/Button'
import { useState } from 'react'
import styled from 'styled-components'
import ImageListContainer from '../ImageContainer/ImageListContainer'

const UploadImages = ({ imageList, setImageList }) => {
  const [image, setImage] = useState({ title: '', url: '', id: '' })

  const addImageToList = () => {
    const idGenerator = Math.random().toString(16).slice(2)

    setImageList(imageList.concat({ ...image, id: idGenerator }))
    setImage({ title: '', url: '', id: '' })
  }

  return (
    <StyledUploadImages>
      <div>
        <input
          type='text'
          placeholder='Descripción de la imagen'
          value={image.title}
          onChange={e => setImage({ ...image, title: e.target.value })}
        />
        <input
          type='text'
          placeholder='Url de imagen'
          value={image.url}
          onChange={e => setImage({ ...image, url: e.target.value })}
        />
        <ButtonFilled type='button' onClick={addImageToList}>
          +
        </ButtonFilled>
      </div>

      <ul>
        {imageList.map((image, index) => (
          <ImageListContainer
            key={index}
            image={image}
            setImage={setImage}
            imageList={imageList}
            setImageList={setImageList}
          />
        ))}
      </ul>
    </StyledUploadImages>
  )
}

export default UploadImages

const StyledUploadImages = styled.div`
  display: grid;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 1rem;

    & > button {
      width: 2.5rem;
      min-width: 2.5rem;
    }
  }

  & > ul {
    display: grid;
    gap: 1rem;
  }
`
