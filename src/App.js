import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('guitars');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [guitars, setGuitars]= useState([getDatafromLS()]);

  //input field states
  const [name, setName]= useState('');
  const [type, setType]= useState('');
  const [color, setColor]= useState('');
  const [price, setPrice]= useState('');

  //form submit event
  const handleAddGuitarSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let guitar={
      name,
      type,
      color,
      price
    }
    setGuitars([...guitars, guitar]);
    setName('');
    setType('');
    setColor('');
    setPrice('');
  }

  //delete from LS
  const deleteGuitar=(name)=>{
    const filteredGuitars=guitars.filter((element,index)=>{
      return element.name !== name
    })
    setGuitars(filteredGuitars);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('guitars', JSON.stringify(guitars));
  },[guitars])

  return(
    <div className="wrapper">
      <h1>Guitars List</h1>
      <p>Add and view your list.</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddGuitarSubmit}>
            <label>Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Type</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setType(e.target.value)} value={type}></input>
            <br></br>
            <label>Color</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <br></br>
            <label> Price</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br> 
            <button type="submit" className="btn btn-success btn-md btn-info">
              Add Guitar
            </button>
          </form>
        </div>

        <div className="view-container">
          {guitars.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View guitars={guitars} deleteGuitar={deleteGuitar}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary btn-md" 
          onClick={()=>setGuitars([])}>Remove All</button>
          </>}
          {guitars.length <1 && <div>No Guitars Added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;