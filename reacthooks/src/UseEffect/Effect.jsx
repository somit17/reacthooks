import axios from "axios"
import { useEffect, useState } from "react"
export const Effect=()=>{

const [data,setData] = useState("");

//Primarily call API on page Load
useEffect(()=>{
 axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
    setData(response.data[0].email);
    console.log('API was called ');
 })
},[])


return <div>
  Hello  {data}

  
</div>
}