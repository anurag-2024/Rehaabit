import mongoose from "mongoose";
async function connect() {
    mongoose.set('strictQuery',true);
    console.log(process.env.DB_URI);
    const db=await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected Successfully");
    return db;
}
export default connect;