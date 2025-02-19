import express from 'express';
const app = express();
const port = 3000;
import connectDB from './db/connectdb.js';
// import { connect } from 'mongoose';
import route  from './routes/route.js';
const DATABASE_URL = process.env.DATABASE_URL||"mongodb://localhost:27017/";


// database connection
connectDB(DATABASE_URL)

//API
app.use(express.json())


// route
app.use('/',route);


app.listen(port, ()=>{
   console.log(`$serve is running at port : ${port}`); 
})