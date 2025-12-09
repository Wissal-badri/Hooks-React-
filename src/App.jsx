import React from 'react'
import './App.css'
import Exercice3 from './UseState/Exercice3.jsx'
import Exercice1 from './UseState/Exercice1.jsx'
import Exercice2 from './UseState/Exercice2.jsx'
import Exemple from './UseRef/Exemple.jsx'
import Exercice4 from './UseRef/Exercice4.jsx'

function App() {

  return (
    <div className="exercices-grid">
      <Exercice1 />
      <Exercice2 />
      <Exercice3 />
      <Exemple />
      <Exercice4 />
    </div>
  )
}
export default App
