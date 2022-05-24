const express = require("express");
const monngodb = require('mongodb');
const mongoose = require('mongoose')
const cors = require("cors");
require("dotenv").config();
const app = express();
const router = require('./routes/radioRoutes')
// Turtle_venture
// SIloeRkbl5vbB9ST
// T_APP
// Us34fZRU4iq7QByC
const port = 5000 || process.env.PORT
app.use(express.json());
app.use(cors());

//router
app.use('/dashboard',router)


const url = (`mongodb+srv://T_APP:Us34fZRU4iq7QByC@cluster0.dsw7w.mongodb.net/?retryWrites=true&w=majority`)
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

// const uri=  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.aubya.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   });

//   async function run() {
//     try {
//         await client.connect();
//     }catch(err){

//     }
//   }
// run()
   


  

  app.listen(port,()=>{
      console.log(`listening on port ${port}`);
})
