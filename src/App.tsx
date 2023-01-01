import { useState, useEffect } from 'react';
import './App.css';
import HabitForm from './components/habitForm';
import HabitsList from './components/habitsList';
import { habit } from './objects/objects';

function App() {
  const [appState, setAppState] = useState<habit[]>([]);

  useEffect(() => {
    setAppState(JSON.parse(localStorage.getItem('habits') || '[]'));
  }, []);

  function createNewHabitHandler(habit: string) {
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
      <HabitsList appState={appState} />
    </div>
  );
}

export default App;
