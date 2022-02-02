
import { useEffect, useState } from 'react';
import './customer.css';


const menus = [{item: "아메리카노", money: 2000}, {item: "카페라떼",money:2500},{item: "카페모카",money:3000},{item: "카라멜 마끼아또",money:3000},{item: "바닐라 라떼",money:3000},{item: "더치커피",money:2500},{item: "더치라떼",money:3000},{item: "사이공라떼",money:3000}]; //데이터 절약을 위해서 그냥 리스트 문으로? 

function Menulist(props){
  function add_menu(){
    props.setOrder(props.order_menu.map((n,index)=>index===props.index?n+1:n))
    props.setCost(props.cost+props.money);
  }
  return(
    <div className='menu_list'>
      <div>{props.item}</div>
      <div>{props.money}</div>
      <button onClick={add_menu}>장바구니에 담기</button>
    </div>
  )
}

function Orderlist(props){
  return(
    <div className='menu_list'>
      <div>{props.item}</div>
      <div>{props.money}</div>
      <div>{props.count}</div>
    </div>
  )
}

function Menu(props) {
  
  return (
    <div>
      {menus.map((el,index)=>{
        return(
          <Menulist item = {el.item} money = {el.money} index = {index} order_menu = {props.order_menus} setOrder={props.setOrder} cost = {props.cost} setCost={props.setCost}/>
        )
      })}
      <div>
        주문내역
      </div>
      {menus.map((el,index)=>{
        return(
          <Orderlist item = {el.item} money = {el.money*props.order_menus[index]} count = {props.order_menus[index]} />
        )
      })}
      <div>{props.cost}</div>
      <button onClick={()=>{props.setOrdered(true)}}>주문하기</button>
    </div>
  );
}

export default Menu;
