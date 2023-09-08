import { useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import useTelegram from './component/hooks/useTelegram';

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
