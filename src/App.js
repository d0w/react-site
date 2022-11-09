import logo from './logo.svg';
import './App.scss';
import { Routes } from 'react-router-dom'

// layout is a componenet
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />} />
    </Routes>
    </>
  );
}

export default App;
