import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='container'>
        <form>
            <label>Username</label>
            <input type="text" id="login"></input><br/>
            <label>Password</label>
            <input type="password" id="password"></input><br/>
            <input type="submit" value="Login"></input>
        </form>
        </div>
    </div>
  )
}

export default Login
