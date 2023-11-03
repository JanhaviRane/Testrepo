import React,{useEffect,useState} from 'react';
const FirstComponent=()=>
{
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('FirstComponent');
  
  useEffect(() => {
    console.log(`Mounting ${name}`);
    console.log(`Counter is ${counter}`);
    return () => {
      console.log(`Unmounting ${name}`);
    };
  }, []);

  useEffect(() => {
    if (counter > 0) {
      console.log(`Updating ${name}`);
      console.log(`Counter is ${counter}`);
    }
  }, [counter]);

  return (
    
    <div>
      <h1>FirstComponent</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>

  

    </div>
  );
}
export default FirstComponent;