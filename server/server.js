import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./db/connection.js";
const app = express();
import morgan from "morgan";
import userRoutes from "./api/routes/userRoutes.js";
import taskRoutes from "./api/routes/taskRoutes.js";
import 'dotenv/config';

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const port=process.env.PORT||8080;
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/api",userRoutes);
app.use("/api",taskRoutes);

connect()
.then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
    catch(err){
        console.log("Cannot connect to Server");
    }
})
.catch((err)=>{
    console.log("Invalid database connection");
});
