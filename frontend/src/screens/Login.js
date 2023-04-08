import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../components/context';



function Login() {
  let navigate=useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const{showsuccessmessage}=useGlobalContext();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response= await fetch("https://go-food-20.onrender.com/api/loginuser",{
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
    <section className="vh-100"style={{backgroundColor:"#fffcf4"}}>
      {showsuccessmessage && 
                <div style={{position: "sticky",top:"50%",opacity:"0.75",  textAlign:"center",width:"fit-content", margin: "auto",zIndex:"9999"}} className="alert alert-success" role="alert">
                Registered Succesfully!
                </div>
              }
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
      <img src={process.env.PUBLIC_URL + "/20230407_150210_0000.png"} className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
          <div className="form-outline mb-4">
            <input style={{color:"#333333"}}type="email" onChange={(e)=>{setEmail(e.target.value)}}id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password"onChange={(e)=>{setPassword(e.target.value)}} id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button className="btn  btn-md btn-block"onClick={handleSubmit} style={{backgroundColor:"#9cac88",color:"white"}}>Submit</button>
          <button type="submit" onClick={()=>{navigate("/createuser")}} className="btn  btn-md btn-block" style={{marginLeft:"5rem",backgroundColor:"#9cac88",color:"white"}}>new User</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
//     <div style={{}}>
//     <div className='container w-50'>
//       <form onSubmit={handleSubmit}>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" name="email" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword">Password</label>
//     <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" name="password" value={password} id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link to="/createuser" className="m-3 btn btn-danger">New user</Link>
// </form>
//     </div>
//     </div>
  )
}

export default Login

