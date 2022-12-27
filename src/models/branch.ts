const mongoose = require('../config/database');

const branchSchema = new mongoose.Schema({
    name : String,
})

const branch = mongoose.model('branch',branchSchema)

export default branch;