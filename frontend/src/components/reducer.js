
export default (state , { type, payload }) => {
    switch (type) {
  
    case "ADD":{
      let flag=0;
        const carts=state.cart.map((item)=>{
            if(item._id===payload._id && item.size===payload.size){
              flag=1;
              return {
                "_id":item._id,
                "name":item.name,
                "img":item.img,
                "size":item.size,
                "number":item.number+payload.number,
                "price":item.price,
              }
            }else{
              return(
                item
              )
              
            }
        })
        if(flag==0){
          carts.push(payload)
        }
      return {...state,cart:carts}
    }
    case "Price":{
    return {...state,totalprice:payload}
  }
  case "DROP":{
    return {...state,cart:[]}
  }
  case "REMOVE":{
    const carts=state.cart.filter((item)=>{
        if(item._id!==payload._id){
          return item;
        }
    })
    console.log(carts)
    return {...state,cart:carts}
  }
  
    default:
      return state
    }
  }
  