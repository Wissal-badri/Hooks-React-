import { useEffect, useRef, useState } from "react";
import './Exercice2.css';

function Exercice2() {
  const [isRunning, setIsRunning] = useState(false);
  const [ticks, setTicks] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    intervalRef.current = setInterval(() => {
      setTicks((count) => count + 1);
      console.log("tic");
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTic = () => {
    setTicks(0);
    setIsRunning(true);
  };

  const stopTic = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="ex-card ex2-container">
        <h3>Exercice 2 UseState : Timer</h3>
        <p>{isRunning ? `Tic ${ticks}` : 'Prêt à démarrer le tic'}</p>
        <div className="ex2-actions">
          <button onClick={startTic} disabled={isRunning}>Start Tic</button>
          <button onClick={stopTic} disabled={!isRunning}>Stop Tic</button>
        </div>
    </div>

  );
}

export default Exercice2;
