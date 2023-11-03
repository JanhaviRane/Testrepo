import {useState} from "react";
import FirstComponent from './Files/FirstComponent';
import SecondComponent from './Files/SecondComponent';
import './App.css';
function App() {
    const [name, setName] = useState('Manasvi');
    const [age, setAge] = useState(50);
    const [mountFirst, setmountFirst] = useState(true)
  const [mountSecond, setmountSecond] = useState(false)

    const handleMountFirst = () => {
      setmountSecond(false)
      setmountFirst(true)
    }
  
    const handleMountSecond = () => {
      setmountSecond(true)
      setmountFirst(false)
    }
  
  return (
    <div className="App">
      <header className="App-header">
      
      <>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
       <br/>

        <button onClick={() => setAge(age + 1)}>
        Increment age
        </button>
        <h1>Hello, {name}. You are {age} years old.</h1>
      </>
    
     {mountFirst && <FirstComponent/>}
      {mountSecond && <SecondComponent/>}<br/>
      <button onClick={handleMountFirst}>Toggle First Component</button><br/>
          <button onClick={handleMountSecond}>Toggle Second Component</button>
      </header>
    </div>
  );
}
export default App;
