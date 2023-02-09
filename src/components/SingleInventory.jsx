import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
export default function SingleInventory(){
   let {id} = useParams();
  const [data,setData] = useState({});
  useEffect(()=>{
    axios.get(`http://localhost:5000/inventory/${id}`)
    .then((response)=>{
      console.log(response.data.data);
      setData(response.data.data);
    })
  },[])
  return (
   <div className="text-center">
     <div>
   <img src={data.image} className="" alt="..." style={{height:"200px",
  width:"280px"}} />
       </div>
      <h2>{data.title}</h2>
     <p><strong>Category:</strong> {data.category}</p>
     <p><strong>Description:</strong> {data.description}</p>
     <p><strong>Price: </strong>{data.price}</p>
   </div>
  )
}