import React from 'react';
import './App.css';

function DisplayMaze(props) {
  const { maze, mode } = props;

  return (
    <div className="display-maze">
      {maze && (mode === 0 ? <img src={maze.maze} alt="maze" /> : mode === 1 ? <img src={maze.solution} alt="solution" /> : null)}
    </div>
  );
}

export default DisplayMaze;