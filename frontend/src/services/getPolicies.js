import axios from 'axios'

const url = '/policy'

export const getAllPolicies = async () => {
  const { data } = await axios.get(url)
  return data
}
