import { useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import ProductList from './component/ProductList/ProductList';
import Form from './component/Form/Form';
import useTelegram from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Form />} />
        <Route path={'form'} element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
