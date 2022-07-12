import axios from 'axios'

const url = '/reservation'

export const createReservation = async (user, product, date, startTime, token) => {
  const formatDate = date.map(e => {
    const day = e.getDate() < 10 ? '0' + e.getDate() : e.getDate()
    const month = e.getMonth() < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)
    const year = e.getFullYear()

    return [year, month, day].join('-')
  })

  const [startDay, finishDay] = formatDate

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const body = {
    user,
    product,
    startDay,
    finishDay,
    startTime,
  }

  try {
    const response = await axios.post(url, body, config)
    const accommodations = response.data
    return accommodations
  } catch (error) {
    console.error(error)
  }
}

export const findReservationByUserId = async id => {
  try {
    const response = await axios.get(`${url}/findByUserId/${id}`)
    const reservations = response.data

    return reservations
  } catch (error) {
    console.error(error)
  }
}
