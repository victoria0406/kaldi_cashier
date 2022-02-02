const express = require('express');
const cors = require("cors");

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    cors: {
      origin: "http://localhost:3000", //이건 프론트 껄로 해야함
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

app.use(express.urlencoded({extended: true}));
app.use(cors()); // cors 미들웨어 사용
app.use(express.json());


let order_list = new Map();//순서는 유지해야함.
let order_info = new Map();


var order_num = 1;

const PORT = 80;

app.post("/order",(req, res)=>{
    const menus = req.body.order_menus;
    console.log("I GET", menus);
    order_list.set(order_num,menus);
    return res.status(200).json({
        order_num:order_num++
      });
})

app.get("/order_list",(_,res)=>{
    const order_li = Array.from(order_list.entries());
    console.log(order_li);
    res.json({order_list:order_li});
})

io.on("connection", (socket) =>{
    console.log("user_connect",socket.id);
    socket.on("ready",(num)=>{
        console.log(num);
    })
    socket.on("waiting",(data)=>{
        const num = data.num;
        const id = data.id;
        console.log(num,"번이 기다리는 중")
        if(id!=null){
            order_info.set(num, socket.id)
        }else{
            order_info.set(num, socket.id)
        }
        console.log(order_info);
        io.to(socket.id).emit('infos',socket.id);
    })

    socket.on("ready_manage",(num)=>{
        console.log("ready_on", order_info.get(String(num)));
        io.to(order_info.get(String(num))).emit('ready');
        order_list.delete(String(num));
        order_info.delete(String(num));
    })
})



http.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});