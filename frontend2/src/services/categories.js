import axios from 'axios'

const url = '/categories'

export const getAllCategories = async () => {
  const response = await axios.get(url)
  const categories = response.data

  return categories
}