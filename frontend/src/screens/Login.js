import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../components/context';



function Login() {
  let navigate=useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response= await fetch("http://localhost:5000/api/loginuser",{
          method:"POST",
          headers:{
              'Content-Type':"application/json",
          },
          body:JSON.stringify({
              email:email,
              password:password
          })
      });
      const json = await response.json()
      if(json.success){
        localStorage.setItem("userEmail",email)
        localStorage.setItem("authToken",json.authToken)
        navigate("/");
      }
  }
  return (
    <div style={{}}>
    <div className='container w-50'>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" name="email" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" name="password" value={password} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/createuser" className="m-3 btn btn-danger">New user</Link>
</form>
    </div>
    </div>
  )
}

export default Login

