"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const branchSchema = new mongoose.Schema({
    name: String,
});
const branch = mongoose.model('branch', branchSchema);
exports.default = branch;
//# sourceMappingURL=branch.js.map