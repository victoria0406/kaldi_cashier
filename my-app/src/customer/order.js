import { useEffect, useState } from 'react';
import './customer.css';

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
    return(
        <div>
            <div>주문을 기다리는 중입니다.</div>
            <div>대기번호{props.order_num}번 손님</div>
            <div>주문 내역</div>
            {menus.map((el,index)=>{
                return(
                    <Orderlist item = {el.item} money = {el.money*props.order_menus[index]} count = {props.order_menus[index]} />
                )
            })}
        </div>
    )
}

export default Order;