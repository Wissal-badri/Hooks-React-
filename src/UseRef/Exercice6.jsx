import { useRef, useState } from 'react'
import './Exercice6.css'

function Exercice6() {
  const countRef = useRef(0)
  const [display, setDisplay] = useState(0)

  const handleClick = () => {
    countRef.current += 1
    setDisplay(countRef.current)
    console.log(`Compteur stocké dans le ref: ${countRef.current}`)
  }

  const handleReset = () => {
    countRef.current = 0
    setDisplay(0)
    console.log('Compteur réinitialisé')
  }

  return (
    <div className="ex-card ex-ref-ex3">
      <h3>Exercice 3 UseRef</h3>
      <p>Compteur: {display}</p>
      <div className="ex-ref-actions">
        <button onClick={handleClick}>Incrémenter</button>
        <button onClick={handleReset}>Réinitialiser</button>
      </div>
    </div>
  )
}

export default Exercice6

