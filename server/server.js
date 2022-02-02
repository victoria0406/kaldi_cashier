const express = require('express');
const cors = require("cors");

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.urlencoded({extended: true}));
app.use(cors()); // cors 미들웨어 사용
app.use(express.json());

var order_num = 1;

const PORT = 80;

app.post("/order",(req, res)=>{
    const menus = req.body.order_menus;
    console.log("I GET", menus);
    return res.status(200).json({
        order_num:order_num++
      });
})




http.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});