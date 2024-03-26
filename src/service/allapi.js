import BASE_URL from "./baseurl";
import { commonRequest } from "./commonReq";

//register
export const registerUser=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/users/register`,body)
}

//login
export const loginUser=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/users/login`,body)
}
//sell
export const SellItems=async(body,headers)=>{
    return await commonRequest("POST",`${BASE_URL}/users/sell`,body,headers)
}

//create profile
export const CreatePro=async(body,headers)=>{
    return await commonRequest("POST",`${BASE_URL}/users/createprofile`,body,headers)
}
//get all sell items
export const getAll=async(searchData)=>{
    return await commonRequest("GET",`${BASE_URL}/users/getitems?search=${searchData}`,"")
}
//get profile
export const getPro=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/users/getprofile/${id}`,"")
}

