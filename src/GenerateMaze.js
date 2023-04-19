import React from 'react';
import { useState } from 'react';
import fetch_maze from './fetchMaze.js';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './slider.css';

function GenerateMaze(props) {
  const [radius, setRadius] = useState(5);
  const [branchFactor, setBranchFactor] = useState(0.50);
  const { setMaze } = props;

  const handleClick = () => {
    fetch_maze(radius, 0,0,branchFactor).then(maze => {
      setMaze(maze);
    });
  };

  function handleRadius(value) {
    setRadius(value);
  }

  function handleBranchFactor(value) {
    setBranchFactor(value);
  }

  return (
    <div className="generate-maze">
      <p>Maze Radius: {radius}</p>
      <InputRange
        value={radius}
        minValue={1}
        maxValue={10}
        onChange={handleRadius}
      />
      <p>Branch Factor: {branchFactor}</p>
      <InputRange
        value={branchFactor}
        minValue={0.0}
        maxValue={1.0}
        step="0.05"
        onChange={(value) => handleBranchFactor(parseFloat(value.toFixed(2)))}
      />
      <button onClick={handleClick}>Generate Maze</button>
    </div>
  );
}

export default GenerateMaze;