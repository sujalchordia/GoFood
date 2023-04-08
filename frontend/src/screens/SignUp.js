import React,{useState} from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../components/context';
function SignUp() {
  let navigate=useNavigate();
    const{setShowSuccessMessage}=useGlobalContext();
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async(e)=>{
        if(credentials.name && credentials.email && credentials.password && credentials.location){
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
        }).then((res)=>{
          navigate("/login")
            setShowSuccessMessage(true);
            setTimeout(() => {
             setShowSuccessMessage(false);
            }, 2500);
        });
        const json = await response.json()
        }else{
          e.preventDefault();
        }
    }
  return (
    <section className="vh-100" style={{backgroundColor:"#fffcf4"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{border:"none"}}>
          <div className="card-body p-md-5" style={{backgroundColor:"#fffcf4"}}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" onChange={(e)=>setCredentials({...credentials,name:e.target.value})} value={credentials.name} className="form-control" />
                      <label className="form-label"for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" onChange={(e)=>setCredentials({...credentials,email:e.target.value})}value={credentials.email} className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})} value={credentials.password}id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" className="form-control"  onChange={(e)=>setCredentials({...credentials,location:e.target.value})} value={credentials.location}/>
                      <label className="form-label"for="form3Example1c">Your Address</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-md"style={{backgroundColor:"#9cac88",color:"white"}}>Register</button>
                    <button onClick={()=>{navigate("/login")}}type="button" style={{ marginLeft:"2rem",backgroundColor:"#9cac88",color:"white"}} className="btn btn-md">Already a user</button>
                  </div>
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={process.env.PUBLIC_URL + "/20230407_150210_0000.png"}
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
//     <div className='container w-50'>
//       <form onSubmit={handleSubmit}>
//       <div className="form-group">
//     <label htmlFor="name">Name</label>
//     <input type="text" className="form-control" onChange={(e)=>setCredentials({...credentials,name:e.target.value})} name="name" value={credentials.name}  placeholder="Enter Name"/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} className="form-control" name="email" value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})} className="form-control" name="password" value={credentials.password} id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword">Address</label>
//     <input type="text" className="form-control"onChange={(e)=>setCredentials({...credentials, location:e.target.value})}  name="location" value={credentials.location} id="exampleInputPassword" placeholder="Password"/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
// </form>
//     </div>
  )
}

export default SignUp
