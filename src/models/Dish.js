const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义 Dish 模型的结构
const dishSchema = new Schema({
    dishName: {
        type: String,
        required: true,
    },
    dishKind: {
        type: String,
        required: true
    },
    dishPrice: {
        type: String,
        required: true
    },
    dishContent: {
        type: String,
        required: true
    }
});


// 创建 Customer 模型
module.exports = Dish = mongoose.model('Dish', dishSchema);
//module.exports = Customer;
/*通过导出模型，您可以在其他文件中轻松地访问和使用 Customer 对象，执行诸如数据库查询、插入、更新等操作*/