
import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/")
        }
    })

    const signupdata =async () => {
        console.log(name,email,password)
        let result =await fetch("http://localhost:5000/register",{
            method : 'post',
            body : JSON.stringify({name,email,password}),    
            headers : {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/')
    }

    return (
        <div className='signup'>
            <h1>UserSignup</h1>
            <input className='usersignup' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the name"></input>
            <input className='usersignup' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter the email"></input>
            <input className='usersignup'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password"></input>
            <button className='btnsignup' onClick={signupdata}>Signup</button>
        </div>
    )
}

export default Signup