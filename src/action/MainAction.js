import { BaseUrl } from "../BaseUrl"

import axios from "axios"
import { getBannerFunk, getContactFunk } from "../redux/MainReducer";

export const getContactList=()=>async dispatch=>{
    return await axios.get(`${BaseUrl}site/contactinformation-list/`)
    .then(resp=>{
        console.log(resp.data);
        dispatch(getContactFunk(resp.data))
    })

}


export const getBannerList=()=>async dispatch=>{
    return await axios.get(`${BaseUrl}site/banners-list/`)
    .then(resp=>{
        console.log(resp.data);
        dispatch(getBannerFunk(resp.data))
    })

}