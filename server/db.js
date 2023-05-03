import mongoose from "mongoose";


export const Connection = async (username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.tbdocwp.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology : true , useNewUrlParser : true});
        console.log("Connected to DATABASE");
    }
    catch(error)
    {
        console.log("This error is coming while connecting to database",error);
    }
}