import axios from 'axios'

export const getAllFeatures = async () => {
  const response = await axios.get('/feature')
  return response.data
}


