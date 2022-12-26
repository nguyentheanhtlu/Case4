const mongoose = require('../config/database');

const classSchema = new mongoose.Schema({
    name : String,
})

const Class = mongoose.model('Class',classSchema)

export default Class;