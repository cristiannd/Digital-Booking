import { createContext, useState } from 'react'

const Context = createContext({})

export function DetailsContext({ children }) {
  const [accommodation, setAccommodation] = useState(null)

  return (
    <Context.Provider value={{ accommodation, setAccommodation }}>
      {children}
    </Context.Provider>
  )
}

export default Context
