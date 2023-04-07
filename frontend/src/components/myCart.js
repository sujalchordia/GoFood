import React from 'react'
import { useState,useEffect } from 'react';
import { useGlobalContext } from './context';
import Navb from '../components/Navbar'
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';

function MyCart() {
    const {cart,totalprice,remove,drop}=useGlobalContext();
    const handleSubmit=async(e)=>{
      let userEmail= localStorage.getItem("userEmail");
      let response= await fetch("http://localhost:5000/api/orderData",{
          method:"POST",
          headers:{
              'Content-Type':"application/json",
          },
          body:JSON.stringify({
              order_data: cart,
              email:userEmail,
              order_date: new Date().toDateString()
          })
      });
      drop()
  }
    if(cart.length===0){
        return(
        <>
        <Navb />
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <i class="bi bi-cart-x" style={{"font-size": "4rem;"}}></i>
            <h4 class="mt-3">Your cart is empty</h4>
            <p class="text-muted">Start shopping now to add items to your cart.</p>
            <Link to="/" class="btn btn-secondary">Shop Now</Link>
          </div>
        </div>
      </div>
      </>)
    }else{
        return (
            <div>
                <Navb />
                <section className="h-100 h-custom">
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
        
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="h5">MyCart</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Remove</th>

                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {cart.map((item)=>{
                        return(
                        <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <img src={item.img} className="img-fluid rounded-3"
                              style={{"width": "120px"}} alt="Book" />
                          </div>
                        </th>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}>{item.name}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}>{item.number}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}>{item.size}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}>{`${item.price}$`}</p>
                        </td>
                        <td>
                        <button style={{"justifyContent":"center"}} onClick={()=>{remove(item)}}className='btn'>
                        <AiFillDelete />
                        </button> 
                        </td>                      
                        </tr>
                        )
                    })
                        }
                        <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <div className="flex-column ms-4">
                              <p className="mb-2"></p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}></p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}></p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}>Total Price:</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0 fs-8" style={{"fontWeight": "800!important"}}>{`${totalprice}$`}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{"fontWeight": "500;"}}></p>
                        </td>
                        </tr>
                    </tbody>
                  </table>
                  <div style={{"width":"90%","display": "flex","justify-content": "flex-end"}}>
                  <button onClick={()=>{handleSubmit()}}type="button" className="btn btn-primary btn-block btn-md">
                          <div className="d-flex justify-content-between">
                            <span>Checkout </span>
                          </div>
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}

export default MyCart
