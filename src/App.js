import Navbar from './components/Navbar';
import Main from './components/Main'
import './App.css';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    console.log(darkMode)
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Navbar 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Main 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
