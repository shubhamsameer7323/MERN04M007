import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  let [data, setData] = useState([]);

  let getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return <div>HELLO</div>;
}

export default Home;


// Task-1
// EK react project uske andr get post put delete karna h aur jo deta de raha h usko UI me achhe se dikhana hai..
