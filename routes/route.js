import express from 'express';

const route = express.Router();
import { getAllRecord,createNewRecord,readRecordById,updateRecordById,deleteRecordById } from '../controllers/crudControllers.js';
route.get('/',getAllRecord );

route.post('/create',createNewRecord );

route.get('/read/:id',readRecordById);

route.post('/update/:id',updateRecordById);

route.get('/delete/:id',deleteRecordById);



export default route;
