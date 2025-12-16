import React, { useState } from 'react'
import './NomFiltre.css'

export default function NomFiltre() {
   const [nomFiltre, setNomFiltre] = useState('')
   const noms=["Wissal","Ahmed","Ghali","Ali","Omar","Hamza", "Laila"]
   const filtre=(nom)=>{
    return nom.toLowerCase().includes(nomFiltre.toLowerCase())
   }
   const nomsFiltres=noms.filter(filtre)
    return (
        <div>
            <input type="text" onChange={(e) => setNomFiltre(e.target.value)} />
        </div>
    )
}