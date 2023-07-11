const express = require('express');//引入Express框架，是一个流行的 Node.js Web 应用程序框架，它提供了一组简单而强大的工具和中间件，用于构建 Web 应用程序和 API。
const jwt = require('jsonwebtoken');/*是一个 Node.js 的库，用于生成和验证 JSON Web Tokens (JWT)。JWT 是一种用于在网络应用中安全传输信息的令牌。
                                    //可以用来生成 JWT、验证 JWT 的有效性以及解码 JWT 中的信息
                                    //使用 jwt.sign() 方法生成一个 JWT，将某些信息（如用户身份）加密到令牌中
                                    使用 jwt.verify() 方法验证从客户端传递过来的 JWT 是否有效*/
const passport = require('passport');
const router = express.Router();
const Dish = require('../models/Dish');

// @route  GET api/dishes/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
    res.json({ msg: 'dish test works' });
});

// @route  POST api/dishes/add
// @desc   创建信息接口
// @access Private
router.post("/add", passport.authenticate("admin-jwt", { session: false }), (req, res) => {
        const dishFields = {};
        Dish.findOne({dishName: req.body.dishName})
            .then(dish => {
                if (dish) {
                    return res.status(400).json('该菜品已存在!');
                } else {
                    if (req.body.dishName) dishFields.dishName = req.body.dishName;
                    if (req.body.dishKind) dishFields.dishKind = req.body.dishKind;
                    if (req.body.dishPrice) dishFields.dishPrice = req.body.dishPrice;
                    if (req.body.dishContent) dishFields.dishContent = req.body.dishContent;
                    //if (req.body.remark) dishFields.remark = req.body.remark;

                    new Dish(profileFields).save().then((dish) => {
                        res.json(dish);
                    });
                }
            });
    }
);

// @route  GET api/dishes
// @desc   获取所有信息
// @access Private
router.get("/", passport.authenticate("admin-jwt", { session: false }), (req, res) => {
        Dish.find()
            .then((dish) => {
                if (!dish) {
                    return res.status(404).json("没有任何内容");
                }
                res.json(dish);
            })
            .catch((err) => res.status(400).json(err));
    }
);

// @route  GET api/dishes/:id
// @desc   获取单个信息
// @access Private
router.get("/:id", passport.authenticate("admin-jwt", { session: false }), (req, res) => {
        Dish.findOne({ _id: req.params.id })
            .then((dish) => {
                if (!dish) {
                    return res.status(404).json("没有任何内容");
                }
                res.json(dish);
            })
            .catch((err) => res.status(404).json(err));
    }
);

// @route  POST api/dishes/edit
// @desc   编辑信息接口
// @access Private
router.post("/edit/:id", passport.authenticate("admin-jwt", { session: false }), (req, res) => {
        const dishFields = {};

        if (req.body.dishName) dishFields.dishName = req.body.dishName;
        if (req.body.dishKind) dishFields.dishKind = req.body.dishKind;
        if (req.body.dishPrice) dishFields.dishPrice = req.body.dishPrice;
        if (req.body.dishContent) dishFields.dishContent = req.body.dishContent;
        //if (req.body.remark) profileFields.remark = req.body.remark;

        Dish.findOneAndUpdate(
            { _id: req.params.id },
            { $set: dishFields },
            { new: true }
        ).then((dish) => res.json(dish));
    }
);

// @route  POST api/dishes/delete/:id
// @desc   删除信息接口
// @access Private
router.delete("/delete/:id", passport.authenticate("admin-jwt", { session: false }), (req, res) => {
        Dish.findOneAndRemove({ _id: req.params.id })
            .then((dish) => {
                res.json(dish);
            })
            .catch((err) => res.status(404).json("删除失败!"));
    }
    // Profile.deleteOne({ _id: req.params.id })
    //   .then(profile => {
    //     profile.save().then(profile => res.json(profile));
    //   })
);


module.exports = router;