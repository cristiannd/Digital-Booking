import axios from 'axios'

const url = "/city"

export const getAllCities = async () => {
    const response = await axios.get(url)
    const cities = response.data

    return cities
}

