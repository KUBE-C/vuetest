const express = require('express');
const mongoose = require('mongoose');
const app = express();// 创建 Express 应用程序实例
//引入body-parser,bodyparser是一类处理request的body的中间件函数,对传入的请求体进行解析
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require('cors');//启用跨域支持

//引入customers.js
const customers = require("./api/users");
const dishes = require("./api/dishes");

require("./passport")(passport);

//引入body-parser中间件
//返回只解析url被编码过的请求体,而且只查看content-type请求头与type选项匹配的请求,并允许选择使用querystring库解析url编码
app.use(bodyParser.urlencoded({ extended: false }));
//返回只解析JSON且只查看Content-Type请求头与type选项匹配的请求
app.use(bodyParser.json());

// 使用cors中间件来启用跨域支持
app.use(cors());

// passport 初始化
app.use(passport.initialize());

//使用routes
app.use("/api/customers",customers);
app.use("/api/dishes",dishes);

// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/ordersystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('成功连接到 MongoDB 数据库');
        // 在成功连接到数据库后，启动应用程序监听端口
        app.listen(3000, () => {
            console.log('应用程序已启动，监听端口 3000');
        });
    })
    .catch((error) => {
        console.error('连接到 MongoDB 数据库失败:', error);
    });
