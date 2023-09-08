import { useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import useTelegram from './hooks/useTelegram.jsx';

function App() {
  const { tg, onToggleButton } = useTelegram()
  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
