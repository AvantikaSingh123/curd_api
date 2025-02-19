 import studentModel from "../models/crudSchema.js";
 
 
 const getAllRecord= async(req,res)=>{

    try{
 const data = await studentModel.find({})
 res.send(data)
    } catch(error){
console.log(error.message)
    }
};

 const createNewRecord = async(req,res)=>{
try {
    const {name,age,city,fees} = req.body;
    const data = await studentModel({
        name:name,
        age:age,
        city:city,
        fees:fees
    });
    if(data){
      await  data.save();
      console.log("New Record Created!")
    }
    res.send(data)
} catch(error) {
console.log(error.message)
}
     
};

const readRecordById = async(req,res)=>{
    try{
 const result =await studentModel.findById(req.params.id)
 res.send(result)
    } catch (error){
console.log(error.message)
    }
};

const updateRecordById = async(req,res)=>{
   try{
 const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
    res.send(result)
   } catch (error){
    console.log(error.message)
   }
  
};


const deleteRecordById = async(req,res)=>{
   try{
 const result= await studentModel.findByIdAndDelete(req.params.id)
 res.send(result)
   } catch (error){
    console.log(error.message)
   }
};


export {getAllRecord, createNewRecord, readRecordById,updateRecordById,deleteRecordById}