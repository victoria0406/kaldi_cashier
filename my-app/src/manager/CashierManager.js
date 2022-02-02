import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import io from 'socket.io-client';


const BASE_URL = "http://localhost:80"

function Orderlist(props){
    function ready_menu(){
        props.setRenew(true);
        console.log("ready_manage",props.num);
        props.socket.emit('ready_manage',props.num);
    }
    return(
        <div>
            <div>{props.num}</div>
            <div>{props.menus}</div>
            <button onClick={ready_menu}>메뉴 준비 완료</button>
        </div>
    )
}

function CashierManager(){
    const [order_list, setOrderlist] = useState([]);
    const [renew, setRenew] = useState(true);
    const [init, setinit] = useState(true); //원래는 소켓 값 받고 true
    const [socket, setSocket] = useState(null);
    useEffect(()=>{
        if(renew){
            axios.get(BASE_URL+"/order_list")
            .then((response)=>{
                setOrderlist(response.data.order_list);
            })
            setRenew(false);
        }
        
    },[renew])

    useEffect(()=>{
        console.log("hihi");
        setSocket(io.connect(BASE_URL,{
            withCredentials: true,
            extraHeaders: {
            "my-custom-header": "abcd"
            }
        }))
    },[])
    

    
    return(
        <div>
            <div>주문현황</div>
            {order_list.map((el)=>{
                return(
                    <Orderlist num = {el[0]} menus = {el[1]} setRenew={setRenew} socket = {socket}/>
                )
            })}
        </div>
    )
}

export default CashierManager;