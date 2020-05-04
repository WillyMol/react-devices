import React, { useState } from 'react'; //useState is a Hook
import './App.css';
// import styles from './mystyle.module.css'; 

//this is a function component
const Device = (props) => {   //function Light(props) {
    /* You can use Hooks here!:
      useState returns a pair: the current state value and a function that lets you update it. */

    //const [lightStatus, setlightStatus] = useState(false);  
    //from props object: {Ip:"192.168.1.15", Name:"ESPdf67he31", Place:"Garage", Description:"This is a RF chip", State:false},
    
    let {Name: name, Place: place, State: state} = props.database; //This is object destructuring
    
    // eslint-disable-next-line
    const [thingName, setthingName] = useState(name);
    // eslint-disable-next-line
    const [thingPlace, setthingPlace] = useState(place);
    const [lightStatus, setlightStatus] = useState(state); //useState is a Hook; “array destructuring”
    
    //styles.button
    
    return (
<<<<<<< HEAD
       <div className = "tweet">
        <ul>
          <li>Device: {thingName}</li>
          <li>Location: {thingPlace} </li>
          <li>Status: {lightStatus ? <> On </> : <> Off </>} </li>
        </ul>
        <div>
        <button className = "button" style={{ backgroundColor: lightStatus ? "#3e8e41" : "#4c6faf"}} 
            onClick={() => setlightStatus(!lightStatus)}>
          Toggle
        </button>        
        </div>
       </div>
    );
}

export default Device
=======
     
      <>
         <div className="w3-container" style = {{paddingTop: "15px", paddingBottom: "15px"}}>
            <ul>
              <li>Device: {thingName}</li>
              <li>Location: {thingPlace} </li>
              <li>Status: {lightStatus ? <> On </> : <> Off </>} </li>
            </ul>
          </div>
        <div style = {{ maxWidth : "max-content", paddingBottom: "8px" }}>
        <button 
            className="button" style={{ backgroundColor: lightStatus ? "#3e8e41" : "#4c6faf"}} 
            onClick={() => setlightStatus(!lightStatus)}>
            {lightStatus ? 'ON' : 'OFF'}
        </button>        
        </div>
      
      </>
    );
}

export default Device



>>>>>>> 9ce415dd064bf6865d5d6338e7d6013a2e49fae0
