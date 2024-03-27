import dotenv from 'dotenv'
import connectDb from './db/db.js';

dotenv.config({
    path:'./env'
})
connectDb();








// import {DB_NAME} from './constants';
// import express from 'express';

// const app = express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log('error: ', error);
//         });
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(`the error is coming: ${error}`);
//     };
// })();

