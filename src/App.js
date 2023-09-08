import { useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import useTelegram from './hooks/useTelegram';

function App() {
  const { onToggleButton } = useTelegram()
      // const tg = window.Telegram.WebApp;

  // useEffect(() => {
  //   tg.ready()
  // }, [])
  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
