import { useState, useEffect } from 'react';
import './App.css';
import { habit } from './objects/objects';

function App() {
  const [appState, setAppState] = useState<habit[]>([]);

  useEffect(() => {
    setAppState(JSON.parse(localStorage.getItem('habits') || '[]'));
  }, []);

  return <div className="App">hello world</div>;
}

export default App;
