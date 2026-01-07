
import { useState } from 'react'
import './App.css'
import Home from './Home';

function App() {
  const [a, setA]= useState(0);
  const [name , setName]= useState("");
  const [obj , setObj] = useState(null);
  
  // let a=1;
  // function updateA(){
  //   a++;
  //   console.log(a);
  // }

  // let handleText=()=>{
  //   setName("hii");
  // }

  return (
    <div>
      {/* hello 
      <br /> */}
      {/*Direct Calling*/}
      {/* <button onClick={updateA()}>Inc</button> */}

      {/* indirect Calling */}
      
      {/* value{a}
      <br />
      <button onClick={() => setA(a + 1) }>Increment</button>

      <br />
      NAme: {name}
      <br />
      <button onClick={handleText}>Click here to add text</button>

      <br />
      Object Value: {obj?.name} {obj?.age}
      <br />
      <button onClick={() => setObj({name:"hii", age:30})}>Set Object</button> */}


        <Home />
    </div>
  )
}

export default App
