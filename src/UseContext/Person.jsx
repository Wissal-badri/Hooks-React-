import React from 'react'
import { useMyContext } from './MyContext'
import './MyContext.css'

export default function Person() {
  const person = useMyContext()

  return (
    <div className="ex-card ex-context-container">
      <h3>Exercice useContext</h3>
      <p>Nom: {person?.Nom}</p>
      <p>Age: {person?.Age}</p>
    </div>
  )
}