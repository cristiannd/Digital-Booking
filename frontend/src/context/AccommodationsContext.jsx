import { createContext, useState } from 'react'

const AccommodationsContext = createContext({})

function AccommodationsContextProvider({ children }) {
  const [accommodations, setAccommodations] = useState(null)

  return (
    <AccommodationsContext.Provider value={{ accommodations, setAccommodations }}>
      {children}
    </AccommodationsContext.Provider>
  )
}

export { AccommodationsContext, AccommodationsContextProvider }
