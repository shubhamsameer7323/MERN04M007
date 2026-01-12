import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Login() {

  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");



  function handleLogin(){
    let trimedEmail=email.trim();
    let trimedPassword=password.trim();
    let oldData=localStorage.getItem("users");

    if(oldData){
      let users=JSON.parse(oldData);
      let user=users.find((ele)=>ele.email === trimedEmail);
      if(user){
        if(user.password === trimedPassword){
          localStorage.setItem("isLogin",true)
          toast.success("Login success")
        }else{
          toast.error("Invalid Password")
        }
      
      }else{
         toast.error("Invalid Email")
    }
  }else{
    toast.error("user not available")
  }

  setEmail("");
  setPassword("");

}


  return (
    <div className='mt-30'>
        
          

          <lable>Email id</lable>
            <input type="email" 
            name="" id="" 
            className='border ' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
             <br/>
             
             <lable>password</lable>
             <input type="password" 
            name="" id="" 
            className='border ' placeholder='enter your password'  onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <br/>


           
            <button className='border' onClick={handleLogin}>Login</button>
        
    </div>
  )
}

export default Login