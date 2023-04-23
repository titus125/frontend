import { useState } from 'react';
import GenerateMaze from './GenerateMaze';
import DisplayMaze from './DisplayMaze';

function App() {
  const [maze, setMaze] = useState(null);
  const [mode, setMode] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <GenerateMaze setMaze={setMaze} setMode={setMode} mode={mode} />
      </div>
      <div style={{ flex: '1' }}>
        <DisplayMaze maze={maze} mode={mode}/>
      </div>
    </div>
  );
}

export default App;