import { useMemo } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

function Map({ latitude, longitude }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_APY_KEY,
  })

  const center = useMemo(
    () => ({ lat: Number(latitude), lng: Number(longitude) }),
    [latitude, longitude]
  )

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export { Map }
