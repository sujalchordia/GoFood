import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async(e)=>{
        console.log(credentials);
        e.preventDefault();
        const response= await fetch("https://go-food-20.onrender.com/api/createuser",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify({
                name:credentials.name,
                location:credentials.location,
                email:credentials.email,
                password:credentials.password
            })
        });
        const json = await response.json()
    }
  return (
    <div className='container w-50'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setCredentials({...credentials,name:e.target.value})} name="name" value={credentials.name}  placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} className="form-control" name="email" value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})} className="form-control" name="password" value={credentials.password} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword">Address</label>
    <input type="text" className="form-control"onChange={(e)=>setCredentials({...credentials, location:e.target.value})}  name="location" value={credentials.location} id="exampleInputPassword" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
</form>
    </div>
  )
}

export default SignUp
