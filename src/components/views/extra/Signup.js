import React, { useEffect, useState } from 'react'
import "../../styles/style.css"
import Cookies from 'js-cookie'
import { setToken } from '../../../redux/slices/userSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState(1)
  const [passwordValid, setPasswordValid] = useState(true)

  function send() {
    if (password !== confirmPassword) {
      setPasswordValid(false)
      return
    }

    axios.post("http://localhost:5000/account/signup", {
      "name": name,
      "password": password
    })
      .then(result => {
        if (result.data) {
          dispatch(setToken(result.data.token))
        }
      })
      .catch(error => {
        if (error.response.data.error) {
          toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          console.error(error)
        }
      })
  }

  return (
    <>
      <div className='signin'>
        <h1>Sign up</h1>
        <div className='signin_inputs'>
          <div className='signin_input_box'>
            <input onChange={(e) => setName(e.target.value)} required type="text" placeholder='username' />
          </div>
          <div className='signin_input_box'>
            <input className={passwordValid ? '' : "border_red"} onChange={(e) => { setPassword(e.target.value); setPasswordValid(true) }} required type="password" placeholder='password' />
          </div>
          <div className='signin_input_box'>
            <input className={passwordValid ? '' : "border_red"} onChange={(e) => { setConfirmPassword(e.target.value); setPasswordValid(true) }} required type="password" placeholder='confirm password' />
          </div>
          <button onClick={send} className='signin_btn'>Send</button>
        </div>
        <div className='signin_signup'>I have account <b>Signin</b></div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
