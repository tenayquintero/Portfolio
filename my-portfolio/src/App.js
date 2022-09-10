import './App.css';
import Nav from './Components/Nav/Nav';
import Doors from './Doors/Doors';
import About from './Pages/About/About';

function App() {
  return (
        
    <div className="App">
      <header className="App-header">
      <Doors>
        <Nav />
       
      </Doors>
      </header>
      <main>
        <About />
        <div>hola!!!</div>
      </main>
        
    </div>
          
  );
}

export default App;
