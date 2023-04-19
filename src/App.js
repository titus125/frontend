import { useState } from 'react';
import GenerateMaze from './GenerateMaze';
import DisplayMaze from './DisplayMaze';

function App() {
  const [maze, setMaze] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <GenerateMaze setMaze={setMaze} />
      </div>
      <div style={{ flex: '1' }}>
        <DisplayMaze maze={maze} />
      </div>
    </div>
  );
}

export default App;