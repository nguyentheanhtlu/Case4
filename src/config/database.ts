import * as mongoose from "mongoose";

mongoose.connect("mongodb+srv://theanh:theanh3012@theanh.ord0sxz.mongodb.net/Case").catch(err =>{
    console.log(err);
});

module.exports = mongoose;