import mongoose from "mongoose";


const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_OPTION ={
            dbName : 'crud',
        }
 await mongoose.connect(DATABASE_URL, DB_OPTION);
 console.log('connection successfull')
    } catch (error) {
        console.log(error.message)
    }

}



export default connectDB;