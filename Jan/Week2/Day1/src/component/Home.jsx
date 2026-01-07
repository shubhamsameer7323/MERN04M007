import React, { useRef } from "react";

function Home() {
  let nameRef = useRef();
  let ageRef = useRef();
  let phoneRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let name = nameRef.current.value;
    let age = ageRef.current.value;
    let phone = phoneRef.current.value;

    localStorage.setItem("user", JSON.stringify({ name, age, phone }));
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="">Age</label>
        <input type="text" ref={ageRef} />
        <label htmlFor="">Phone</label>
        <input type="text" ref={phoneRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Home;
