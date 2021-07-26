import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import InfoCard from './Card'
import Axios from 'axios';
import LoadFunc from './LoadFunc';


function App() {
 
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);
  const [myLoader, setmyLoader] = useState(false);
  const [search, setSearch] = useState('');
  const Find = (event) => {
      const value = event.target.value;
      console.log(value);
      setSearch(value);

  
  }

  
  const getUsers = () => {
    // setting loader true
    setmyLoader(true)

    // Fetching API Call
    Axios.get("https://reqres.in/api/users?page=1").then((response) => {
      console.log("api data recieved")
      setTimeout(() => {
      setData(response.data.data);

    }, 2000);
    
    
    

     // setting loader false
      setTimeout(() => {
        setmyLoader(false)
      }, 2000);
      
      
    }
    )
  }

  
  useEffect(() => {
      isClicked && getUsers();    
  }, [isClicked])

  


  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked} />
      <div id="search">
                
                <input type="text" placeholder="Search" value={search} onChange={Find}></input>
                
            </div>
      <div className='row'>
        {/* Filter and mapping the data from the API */}
        {data && data.filter((val)=>{
          if(search === ""){
            return val;
          }
          else if(val.first_name.toLowerCase().includes(search.toLowerCase())|| val.last_name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }

        }).map((val) => {
          return <InfoCard first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar} />

        })}
      </div>
      <LoadFunc appear={myLoader} />
      
    </div>
    
  );
}

export default App;
