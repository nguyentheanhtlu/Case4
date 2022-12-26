"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const classSchema = new mongoose.Schema({
    name: String,
});
const Class = mongoose.model('Class', classSchema);
exports.default = Class;
//# sourceMappingURL=class.js.map