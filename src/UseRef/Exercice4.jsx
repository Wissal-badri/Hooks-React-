import { useRef, useState } from 'react'
import './Exercice4.css'

function Exercice4() {
  const inputRef = useRef(null)
  const [length, setLength] = useState(0)

  const handleChange = () => {
    const currentLength = inputRef.current?.value.length || 0
    setLength(currentLength)
    console.log(`Longueur du texte saisi: ${currentLength}`)
  }

  return (
    <div className="ex-card ex-ref-ex1">
      <h3>Exercice 1 useRef</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Tape quelque chose..."
        onChange={handleChange}
      />
      <p>Longueur: {length}</p>
    </div>
  )
}

export default Exercice4

