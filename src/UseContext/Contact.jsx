import React from 'react'
import { useUserContext } from './UserContext.jsx'
import './Contact.css'

export default function Contact() {
  const user = useUserContext()

  return (
    <div className="ex-card ex-contact-container">
      <h3>Contact - useContext</h3>
      <p>Telephone: {user?.Phone}</p>
      <p>Email: {user?.Email}</p>
    </div>
  )
}

