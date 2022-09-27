import React from 'react';
import './style.css';

const Ladybug = ({ ...ladyBugState}) => {
  const {posX, posY, orientation} = {...ladyBugState}
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posY}px`,
        left: `${posX}px`,
      }}
    />
  );
};

export default Ladybug;