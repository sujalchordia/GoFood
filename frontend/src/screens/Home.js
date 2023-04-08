import React from 'react'
import { useState,useEffect } from 'react'
import Navb from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import {Carousel} from 'react-bootstrap';
import { useGlobalContext } from '../components/context'
function Home() {
  const[fdata,setFdata]=useState([]);
  const [foodCategory, setfoodCategory] = useState([]);
  const [search, setSearch] = useState("");
  const{showsuccessmessage}=useGlobalContext();
  const loadData=async()=>{
      let response= await fetch("https://go-food-20.onrender.com/api/foodData",{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        }
      })
      response=await response.json();
      setFdata(response[0]);
      setfoodCategory(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div style={{position:"relative"}}>
    <Navb />
    {showsuccessmessage && 
                <div style={{overflow:"visible",position: "sticky",top:"50%",opacity:"0.75",textAlign:"center",width:"fit-content", margin: "auto",zIndex:"9999"}} className="alert alert-success" role="alert">
                Item added succesfully!
                </div>
              }
    <div>
        <div id="carouselExampleFade"  className="carousel slide carousel-fade " data-bs-ride="carousel">
          <div className="carousel-inner "style={{maxHeight:"30rem", maxWidth:"85rem" }} id='carousel'>
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ "objectFit":"cover !important",filter: "brightness(50%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(50%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(50%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    {foodCategory.map((data)=>{
      return(
        <div key={data._id}className='row mb-3 fs-3 m-3'>
          {data.CategoryName}
          <hr />
          {
          fdata.filter((item)=>{
            if((item.CategoryName===data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))){
              return item;
            }
          }).map((fooditem)=>{
            return(
              <div className="col-12 col-md-6 col-lg-3" key={fooditem._id}>
                <Card {...fooditem}/>
              </div>
            )
          })
          
          }
        </div>
      )
    }
    )}
    <Footer />
    </div>
  )
}

export default Home
