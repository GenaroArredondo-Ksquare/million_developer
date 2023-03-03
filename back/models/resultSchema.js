import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    username : { type : String },
    difficulty: { type : String},
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now.toLocaleString()}
})

export default mongoose.model('result', resultModel);