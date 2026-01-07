import React, { useState } from 'react'

function Home() {

    // Keyword [variable,The function used for updating the variable] = useState(initial value).
    // const [obj , setObj] = useState({});

    // function addData(){
    //     setObj({
    //         name: "Hello",
    //         age: 25
    //     })
    // }
    const [count , setCount] = useState(0);


    // let a = 0;
    // function updateA(){
    //     a = a + 1;
    //     console.log(a);
    // }




  return (
    <div>
        hello Home
        <br />
        {/* Value {a}
        <button onClick={updateA}>Click</button> */}


        {/* <br />
        value of obj:

        <br />
        name{obj.name}
        <br />
        age{obj.age}
        
        <button onClick={addData}>Add the Data</button> */}

        count: {count}

        <br />
        <button onClick={() => setCount(count+1)}>Increment</button>

        <br />
        <button onClick={() => setCount(count-2)}>Decrement</button>



        {/* MAke a array by using USestate and store one by one array and student details in array like name age and add delete button */}
        </div>
  )
}

export default Home
