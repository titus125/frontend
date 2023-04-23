import React from 'react';
import { useState } from 'react';
import fetch_maze from './fetchMaze.js';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './slider.css';

function GenerateMaze(props) {
  const [radius, setRadius] = useState(5);
  const [branchFactor, setBranchFactor] = useState(0.45);
  const { setMaze, setMode, mode } = props;
  const [ buttonText, setButtonText ] = useState("Show Solution")

  const handleGenerateMaze = () => {
    fetch_maze(radius, undefined, undefined, branchFactor, undefined, 0 ,0).then(maze => {
      setMaze(maze);
    });
  };

  const handleShowSolution = () => {
    if (!mode) {
      setMode(1);
      setButtonText("Hide Solution") 
    } else {
      setMode(0);
      setButtonText("Show Solution")     
    }
  };

  function handleRadius(value) {
    setRadius(value);
  }

  function handleBranchFactor(value) {
    setBranchFactor(value);
  }

  return (
    <div className="generate-maze">
      <div className="input-container">
        <p className="input-label">Maze Radius: {radius}
        <span className="tooltip">&#x1F6C8;
          <span className="tooltiptext">Controls the size of the maze</span>
        </span>
        </p>
        <InputRange
          value={radius}
          minValue={3}
          maxValue={15}
          onChange={handleRadius}
        />
      </div>
      <div className="input-container">
        <p className="input-label">Branch Factor: {branchFactor}
        <span className="tooltip">&#x1F6C8;
          <span className="tooltiptext">Controls the shape of the maze</span>
        </span>
        </p>
        <InputRange
          value={parseFloat(branchFactor.toFixed(2))}
          minValue={0.0}
          maxValue={1.0}
          step='0.01'
          onChange={(value) => handleBranchFactor(parseFloat(value.toFixed(2)))}
        />
      </div>
      <div className="buttons-container">
        <button class="button1" onClick={handleGenerateMaze}>Generate Maze</button>
        <button class="button2" onClick={handleShowSolution}>{buttonText}</button>
      </div>
    </div>
  );
}

export default GenerateMaze;