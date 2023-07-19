import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem("user")
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }
   
    return (
        <div>
            <ul className='nav'>
               <li><Link to="/" style={{'textDecoration' : 'none'}}>Product</Link></li>
                <li><Link to="/addProduct" style={{'textDecoration' : 'none'}}>Add Product</Link></li>
                <li><Link to="/updateProduct" style={{'textDecoration' : 'none'}}>Update Product</Link></li>
                <li><Link to="/profile" style={{'textDecoration' : 'none'}}>Profile</Link></li>
                <li>{auth ? <Link to="/signup" onClick={logout} style={{'textDecoration' : 'none'}}>Logout</Link> :
                <Link to="/signup" style={{'textDecoration' : 'none'}}>Signup</Link>}</li>
            </ul>
        </div>
    )
}

export default Nav