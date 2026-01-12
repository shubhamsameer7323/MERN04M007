import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Register() {

   let[name,setName]=useState("");
   let[email,setEmail]=useState("");
   let[phone,setPhone]=useState("");
   let[password,setPassword]=useState("");

   function handleRegister(e){
    e.preventDefault()


    try{
            
    let oldData=localStorage.getItem("users");
    let users=oldData ? JSON.parse(oldData):[];

    users.push({name,email,phone,password});

    localStorage.setItem("users",JSON.stringify(users))

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");

    toast.success("Registration successfull")
    }catch(error){
      toast.error("register failed")
    }


   }

  return (
    <div className='mt-30'>
        

          <lable >Full Name</lable>
          
            <input type="text"
            
            name="" id="full_name" 
            className='border ' placeholder='Enter your full Name ' onChange={(e)=>setName(e.target.value)} value={name}/>
             <br/>

              <lable >Email</lable>
             <input type="email"
             
            name="" id="" 
            className='border ' placeholder='Enter your email'  onChange={(e)=>setEmail(e.target.value)} value={email}/>
             <br/>
             
             <lable >Phone</lable>
            <input type="text" 
           
            name="" id="" 
            className='border ' placeholder='Enter your phone number '  onChange={(e)=>setPhone(e.target.value)} value={phone}/>
             <br/>

             <lable >Password</lable>
             <input type="password" 
           
            name="" id="" 
            className='border ' placeholder='Enter your password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <br/>

            <button className='border' onClick={handleRegister}>Register</button>
        
    </div>
  )
}

export default Register