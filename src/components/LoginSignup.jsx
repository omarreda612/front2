import React from 'react'
import './LoginSignup.css'
import user_icon from '../assets/img/person.png'
import password_icon from '../assets/img/password.png'
import email_icon from '../assets/img/email.png'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from 'react'

export default function LoginSignup() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[username,setUsername]=useState('')
  function handlesubmit(e){
    e.preventDefault()
    console.log(email,password,username)
  }


  return (
        <div className='wrapper'>
          <form onSubmit={handlesubmit}>
            <h1> Welcome back to A-EYE</h1>
            
            <div className='input-box'>
              <input type='text' placeholder='Username' required onChange={user => setUsername(user.target.value)}></input>
              <FaUser className='icon'/>
            </div>
            <div className='input-box'>
              <input type='email' placeholder='Email' required onChange={e => setUsername(e.target.value)}></input>
              <MdEmail className='icon'/>
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required onChange={p => setUsername(p.target.value)}></input>
              <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
              <label><input type='checkbox'></input> Remember me</label>
              <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
              <p> Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
  )
}
{/* <div className='container'>
<div className='header'>
  <div className='text'>{action}</div>
  <div className='underline'></div>
</div>
<div className='inputs'>
  {action ==="Login"?<div></div>:<div className='input'>
    <img src={user_icon} alt=''></img>
    <input type='text' placeholder='Username'></input>
  </div>}
  
  <div className='input'>
    <img src={email_icon} alt=''></img>
    <input type='email' placeholder='Email'></input>
  </div>
  <div className='input'>
    <img src={password_icon} alt=''></img>
    <input type='password' placeholder='Password'></input>
  </div>
</div>
{action ==='Sign Up'?<div></div>:<div className='forgot-password'>Forgot Password? <span>click here</span></div>}
<div className='submit-container'>
  <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
  <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
</div>
</div> */}