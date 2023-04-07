import React from 'react'
import { useState,useEffect } from 'react';
import { useGlobalContext } from './context';

export default function Card({_id,name,description,img,options}) {
  let priceOptions=Object.keys(options[0]);
  const option=options[0]
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);
  const [price, setPrice] = useState(number*getkey(size));
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const{adding,cart}=useGlobalContext();
  
  function getkey(size){
    for(let i in option){
      if(i===size)
      return(option[i])
    }
  }
  useEffect(() => {
    setPrice(number*getkey(size)) 
  }, [size,number]);

  function handleCart(){
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  adding({_id:_id,name:name,img:img,size:size,number:number,price:price});
  }
    return (
    <div className='m-2 container' style={{"border":"none !important"}}>
  <section className=" my-5" style={{"maxWidth": "20rem"}}>    
    <div className="card border-0">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={img} className="img-fluid" style={{"height":"9rem","width":"16rem","objectFit":"cover"}} />
        <a href="#!">
          <div className="mask" style={{"backgroundColor":" rgba(251, 251, 251, 0.15)"}}></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title font-weight-bold" style={{"fontSize":"1.3rem"}}><a>{name}</a></h5>
        <p className="card-text font-weight-light "style={{"fontSize":"0.8rem"}}>
          {description}
        </p>
        <hr className="my-4" />
        <select onClick={(e)=>{setNumber(e.target.value)}} className='m-2 h-100 w-40 rounded form-select form-select-sm'style={{"width":"40%","display":"inline"}}>
                     {Array.from(Array(6),(e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })}
            </select>
            <select className='m-2 h-100 w-40 rounded form-select form-select-sm'style={{"width":"40%","display":"inline"}} onClick={(e)=>{setSize(e.target.value)}}>
              {priceOptions.map((option)=>{
                return(
                  <option key={option} value={option}>{option}</option>
                )
                }
              )}
            </select>
            <div className='d-inline h-100 fs-5 m-1'>              
              {`Total Price : ${price}$`}
            </div>
            <hr />
            <div>
            <button className='btn btn-secondary'  onClick={()=>{handleCart()}}>Add To Cart</button>
            </div>
      </div>
    </div>
    
  </section>
</div>
  )
}
