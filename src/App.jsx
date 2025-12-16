import React from 'react'
import './App.css'
import Exercice3 from './UseState/Exercice3.jsx'
import Exercice1 from './UseState/Exercice1.jsx'
import Exercice2 from './UseState/Exercice2.jsx'
import Exemple from './UseRef/Exemple.jsx'
import Exercice4 from './UseRef/Exercice4.jsx'
import Exercice5 from './UseRef/Exercice5.jsx'
import Exercice6 from './UseRef/Exercice6.jsx'  
import MyContextProvider from './UseContext/MyContextProvider.jsx'
import Person from './UseContext/Person.jsx'
import { UserContextProvider } from './UseContext/UserContext.jsx'
import Profile from './UseContext/Profile.jsx'
import Contact from './UseContext/Contact.jsx'

function App() {

  return (
    <div className="exercices-grid">
      <Exercice1 />
      <Exercice2 />
      <Exercice3 />
      <Exemple />
      <Exercice4 />
      <Exercice5 />
      <Exercice6 />
      <MyContextProvider>
        <Person />
      </MyContextProvider>
      <UserContextProvider>
        <Profile />
        <Contact />
      </UserContextProvider>
    </div>
  )
}
export default App


