import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'

// layout is a componenet

// RUN npm run build for full publish
function App() {
  return (
    <>
    <Routes>
      <Route path="/react-site" element = {<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/react-site/about" element={<About/>} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
