
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(0);

  const [data, setData] = useState([]);


  // useEffect(() => {
  //   first // Effect Code what you want to execute
  
    // return () => {    //*it is execute when your variable is unmounted.
    //   second
    // }
  // }, [third])  //[dependencies]  //* if we want to execute effect code based on dependency

  // 1. Execute at all rendering
  // useEffect(() => {
  //   alert("in every render")
  // })

  //2. Execute at first render only
  // useEffect(() => {
  //   alert("in first render only")
  // }, [])

  //3. Return statement in UseEffect
  // useEffect(() => {
  //   alert("data updated")
    
  //   return () => {
  //     alert("data unmounted")
  //   }
  // })

  //4. Execute based on dependency
  // useEffect(() => {
  //   alert("based on dependency")
  // },[count])
  

  useEffect(()=>{
    async function getData(){
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let totaldata = await res.json();
        setData(totaldata);
      } catch (error) {
        console.log("error",error);
        
        
      }
      
    }
    getData()
  },[])

  console.log(data);
  


  return (
    <>
      {/* <h1 className='bg-red-900'>Hello</h1> */}
      <div className='h-screen flex justify-center items-center'>
        {/* <div className='h-30 w-50 bg-amber-300 rounded flex justify-center items-center ' >
        <button onClick={() => setCount (count + 1)}
          className='border p-2 rounded'
          >Count: {count}
          </button>
          
          <button
           onClick={() => setTotal (total + 1)}
          className='border p-2 rounded'
          >
            Total: {total}
          </button>
      </div> */}


          
      </div>
    </>
  )
}

export default App
