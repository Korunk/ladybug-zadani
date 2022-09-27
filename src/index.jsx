import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [ladyBugState, setLadyBugState] = useState({
    posY: 100,
    posX: 100,
    orientation: ''
  })
  
  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      setLadyBugState({...ladyBugState, orientation: 'up', posY: ladyBugState.posY - STEP_SIZE })
     // setOrientation('up');
      //setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setLadyBugState({...ladyBugState, orientation: 'left', posX: ladyBugState.posX - STEP_SIZE })
     // setOrientation('left');
      // setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setLadyBugState({...ladyBugState, orientation: 'right', posX: ladyBugState.posX + STEP_SIZE })
      // setOrientation('right');
      // setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setLadyBugState({...ladyBugState, orientation: 'down', posY: ladyBugState.posY + STEP_SIZE })
      // setOrientation('down');
      //setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div 
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug posX={ladyBugState.posX} posY={ladyBugState.posY} orientation={ladyBugState.orientation}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
