import axios from 'axios'

const url = '/product'

export const getRandomAccommodations = async size => {
  const response = await axios.get(`${url}/getRandom/${size}`)
  const accommodations = response.data

  return accommodations
}

export const getAnAccommodation = async id => {
  const response = await axios.get(`${url}/${id}`)
  const accommodation = response.data

  return accommodation
}

export const getAccommodationsByCategory = async id => {
  const response = await axios.get(`${url}/getProductByCategoryID/${id}`)
  const accommodation = response.data

  return accommodation
}

export const getAccommodationsByCity = async city => {
  const response = await axios.get(`${url}/getProductByCityName/${city}`)
  const accommodation = response.data

  return accommodation
}

export const getAccommodationsByDate = async date => {
  const formatDate = date.map(e => {
    const day = e.getDate() < 10 ? '0' + e.getDate() : e.getDate()
    const month = e.getMonth() < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)
    const year = e.getFullYear()

    return [year, month, day].join('-')
  })

  const [start, finish] = formatDate

  const response = await axios.get(`/product/findProductForDate`, {
    params: {
      start: start,
      finish: finish,
    },
  })

  const accommodation = response.data
  return accommodation
}

export const getAccommodationsByDateAndCity = async (date, city) => {
  const formatDate = date.map(e => {
    const day = e.getDate() < 10 ? '0' + e.getDate() : e.getDate()
    const month = e.getMonth() < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)
    const year = e.getFullYear()

    return [year, month, day].join('-')
  })

  const [start, finish] = formatDate

  const response = await axios.get(`/product/findProductForDateAndCity`, {
    params: {
      start: start,
      finish: finish,
      city: city,
    },
  })

  const accommodation = response.data
  return accommodation
}

export const createAnAccommodation = async (accommodation, token) => {
  const body = accommodation

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.post(url, body, config)
    return response.data
  } catch (error) {
    return console.error(error)
  }
}
