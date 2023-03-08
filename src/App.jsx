import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header/Header';
import WhyBabble from './components/whybabble/WhyBabble';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhyBabble />
    </>
  );
}

export default App;
