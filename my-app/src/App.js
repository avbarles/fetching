import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
//import { Link } from 'react-router-dom';




function App() {
  
   const [userData, setUserData] = useState(null);

 

  const fetchData = () => {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=> {
    fetchData();
  }, []) 
  return (
    <div className="App">
     

      

      <button onClick={fetchData}>
        Fetch Data
      </button>
       {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name.first} {userData.name.last}</p>
          <p>Email: {userData.email}</p>

          
        </div>
      )}
    </div>
  );
}

export default App;




