import { useState } from 'react'
import './Exercice3.css'

function Exercice3() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="ex-card ex3-container">
        <h3>Exercice 3 UseState : Toggle</h3>
      <p>{visible ? 'Bienvenue' : 'Au revoir'}</p>
      <button onClick={() => setVisible((v) => !v)}>
        Toggle
      </button>
    </div>
  )
}

export default Exercice3
