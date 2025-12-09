import { useEffect, useRef, useState } from 'react'
import './Exemple.css'

function Exemple() {
  const [counter, setCounter] = useState(0)
  const clickRef = useRef(0)

  const handleClicks = () => {
    clickRef.current += 1
    setCounter((c) => c + 1)
  }

  const reset = () => {
    clickRef.current = 0
    setCounter(0)
  }

  useEffect(() => {
    console.log(`Nombre de clics: ${clickRef.current}`)
  }, [counter])

  return (
    <div className="ex-card ex-ref-container">
      <h3>Exemple (useRef)</h3>
      <p>{counter}</p>
      <div className="ex-ref-actions">
        <button onClick={handleClicks}>Clique moi</button>
        <button onClick={reset}>Réinitialiser</button>
      </div>
    </div>
  )
}

export default Exemple

