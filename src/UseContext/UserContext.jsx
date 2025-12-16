import React, { createContext, useContext } from 'react'

export const UserContext = createContext(null)

export function useUserContext() {
  return useContext(UserContext)
}

export function UserContextProvider({ children }) {
  const value = {
    Nom: 'Wissal',
    Age: 21,
    Phone: '0600000000',
    Address: 'XXX, Casablanca',
    Email: 'wissalbadri91@gmail.com'
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}



