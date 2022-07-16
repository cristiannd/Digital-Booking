import { createContext, useState } from 'react'

const DetailsContext = createContext({})

function DetailsContextProvider({ children }) {
  const [accommodation, setAccommodation] = useState(null)

  return (
    <DetailsContext.Provider value={{ accommodation, setAccommodation }}>
      {children}
    </DetailsContext.Provider>
  )
}

export { DetailsContext, DetailsContextProvider }
