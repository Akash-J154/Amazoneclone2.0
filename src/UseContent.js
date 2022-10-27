
import { useState} from 'react'
import React from 'react';
export const UseContent=React.createContext({})
export const UseAuth = ({children})=>{
const [cartvalue,setval]=useState(0)
const [cartitems,setitems]=useState([])
const [totalprice,setprice]=useState(0)
return(
<UseContent.Provider value = {{cartvalue,setval,cartitems,setitems,totalprice,setprice}}>
        {children}
    </UseContent.Provider>
)

}
