
import { useState} from 'react'
import React from 'react';
export const UseContent=React.createContext({})
export const UseAuth = ({children})=>{
const [cartvalue,setval]=useState(0)
const [cartitems,setitems]=useState([])
const [totalprice,setprice]=useState(0)
const [searchbar,setsearchbar]=useState('')
const [personalinfo,setpersonalinfo]=useState({})
let products=[{id:0, text:"phone",rating:4,img:"/phone.jpg",price:
124},{id:1, text:"phone",rating:3,img:"/phone.jpg",price:
1244},{id:2, text:"laptop fan",rating:3.5,img:"/fan.jpg",price:
1274},{id:3, text:"mouse",rating:2.5,img:"/mouse.jpg",price:
1224},{id:4, text:"claw",rating:5,img:"/claw.jpg",price:
1424},{id:5, text:"keyboard",rating:3,img:"/keyboard.jpg",price:
7124},{id:6, text:"boat",rating:4,img:"/boat.jpg",price:
1824},{id:7, text:"logitech ",rating:4,img:"/logitech.jpg",price:
3124},{id:8, text:"rpm",rating:4,img:"/rpm.jpg",price:
8124},{id:9, text:"mousepad",rating:4,img:"/mousepad.jpg",price:
1124},{id:10, text:"phone",rating:4,img:"/phone.jpg",price:
12124}]
return(
<UseContent.Provider value = {{cartvalue,setval,cartitems,setitems,totalprice,setprice,personalinfo,setpersonalinfo,products,searchbar,setsearchbar}}>
        {children}
    </UseContent.Provider>
)

}
