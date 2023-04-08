import React, { useState, useContext, useEffect,useReducer} from 'react'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState={
cart:[],
totalprice:0,
showsuccessmessage:false,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    let sum =0
      state.cart.map((item)=>{
          sum=sum+item.price;
      })
  totalpricing(sum)
  },[state.cart])
  
  const adding=(statement)=>{
    dispatch({type:"ADD",payload:statement});
  }
  const setShowSuccessMessage=(statement)=>{
    dispatch({type:"SUCCESS",payload:statement});
  }
  const totalpricing=(statement)=>{
    dispatch({type:"Price",payload:statement});
  }
  const remove=(statement)=>{
    dispatch({type:"REMOVE",payload:statement});
  }
  const drop=()=>{
    dispatch({type:"DROP"});
  }

  return <AppContext.Provider value={{
    ...state,
    adding,
    remove,
    drop,
    setShowSuccessMessage
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
