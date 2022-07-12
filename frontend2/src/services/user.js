import axios from 'axios'

export const login = async (email, password) => {
  const url = '/login'
  const options = { email, password }

  try {
    const response = await axios.post(url, options)
    const user = response.data
    return user
  } catch (error) {
    return null
  }
}

export const register = async (firstname, lastname, email, password) => {
  const url = '/user'
  const options = {
    name: firstname,
    lastname,
    email,
    password,
  }

  try {
    const response = await axios.post(url, options)
    const user = response.data
    return user
  } catch (error) {
    return null
  }
}

export const getAUser = async id => {
  const url = `/user/${id}`

  try {
    const response = await axios.get(url)
    const user = response.data
    return user
  } catch (error) {
    return null
  }
}

export const saveFavoriteAccommodation = async (accommodationId, userId, token) => {
  const url = '/favorite'
  const body = {
    product: accommodationId,
    user: userId,
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.post(url, body, config)
    const user = response.data
    return user
  } catch (error) {
    return null
  }
}

export const deleteFavoriteAccommodation = async (accommodationId, userId, token) => {
  const url = '/favorite'
  const body = {
    productId: accommodationId,
    userId: userId,
  }
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  try {
    const response = await axios.delete(`${url}/productIdAndUserId`, {
      headers: headers,
      params: body,
    })
    const user = response.data
    return user
  } catch (error) {
    return null
  }
}
