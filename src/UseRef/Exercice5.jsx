import { useEffect, useRef } from 'react'
import './Exercice5.css'

function Exercice5() {
  const firstRef = useRef(null)
  const secondRef = useRef(null)

  useEffect(() => {
    firstRef.current?.focus()
    const timer = setTimeout(() => {
      secondRef.current?.focus()
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="ex-card ex-ref-ex2">
      <h3>Exercice 2 UseRef</h3>
      <input ref={firstRef} type="text" placeholder="Premier input" />
      <input ref={secondRef} type="text" placeholder="Second input" />
      <p>Focus passe du premier au second automatiquement.</p>
    </div>
  )
}

export default Exercice5

