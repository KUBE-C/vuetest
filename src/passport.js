const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const Administrator = mongoose.model('Administrator');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();//方法表示要从请求的授权头部中提取 JWT，使用 Bearer Token 方式进行身份验证
                                                               //JWT 通常在 "Authorization" 头部字段中以 "Bearer <token>" 的形式进行传递
opts.secretOrKey = 'secret';//设置了用于验证和解码 JWT 的密钥

module.exports = passport => {
    passport.use('admin-jwt', new JwtStrategy(opts, (jwt_payload, done) => {
            Administrator.findById(jwt_payload.id)
                .then(administrator => {
                    if (administrator) {
                        return done(null, administrator);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => console.log(err));
        })
    );

    passport.use('cust-jwt', new JwtStrategy(opts, (jwt_payload, done) => {
            Customer.findById(jwt_payload.id)
                .then(customer => {
                    if (customer) {
                        return done(null, customer);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => console.log(err));
        })
    );
};
