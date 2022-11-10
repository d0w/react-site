import './App.scss';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'

// layout is a componenet
// ENABLING SCROLLING NEEDS TO GO TO INDEX.CSS AND TURN OFF HIDE OVERFLOW
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<Home/>} />
      </Route>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

function About() {
  return( 
    <div style={{ margin: 15, marginLeft: 35 }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: 10 }}>
                  Lorem Ipsum
                </div>
              <div style={{overflow: 'auto', height: 'inherit', display: 'block', maxWidth: 300, marginLeft: 20,}}>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <h1>yes</h1>
                <div> Item visible</div>
                <div> Item visible</div>
                <div> Item visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
                <div> Item NOT visible</div>
              </div>
            </div>
          </div>
    )
}

export default App;
