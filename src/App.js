import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// layout is a componenet
//REMOVE GSAP-TRIAL BEFORE BUILDS AND CHANGE BRANCHES



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
