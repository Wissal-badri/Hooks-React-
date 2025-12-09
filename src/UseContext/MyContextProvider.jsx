import React, { useMemo } from 'react'
import { MyContext } from './MyContext'

export default function MyContextProvider({ children }) {
  const value = useMemo(() => ({ Nom: 'Wissal', Age: 21 }), [])

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

