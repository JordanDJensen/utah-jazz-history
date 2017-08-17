import axios from "axios";

export function setData(data){
    return{
        type: "SET_DATA",
        data
    }
}

export function loadData(){
 return(dispatch) =>{
 return axios.get("http://localhost:8080/roster").then((response) =>{
     dispatch(setData(response.data.data));
 }).catch((error) =>{
     throw error
 });
 }
}

