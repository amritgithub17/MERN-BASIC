import axios from "axios";
const URL="http://localhost:8000"
export const addUser = async (data) =>{
    try{
        await axios.post(`${URL}/adduser`,data);
        console.log(data);
    }
    catch(err)
    {
        console.log("This error occurs at frontend while adding data",err);
    }
}
export const getUser = async () =>{
    try{
        return await axios.get(`${URL}/getuser`);
        // console.log(data);
    }
    catch(err)
    {
        console.log("This error occurs at frontend while loading data",err);
    }
}