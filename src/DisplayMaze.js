import React from 'react';

function DisplayMaze(props) {
  const { maze } = props;

  return (
    <div className="display-maze">
      {maze && <img src={maze} alt="maze" />}
    </div>
  );
}

export default DisplayMaze;