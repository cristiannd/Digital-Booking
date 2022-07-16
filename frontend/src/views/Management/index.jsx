import { useContext } from 'react'
import SearchInput from 'views/Management/PlacesSearch'
import { useEffect, useState } from 'react'
import { getAllCities } from 'services/cities'
import styled from 'styled-components'
import FeaturesSearch from './FeaturesSearch'
import { ButtonFilled } from 'components/Button'
import { AiOutlineClose } from 'react-icons/ai'
import PolicyContainer from './PolicyContainer/PolicyContainer'
import { getAllCategories } from 'services/categories'
import { getAllFeatures } from 'services/management'
import { getAllPolicies } from 'services/getPolicies'
import UploadImages from './UploadImages'
import { createAnAccommodation } from 'services/accommodations'
import { UserContext } from 'context/UserContext'
import { useNavigate } from 'react-router-dom'

const Management = () => {
  const [accommodationName, setAccommodationName] = useState('')
  const [category, setCategory] = useState(undefined)
  const [cities, setCities] = useState([])
  const [address, setAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedFeature, setSelectedFeature] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [featureList, setFeatureList] = useState([])
  const [imageList, setImageList] = useState([])
  const [policiesDB, setPoliciesDB] = useState([])
  const [accommodationPolicyList, setAccommodationPolicyList] = useState([])

  const { loggedUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getCities()
    getCategories()
    getFeatures()
    getPolicies()
  }, [])

  const getCities = async () => {
    const response = await getAllCities()
    setCities(response)
  }

  const getCategories = async () => {
    const response = await getAllCategories()
    setCategories(response)
  }

  const getFeatures = async () => {
    const response = await getAllFeatures()
    setFeatureList(response)
  }

  const getPolicies = async () => {
    const response = await getAllPolicies()
    setPoliciesDB(response)
  }

  const removeSelectedFeatureHandler = id => {
    setSelectedFeatures(selectedFeatures.filter(feature => feature.id !== id))
  }

  const deleteAPolicy = id => {
    const newArr = accommodationPolicyList.filter(e => e.id !== id)
    setAccommodationPolicyList(newArr)
  }

  const formHandler = e => {
    e.preventDefault()

    const policyProductArray = accommodationPolicyList.map(policy => {
      delete policy.id
      return policy
    })

    const imageArray = imageList.map(image => {
      delete image.id
      return image
    })

    const accommodation = {
      name: accommodationName,
      descriptionTitle: title,
      description: description,
      category: Number(category),
      address,
      addressNumber,
      latitude,
      longitude,
      city: selectedCity.id,
      featuresArray: selectedFeatures.map(e => e.id),
      policyProductArray,
      imageArray,
    }

    createAnAccommodation(accommodation, loggedUser.jwt)
      .then(() => navigate('successful-creation'))
      .catch(err => console.error(err))
  }

  return (
    <StyledManagement>
      <h2>Crear propiedad</h2>
      <form onSubmit={formHandler}>
        <div>
          <input
            type='text'
            placeholder='Nombre de la propiedad'
            required
            value={accommodationName}
            onChange={e => setAccommodationName(e.target.value)}
          />
          <select defaultValue='DEFAULT' required onChange={e => setCategory(e.target.value)}>
            <option value='DEFAULT' disabled hidden>
              Selecciona una categoría
            </option>
            {categories.map(e => (
              <option key={e.id} value={e.id}>
                {e.singularTitle}
              </option>
            ))}
          </select>
          <div>
            <input
              type='text'
              placeholder='Dirección'
              required
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <input
              type='number'
              placeholder='Altura'
              required
              value={addressNumber}
              onChange={e => setAddressNumber(e.target.value)}
            />
          </div>
          <SearchInput
            data={cities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
          <input
            type='text'
            placeholder='Longitud'
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
          <input
            type='text'
            placeholder='Latitud'
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>
        <input
          type='text'
          placeholder='Título'
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          cols='30'
          rows='10'
          placeholder='Descripción'
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <h3>Agregar atributos</h3>
        <AddFeaturesContainer>
          <FeaturesSearch
            data={featureList}
            selectedFeature={selectedFeature}
            setSelectedFeature={setSelectedFeature}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
          />
        </AddFeaturesContainer>
        <SelectedFeatures>
          {selectedFeatures.map(e => (
            <div key={e.id}>
              <span>{e.feature}</span>
              <button type='button' onClick={() => removeSelectedFeatureHandler(e.id)}>
                <AiOutlineClose />
              </button>
            </div>
          ))}
        </SelectedFeatures>

        <h3>Políticas del producto</h3>
        {policiesDB.map((policy, index) => (
          <TitleAndPolicy key={index}>
            <h4>{policy.policy}</h4>
            <PolicyContainer
              policyId={policy.id}
              accommodationPolicyList={accommodationPolicyList}
              setAccommodationPolicyList={setAccommodationPolicyList}
              deleteAPolicy={deleteAPolicy}
            />
          </TitleAndPolicy>
        ))}

        <h3>Cargar imágenes</h3>
        <UploadImages imageList={imageList} setImageList={setImageList} />

        <ButtonFilled type='submit'>Crear</ButtonFilled>
      </form>
    </StyledManagement>
  )
}

export default Management

const StyledManagement = styled.div`
  & > h2 {
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
    background-color: ${props => props.theme.colors.lightGrey};

    @media screen and (min-width: ${props => props.theme.viewport.desktop}) {
      max-width: 1250px;
      margin: auto;
    }
  }

  & > form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;

    @media screen and (min-width: ${props => props.theme.viewport.desktop}) {
      max-width: 1250px;
      margin: auto;
      padding: 1rem 0;
    }

    & > h3 {
      font-size: 1.5rem;
      font-weight: 700;
      padding-top: 2rem;
      border-bottom: 2px solid black;
    }

    & > div > h4 {
      background-color: ${props => props.theme.colors.lightGrey};
      width: fit-content;
      padding: 0 0.5rem;
      margin: 1rem 0 0.5rem;
    }

    & > div:nth-child(1) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      & > div {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 1rem;
      }

      @media screen and (min-width: ${props => props.theme.viewport.tablet}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    & > input,
    & > div > input,
    & > div > div > input,
    & > div > div > div > input,
    & > div > select,
    & > textarea {
      border-radius: 0.5rem;
      border: none;
      min-height: 2.5rem;
      padding-left: 1rem;
      width: 100%;
      color: ${({ theme }) => theme.colors.grey};
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 0 0.5rem 0 #00000055;

      ::placeholder {
        color: #aaabbb;
        font-size: 14px;
        font-weight: 700;
      }

      :focus {
        outline: 1px solid #00000055;
      }
    }

    & > textarea {
      padding-top: 1rem;
    }

    & > button[type='submit'] {
      @media screen and (min-width: ${props => props.theme.viewport.tablet}) {
        width: 500px;
        margin: 0 auto;
      }
    }
  }
`

const AddFeaturesContainer = styled.div`
  display: flex;
  place-content: center;
  gap: 1rem;
  width: 100%;

  & > button {
    width: 2.5rem;
    min-width: 2.5rem;
  }
`

const SelectedFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > div {
    display: flex;
    place-content: center;
    gap: 0.5rem;
    background-color: ${props => props.theme.colors.orange};
    border-radius: 1rem;
    padding: 0.5rem;

    & > span {
      color: #fff;
    }

    & > button {
      display: flex;
      background-color: transparent;
      border-radius: 100%;
      color: #fff;
      border: 2px solid #fff;

      &:hover {
        color: black;
        border: 2px solid black;
      }
    }
  }
`

const TitleAndPolicy = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  padding: 1rem;
`
