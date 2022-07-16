import { useCallback, useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { DetailsHeader } from 'components/DetailsHeader'
import Context from 'context/DetailsContext'
import { getAnAccommodation } from 'services/accommodations'

function Details() {
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

export default Details
