import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useGlobalContext } from './context';

export default function Navbar() {
  const navigate= useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  const {cart}=useGlobalContext();
  return (
    <div style={{backgroundColor:"#c4ccbc"}}>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <Link to ="/" className="navbar-brand fs-3 display-5 font-weight-bold fst-italic" style={{"fontSize":"10px"}}>
      <img style={{width:"2.5rem"}}src={process.env.PUBLIC_URL +"/20230407_150210_0000-modified.png"}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <>
        <li className="nav-item ">
          <Link to="/myCart" className="nav-link" aria-current="page">MyCart</Link>
        </li>
        <li className="nav-item ">
          <Link to="/myOrder" className="nav-link" aria-current="page">MyOrders</Link>
        </li>
        </>:""
        }
        </ul>

        <ul className="navbar-nav" style={{"margin-left": "auto"}}>
        {(!localStorage.getItem("authToken"))?
        <>
        <li className="nav-item ">
          <Link to="/login" className="nav-link" >Login</Link>
        </li>
        <li className="nav-item ">
        <Link to="/createuser" className="nav-link" >SignUp</Link>
      </li>
      </>:
        <li className="nav-item ">
        <Link to="/login"onClick={()=>{handleLogOut()}} className="nav-link" >Logout</Link>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
