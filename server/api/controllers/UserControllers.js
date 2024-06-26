import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
    try{
       const {username,email,password}=req.body;
       if(!username || !email || !password){
           return res.status(400).json({message:"All fields are required"});
       }
       const existusername=await User.findOne({username});
       if(existusername){
           return res.status(404).json({message:"Username already exists"});
       }
       const existemail=await User.findOne({email});
         if(existemail){
              return res.status(404).json({message:"Email already exists"});
         }
         const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                username,
                email,
                password:hashedPassword
            });
            await user.save()
            return res.status(201).send({message:"Registered successfully"});
    }
    catch(err){
        return res.status(500).json({message:"Unable to register"});
    }
}

export const loginUser = async (req, res) => {
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(404).json({message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User does not exist"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id},process.env.TOKEN_SECRET,{expiresIn: '2d'});
        return res.status(200).json({
            token,
            message:"Logged in successfully"
        });
    }
    catch(err){
        return res.status(500).json({message:"Unable to login"});
    }
}