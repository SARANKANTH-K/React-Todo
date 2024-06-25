import React, { useState } from 'react'
import './Signup.css';
import axios from 'axios';
const Signup = () => {
    const[name,setName]=useState(" ");
    const[password,setPassword]=useState(" ");
    const[dob,setDob]=useState(" ");
    const[age,setAge]=useState(" ");
    const[email,setEmail]=useState(" ");
    const[mobile,setMobile]=useState(" ");

    const handlePost=()=>
        {
           axios.post("http://localhost:3008/sign",{name,password,dob,age,email,mobile})
           .then((res)=>{
              alert("Data saved Successfully");
              console.log(res);
        
              // setName(" ");
              // setAbout(" ");
              // setImageUrl(" ");
           })
           .catch((e)=>{
              console.log("error : ${e}")
           })
        }
  return (
    <div>
        <section>
          <div className="forms">
            
            <form onSubmit={handlePost}>
                    <h3>signup</h3>
                
               <div className="inputbox">
                  <label for="">Student Name</label>
               <input name= "name" value={name} className="form-control" onChange={(e)=>{setName(e.target.value)}} type="text" autofocus="on" />
            </div>
            <div clasNames="password">
                <label for="password">Password</label>
           <input type="password" value={password} className="form-control"onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className="dob">
                <label for="">Date of Birth</label>
                <input type="date" value={dob} className="form-control "onChange={(e)=>{setDob(e.target.value)}}/>
            </div>
            <div className="age">
                <label for="">Age</label>
                <input type="number" value={age}  className="form-control" onChange={(e)=>{setAge(e.target.value)}}/>
            </div>
            <div className="email">
                <label for="">Email-Id</label>
                <input type="text"  value={email} className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="mobile">
                <label for="">Mobile Number</label>
                <input type="tel" id="phone" val={mobile} name="phone"  className="form-control" onChange={(e)=>{setMobile(e.target.value)}}/>
            </div>
            <button>submit</button>
         </form>
       </div>
          </section>
    </div>
    // <>
    // <h1>hii</h1>
    // </>
  )
}

export default Signup;