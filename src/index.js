import dotenv from 'dotenv';
import connectDb from './db/db.js';
import express from 'express';

dotenv.config({
  path: './env',
});

const app = express();

connectDb()
  .then(() => {
    app.on('error', (error) => {
      console.log('errr: ', error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log('server is running at port :', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log('mongo DB connection failed :', err);
  });

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
