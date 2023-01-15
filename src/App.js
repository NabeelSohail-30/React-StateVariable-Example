import './App.css';
import { useState } from 'react';
import bulbOn from './img/bulbOn.jpg'
import bulbOff from './img/bulbOff.jpg'

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  }

  return (
    <div className='App'>
      <div>
        <img src={(isOn) ? bulbOn : bulbOff} alt='bulb'></img>
      </div>
      <br></br>
      <button onClick={toggleState}>Toggle Bulb State</button>
    </div>
  );
}

export default App;
