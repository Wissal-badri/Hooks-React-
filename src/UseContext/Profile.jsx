import React from 'react'
import { useUserContext } from './UserContext.jsx'
import './Profile.css'

export default function Profile() {
  const user = useUserContext()

  return (
    <div className="ex-card ex-profile-container">
      <h3>Profile - useContext</h3>
      <p>Hello {user?.Nom}</p>
      <p>You are {user?.Age} years old</p>
      <p>Your phone number is {user?.Phone}</p>
      <p>You live in {user?.Address}</p>
    </div>
  )
}


