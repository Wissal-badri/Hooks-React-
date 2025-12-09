import React, { useContext } from 'react'

export const MyContext = React.createContext(null)

export function useMyContext() {
  return useContext(MyContext)
}

