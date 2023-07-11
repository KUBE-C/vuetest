const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义 Administrator 模型的结构
const administratorSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Administrator = mongoose.model('Administrator', administratorSchema);
