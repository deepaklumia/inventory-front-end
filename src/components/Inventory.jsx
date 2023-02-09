import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
export default function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const getData = async () => {
    await axios.get('http://localhost:5000/inventory')
      .then((response) => {
        console.log(response.data.data);
        setInventoryData(response.data.data);
      })
      .catch((error) => { console.log(error) })
  }
  useEffect(() => {
    getData();
  }, []);
  
  function deleteInventory(id) {
    axios.delete(`http://localhost:5000/inventory/${id}`);
    setInventoryData((prevState) => {
      console.log(prevState.filter(data => data._id !== id));
      return prevState.filter(data => data._id !== id);
    })
  }

  return (
    <div className="d-flex flex-wrap px-3 m-5 gap-3">
      {inventoryData.length > 0 ? inventoryData.map((inventory) => {
        return (
          <div className="card" style={{ "width": "18rem" }} key={inventory._id}>
            <Link to={`/singleInventory/${inventory._id}`}>
            <img src={inventory.image} className="card-img-top" alt="..." style={{height:"200px",
  width:"280px"}} />
              </Link>
            <div className="card-body">
              <h5 className="card-title">{inventory.title.substring(0, 25)}</h5>
              <p className="card-text">{inventory.description.substring(0, 100)}</p>
             <Link to={`updateInventory/${inventory._id}`} className="btn btn-primary mx-2">Edit</Link>
              <button className="btn btn-primary" onClick={() => { deleteInventory(inventory._id) }}>Delete</button>
            </div>
          </div>
        )
      }) : <h1 className="text-center">Empty Inventory</h1>}
      <Link to='/addInventory' className="btn btn-primary add">
        <div>
          <h2>Add Inventroy</h2>
        </div>
      </Link>
    </div>
  )
}