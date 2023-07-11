const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义 Customer 模型的结构
const customerSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});


// 创建 Customer 模型
module.exports = Customer = mongoose.model('Customer', customerSchema);
//module.exports = Customer;
/*通过导出模型，您可以在其他文件中轻松地访问和使用 Customer 对象，执行诸如数据库查询、插入、更新等操作*/