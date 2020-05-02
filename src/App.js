import React from 'react';
import Device from './Device.js';
import './App.css';
// import styles from './mystyle.module.css';

// import logo from './logo.svg';


function App() {
  const mydatabase = [
    {Ip:"192.168.1.15", Name:"ESP44GG66", Place:"Garage", Description:"This is a RF chip", State:false},
    {Ip:"192.168.1.19", Name:"ESP1J3K56", Place:"Floor Lamp", Description:"This is a great device", State:true},
    {Ip:"192.168.1.21", Name:"ESP8D7S5E", Place:"Table Lamp", Description:"The best thing ever", State:false},
    {Ip:"192.168.1.32", Name:"ESP3G5K0S", Place:"Patio", Description:"The last thing ever", State:true},         
    ];
  return (
    <div className="app">
      {/* <h1>My Devices</h1>               */}
      { mydatabase.map((element, index) => { return <div key={index}><Device database = {element} /></div> }) } 
    </div> 

  );
}

export default App;
