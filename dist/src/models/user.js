"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    employeeCode: String,
    name: String,
    age: Number,
    salary: Number,
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'branch'
    }
});
const UserSchema = mongoose.model('User', userSchema);
exports.default = UserSchema;
//# sourceMappingURL=user.js.map