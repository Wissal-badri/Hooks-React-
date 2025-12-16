import React, { useState, useMemo } from 'react'
import './NomFiltre.css'

export default function NomFiltre() {
    const [nomFiltre, setNomFiltre] = useState('')
    const noms = ["Wissal", "Ahmed", "Ghali", "Rania", "Ali", "Nabil", "Yassmine", "Omar", "Hamza", "Laila"]

    const nomsFiltres = useMemo(() => {
        console.log("Filtrage en cours...")
        return noms.filter(nom => nom.toLowerCase().includes(nomFiltre.toLowerCase()))
    }, [nomFiltre, noms])

    return (
        <div className="ex-card nom-filtre-container">
            <h3>Exercice UseMemo</h3>
            <input 
                type="text" 
                placeholder="Filtrer les noms..."
                value={nomFiltre}
                onChange={(e) => setNomFiltre(e.target.value)} 
            />
            <ul className="noms-list">
                {nomsFiltres.map((nom, index) => (
                    <li key={index}>{nom}</li>
                ))}
            </ul>
        </div>
    )
}