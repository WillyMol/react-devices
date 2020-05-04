import React from 'react';
import Device from './Device.js';
import './App.css';
// import styles from './mystyle.module.css';

// import logo from './logo.svg';


function App() {
  const mydatabase = [
    {Ip:"192.168.1.15", Name:"ESP44GG66", Place:"Garage Door", Description:"This is a RF chip", State:false},
    {Ip:"192.168.1.19", Name:"ESP1J3K56", Place:"Floor Lamp", Description:"This is a great device", State:true},
    {Ip:"192.168.1.21", Name:"ESP8D7S5E", Place:"Table Lamp", Description:"The best thing ever", State:false},
    {Ip:"192.168.1.32", Name:"ESP3G5K0S", Place:"Front Door", Description:"The last thing ever", State:true},
    {Ip:"192.168.1.01", Name:"ESP3G5K44", Place:"Main Bedroom", Description:"It's a Nice Bed", State:true},
    {Ip:"192.168.1.07", Name:"ESP3G5K6T", Place:"Basement", Description:"Wet basement", State:true},
    {Ip:"192.168.1.11", Name:"ESP3G5KHY", Place:"Heater", Description:"It's cold in here", State:false},
    {Ip:"192.168.1.25", Name:"ESP3G5K7S", Place:"Coffe Maker", Description:"Best Coffe ever", State:false},
    
    ];
  return (
    <>
     {/*<div className="row">*/}
      {/* <h1>My Devices</h1>               */}
      {  
        mydatabase.map((element, index) => { return <div 
        className = "col-sm-4 l3 m6 w3-margin-bottom"
        key={index}><Device database = {element} /></div> }) 
      } 
        { /*</div>*/ }
    </>

  );
}

export default App;
