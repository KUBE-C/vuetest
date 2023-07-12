const bcrypt = require('bcryptjs');//加密
const express = require('express');//引入Express框架，是一个流行的 Node.js Web 应用程序框架，它提供了一组简单而强大的工具和中间件，用于构建 Web 应用程序和 API。
const jwt = require('jsonwebtoken');/*是一个 Node.js 的库，用于生成和验证 JSON Web Tokens (JWT)。JWT 是一种用于在网络应用中安全传输信息的令牌。
                                    //可以用来生成 JWT、验证 JWT 的有效性以及解码 JWT 中的信息
                                    //使用 jwt.sign() 方法生成一个 JWT，将某些信息（如用户身份）加密到令牌中
                                    使用 jwt.verify() 方法验证从客户端传递过来的 JWT 是否有效*/
const passport = require('passport');
const router = express.Router();
const Customer = require('../models/Customer');
const Administrator = require('../models/Administrator');

// @route  GET api/users/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
    res.json({ msg: 'login works' });
});

// @route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
router.post('/register', (req, res) => {
   // console.log(req.body);
    // 查询数据库中是否拥有相同的用户名
    Customer.findOne({ userName: req.body.userName })
        .then(customer => {
            if (customer) {
                return res.status(400).json('该用户名已被注册!');
            } else {
                // 创建新用户实例
                const newCustomer = new Customer({
                    userName: req.body.userName,
                    password: req.body.password,
                });

            //To hash a password:
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newCustomer.password, salt, function (err, hash) {
                    // Store hash in your password DB.
                    if (err) throw err;

                    newCustomer.password = hash;

                    newCustomer.save()
                        .then(customer => res.json(customer))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route  POST api/users/login
// @desc   返回token jwt passport
// @access public
router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const kind = req.body.kind;

    if (kind === '管理员') {
        // 查询管理员表
        Administrator.findOne({ userName }).then(administrator => {
            if (!administrator) {
                return res.status(404).json('管理员不存在!');
            }

            if (password === administrator.password) {
                const rule = { // 定义规则
                    id: administrator.id,
                    userName: administrator.userName,
                };
                jwt.sign(rule, 'secret', { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                return res.status(400).json('密码错误!');
            }
        });
    } else if (kind === '顾客') {
        // 查询顾客表
        Customer.findOne({ userName }).then(customer => {
            if (!customer) {
                return res.status(404).json('顾客不存在!');
            }

            // 密码匹配
            bcrypt.compare(password, customer.password).then(isMatch => {
                if (isMatch) {
                    const rule = { //定义规则
                        id: customer.id,
                        userName: customer.userName,
                    };
                    jwt.sign(rule, "secret", { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    });
                } else {
                    return res.status(400).json('密码错误!');
                }
            });
        });
    } else {
        return res.status(400).json('无效的用户类型!');
    }
});

//@route  GET api/users/current
//@desc   return current customer
//@access Private
router.get(
    '/current',
    passport.authenticate('cust-jwt', { session: false }),//验证token
    (req, res) => {
        res.json({
            id:req.user.id,
            userName: req.user.userName
        });
    }
);

module.exports = router;