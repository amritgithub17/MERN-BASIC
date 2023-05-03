
import userModel from "../models/User.js"
export const addUser = async(request,response) =>{
    const user= request.body;
    const newUser = new userModel(user)
    try{
        await newUser.save();
        response.status(201).json(newUser)
    }
    catch(error)
    {
        response.status(404).json({message : error.message})
    }
}
export const getUser = async(request,response) =>{
    
    try{
        const data = await userModel.find();
        console.log(data);
        response.status(200).json(data)
    }
    catch(error)
    {
        response.status(404).json({message : error.message})
    }
}