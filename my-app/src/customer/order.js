import { useEffect, useState } from 'react';
import io from 'socket.io-client';


import './customer.css';

const BASE_URL = "http://localhost:80"

const menus = [{item: "아메리카노", money: 2000}, {item: "카페라떼",money:2500},{item: "카페모카",money:3000},{item: "카라멜 마끼아또",money:3000},{item: "바닐라 라떼",money:3000},{item: "더치커피",money:2500},{item: "더치라떼",money:3000},{item: "사이공라떼",money:3000}]; //데이터 절약을 위해서 그냥 리스트 문으로? 

function Orderlist(props){
    return(
      <div className='menu_list'>
        <div>{props.item}</div>
        <div>{props.money}</div>
        <div>{props.count}</div>
      </div>
    )
  }
  

function Order(props){
  const [order_state, setOrderstate] = useState(0);   
  const [socket, setSocket] = useState(null);
  const [init, setInit] = useState(false);
  useEffect(()=>{
      setSocket(io.connect(BASE_URL,{
        withCredentials: true,
        extraHeaders: {
        "my-custom-header": "abcd"
        }
      }))
    setInit(true);

  },[])

  useEffect(()=>{
    if(init){
      console.log(localStorage.getItem("order_num"),localStorage.getItem("socket_id"));
      socket.emit('waiting', {num:localStorage.getItem("order_num"),id:localStorage.getItem("socket_id")});
    }
  },[init])

  useEffect(()=>{
    if(init){
      socket.on('ready',()=>{
        console.log("ready");
        setOrderstate(1);
      })
      socket.on('infos',(id)=>{
        console.log(id);
        localStorage.setItem("socket_id",id);
      })
    }
    
  })
  
  function reset(){
    props.setOrdernum(-1);
    localStorage.clear();
    //여기서 주의사항: 이건 디버깅용
  }
    return(
        <div>
            <div>주문을 기다리는 중입니다.</div>
            <div>대기번호{props.order_num}번 손님</div>
            <div>{order_state===0?"대기중":"완성했습니당"}</div>
            <div>주문 내역</div>
            {menus.map((el,index)=>{
                return(
                    <Orderlist item = {el.item} money = {el.money*props.order_menus[index]} count = {props.order_menus[index]} />
                )
            })}
            <button onClick={reset}>다시 주문하기</button>
        </div>
    )
}

export default Order;