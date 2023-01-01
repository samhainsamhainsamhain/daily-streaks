import { useState, useEffect } from 'react';
import './App.css';
import HabitForm from './components/habitForm';
import { habit } from './objects/objects';

function App() {
  const [appState, setAppState] = useState<habit[]>([]);

  useEffect(() => {
    setAppState(JSON.parse(localStorage.getItem('habits') || '[]'));
  }, []);

  function createNewHabitHandler(habit: string) {
    debugger;
    const newState = appState;

    newState.push({
      name: habit,
      days: [],
    });

    setAppState(newState);

    localStorage.setItem('habits', JSON.stringify(appState));
  }

  return (
    <div className="App">
      <HabitForm createNewHabitHandler={createNewHabitHandler} />
    </div>
  );
}

export default App;
