import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function AddInventory(){
  const [data,setData] = useState({
    itemId:null,
    title:'',
    price:null,
    brand:'',
    category:'',
    description:'',
    image:null,
    rating:{
      rate:null,
      stock:null
    }
  })
  let navigate = useNavigate();
  function onchengHandle(e){
    let name = e.target.name;
    let value = e.target.value;
    console.log(name,value)
    if(name === 'rate'){
      setData((prevState)=>{
        return {
          ...prevState,rating:{...prevState.rating,[name]:value}
        }
      })
    }else if(name === 'stock'){
      setData((prevState)=>{
        return {
          ...prevState,rating:{...prevState.rating,[name]:value}
        }
      })
    }else {
      setData((prevState)=>{
        return {
          ...prevState,[name]:value
        }
      })
      }
  }
  function addinventory(e){
    e.preventDefault();
    axios.post('http://localhost:5000/inventory',data)
    .then((response)=>{
      console.log(response.data.data);
    })
    .catch((error)=>{console.log(error)})
    alert('Inventory Add Successfully')
    navigate("/");
  }
  return (
     <div className='addInventroy mx-5 border text-center p-3'>
      <form method='post' onSubmit={(e)=>{addinventory(e)}}>
        <div className='d-flex justify-content-center'>
        <label>Inventory Id:</label>
        <input type='number' name='itemId' required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Title:</label>
        <input type='text' name='title' required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Price:</label>
        <input type='number' name='price' step=".01" required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Brand:</label>
        <input type='text' name='brand'required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Category:</label>
        <input type='text' name='category' required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Description:</label>
        <input type='text' name='description' required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Image:</label>
        <input type='text' name='image' required onChange={(e)=>{onchengHandle(e)}} placeholder="image link"></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Rating:</label>
        <input type='number' name='rate' step=".01" required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
         <div className='d-flex justify-content-center'>
        <label>Stock:</label>
        <input type='number' name='stock' step=".01" required onChange={(e)=>{onchengHandle(e)}}></input>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-primary' type='submit'>Update Inventory</button>
        </div>
      </form>
    </div>
  )
}