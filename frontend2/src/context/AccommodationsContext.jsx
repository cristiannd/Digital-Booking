import { createContext, useState } from 'react'

const Context = createContext({})

export function AccommodationsContext({ children }) {
  const [accommodations, setAccommodations] = useState(null)

  return (
    <Context.Provider value={{ accommodations, setAccommodations }}>
      {children}
    </Context.Provider>
  )
}

export default Context
