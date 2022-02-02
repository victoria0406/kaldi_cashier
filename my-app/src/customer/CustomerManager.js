import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
  } from "react-router-dom";
  import { useEffect, useState } from "react";
  import axios from "axios";
import Menu from "./Menu";
import Order from "./order";

function CustomerManager(){
const [order_menus,setOrder] = useState([0,0,0,0,0,0,0,0]);
const [cost, setCost] = useState(0);
const [ordered, setOrdered]= useState(false);
//혹시 실수로 새로고침할 수 있으니
useEffect(()=>{
    const temp_menus = localStorage.getItem("order_menus");
    if(temp_menus!=null){
        setOrder(temp_menus.split(",").map((el)=>{return(Number(el))}));
        }
        const temp_ordered = localStorage.getItem("ordered");
        if(temp_ordered!=null){
            setOrdered(temp_ordered);
        }
    },[])
    useEffect(()=>{
        if(cost!=0){
        localStorage.setItem("order_menus",order_menus);
        }
    },[cost])

    useEffect(()=>{
        if(ordered){
            //axios로 정보 보내는 역할
            localStorage.setItem("ordered",ordered);
        }
    },[ordered])

    if(!ordered){
        return(
            <Routes>
                <Route path="/" element = {<Menu order_menus = {order_menus} setOrder = {setOrder} cost = {cost} setCost = {setCost} setOrdered = {setOrdered}/>}/>
            </Routes>
        )
    }else{
        return(
            <Routes>
                <Route path="/" element = {<Order order_menus = {order_menus}/>}/>
            </Routes>
        )
    }

}

export default CustomerManager;