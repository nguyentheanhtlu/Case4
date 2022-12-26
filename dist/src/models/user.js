"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    name: String,
    code: String,
    theoreticalScore: Number,
    practicePoints: Number,
    describe: String,
    evaluate: String,
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }
});
const UserSchema = mongoose.model('User', userSchema);
exports.default = UserSchema;
//# sourceMappingURL=user.js.map