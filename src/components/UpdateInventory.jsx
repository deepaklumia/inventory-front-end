import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function UpdateInventory(){
   let navigate = useNavigate();
  let {id} = useParams();
  console.log(id);
  const [data,setData] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:5000/inventory/${id}`)
    .then((response)=>{
      console.log(response.data.data);
      setData(response.data.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  
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
  function updateInventory(e){
    e.preventDefault();
    axios.put(`http://localhost:5000/inventory/${id}`,data)
    .then((response)=>{
      console.log(response.data.data)
    })
    .catch((error)=>{
      console.log(error);
    })
    alert('Inventory Update Successfully')
    navigate("/");
  }
    
  return (
    <>
     <div className='addInventroy mx-5 border text-center p-3'>
      <form method='put' onSubmit={(e)=>{updateInventory(e)}} >
        <div className='d-flex justify-content-center'>
        <label>Inventory Id:</label>
        <input type='number' name='itemId' onChange={(e)=>{onchengHandle(e)}} value={data.itemId} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Title:</label>
        <input type='text' name='title'onChange={(e)=>{onchengHandle(e)}} value={data.title} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Price:</label>
        <input type='number' name='price' onChange={(e)=>{onchengHandle(e)}} step=".01" value={data.price} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Brand:</label>
        <input type='text' name='brand' onChange={(e)=>{onchengHandle(e)}} value={data.brand} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Category:</label>
        <input type='text' name='category' onChange={(e)=>{onchengHandle(e)}} value={data.category} /> 
        </div>
         <div className='d-flex justify-content-center'>
        <label>Description:</label>
        <input type='text' name='description' onChange={(e)=>{onchengHandle(e)}} value={data.description} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Image:</label>
        <input type='text' name='image' onChange={(e)=>{onchengHandle(e)}} value={data.image} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Rating:</label>
        <input type='number' step=".01" name='rate' onChange={(e)=>{onchengHandle(e)}} value={data.rating?data.rating.rate:null} />
        </div>
         <div className='d-flex justify-content-center'>
        <label>Stock:</label>
        <input type='number' step=".01" name='stock' onChange={(e)=>{onchengHandle(e)}} value={data.rating?data.rating.stock:null} />
        </div>
        <div className='d-flex justify-content-center'>
          <button type="submit" className='btn btn-primary'>Update Inventory</button>
        </div>
      </form>
    </div>
  </>
  )
}