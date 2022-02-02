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

const BASE_URL = "http://localhost:80"


function CustomerManager(){
const [order_menus,setOrder] = useState([0,0,0,0,0,0,0,0]);
const [cost, setCost] = useState(0);
const [ordered, setOrdered]= useState(false);

const [order_num, setOrdernum]=useState(-1);
//혹시 실수로 새로고침할 수 있으니
useEffect(()=>{
    const temp_menus = localStorage.getItem("order_menus");
    if(temp_menus!=null){
        setOrder(temp_menus.split(",").map((el)=>{return(Number(el))}));
        }
        const temp_order_num = localStorage.getItem("order_num");
        if(temp_order_num!=null){
            setOrdernum(Number(temp_order_num));
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
            //localStorage.setItem("ordered",ordered);
            axios.post(BASE_URL+"/order",{
                order_menus : order_menus
            }).then((response)=>{
                console.log(response.data.order_num);
                setOrdernum(Number(response.data.order_num));
            })

        }
    },[ordered])

    useEffect(()=>{
        if(order_num!==-1){
            localStorage.setItem("order_num", order_num);
        }
    },[order_num])

    if(order_num==-1){
        return(
            <Routes>
                <Route path="/" element = {<Menu order_menus = {order_menus} setOrder = {setOrder} cost = {cost} setCost = {setCost} setOrdered = {setOrdered}/>}/>
            </Routes>
        )
    }else{
        return(
            <Routes>
                <Route path="/" element = {<Order order_menus = {order_menus} order_num={order_num}/>}/>
            </Routes>
        )
    }

}

export default CustomerManager;