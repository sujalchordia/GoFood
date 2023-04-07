import React from 'react'

function Carousel() {
  return (
    <div>
    <div style={{"objectFit":"contain"}}id="carouselExample" className="carousel slide">
  <div style={{"maxHeight":"500px"}}className="carousel-inner">
    <div className="carousel-item active">
      <img  className="d-block w-100" style={{"filter":"brightness(30%)"}}src="https://tse1.mm.bing.net/th?id=OIP.pX33sHvRik5D8ML5XwXT_wHaFj&pid=Api&P=0" alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{"filter":"brightness(30%)"}}src="https://i.ytimg.com/vi/TVMw0d1m9kM/maxresdefault.jpg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  className="d-block w-100" style={{"filter":"brightness(30%)"}}src="https://cdn0.wideopeneats.com/wp-content/uploads/2018/02/AdobeStock_100708611.jpeg"  alt="..."/>
    </div>
    <form className="carousel-caption form-inline d-flex mr-auto" style={{"zIndex":"10" }}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn  btn-rounded btn-sm m-2 bg-success my-0 text-white" type="submit">Search</button>
  </form>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousel
