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
      <Route path="/react-site" element = {<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/react-site/about" element={<About/>} />
        <Route path="/react-site/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
