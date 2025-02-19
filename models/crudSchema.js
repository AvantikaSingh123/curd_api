import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required: true,
    },
    city :{
        type: String,
        required: true,
    },
    fees :{
        type: mongoose.Decimal128,
        required: true,
        validate : (value)=> 1000.5
    }
});

//model
const studentModel = mongoose.model('student', studentSchema);

export default studentModel;