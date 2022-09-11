import { Route, Routes } from 'react-router-dom';
import  smokeBackground  from './images/smoke.jpg'
import Nav from './Components/Nav/Nav';
import Doors from './Doors/Doors';
import About from './Pages/About/About';
import Education from './Pages/Education/Education';
import Projects from './Pages/Projects/Projects';
import './App.css';

function App() {
  return (
        
    <div className="App">
      <Doors>
      <header className="App-header" style={{ backgroundImage:`url("${smokeBackground}")`}}>
        <Nav />
       
    
      </header>
      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/education' element={ <Education /> } />
          <Route path='/projects' element={ <Projects />} />
        </Routes>
       
        
      </main>
      </Doors>
        
    </div>
          
  );
}

export default App;
