import axios from 'axios'
import React, { useState } from 'react'
import "../../styles/style.css"

export default function Signin() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  function send() {
    axios.get('http://localhost:5000/account/signin', {
      "name": name,
      "password": password
    })
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  return (
    <div className="signin">
      <h1>Sign in</h1>
      <div className='signin_inputs'>
        <div className='signin_input_box'>
          <input onChange={(e) => setName(e.target.value)} required type="text" placeholder='username' />
        </div>
        <div className='signin_input_box'>
          <input onChange={(e) => { setPassword(e.target.value) }} required type="password" placeholder='password' />
        </div>
        <button onClick={send} className='signin_btn'>Send</button>
      </div>
      <div className='signin_signup'>I have not account <b>Signup</b></div>
    </div>
  )
}
