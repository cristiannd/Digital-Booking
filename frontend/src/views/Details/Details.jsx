import Context from 'context/DetailsContext'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getAnAccommodation } from 'services/accommodations'
import { DetailsHeader } from '../../components/DetailsHeader/DetailsHeader'

export const Details = () => {
  const [date, setDate] = useState(null)
  const { accommodation, setAccommodation } = useContext(Context)
  const { accommodationId } = useParams()

  const getAccommodation = useCallback(async () => {
    const response = await getAnAccommodation(accommodationId)
    setAccommodation(response)
  }, [accommodationId, setAccommodation])

  useEffect(() => {
    getAccommodation()
  }, [getAccommodation])
  console.log(accommodation)
  return (
    <>
      <DetailsHeader
        title={accommodation?.name}
        subtitle={accommodation?.categoryDTO.singularTitle}
      />
      <Outlet context={{ accommodation, date, setDate }} />
    </>
  )
}
