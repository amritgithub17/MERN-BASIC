import mongoose from "mongoose";

const userSchema =new  mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    username:{
        type: String,
        required:true,
    }

})

const userModel = mongoose.model("users",userSchema)
export default userModel;