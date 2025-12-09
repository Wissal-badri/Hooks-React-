import { useState } from "react";
import './Exercice1.css';

function Exercice1() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Valeur actuelle :", e.target.value);
  };

  return (
    <div className="ex-card ex1-container">
        <h3>Exercice 1 UseState: Input contrôlé</h3>
      <input
        type="text"
        placeholder="Tape quelque chose..."
        value={value}
        onChange={handleChange}
      />
      <output>{value}</output>
      <button onClick={() => setValue('')}>Change value</button>
    </div>
  );
}

export default Exercice1;

