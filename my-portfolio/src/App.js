import { Route, Routes } from 'react-router-dom';
import smokeBackground from './images/smoke.jpg'
import Nav from './Components/Nav/Nav';
import Doors from './Doors/Doors';
import About from './Pages/About/About';
import Education from './Pages/Education/Education';
import Projects from './Pages/Projects/Projects';
import { useState } from 'react';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showAbout,setShowAbout] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  return (

    <div className="App">
      <Doors setShowNav={setShowNav} setShowAbout={setShowAbout} setShowHeader={setShowHeader}/>
      <header className={"App-header " + (showHeader && 'showHeader')} style={{ backgroundImage: `url("${smokeBackground}")` }}>
          <Nav showNav={showNav} />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<About showAbout={showAbout}/>} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
        <footer>
          <p>yanethftv @2022</p>
        </footer>
    </div>

  );
}

export default App;
