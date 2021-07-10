import Appointment from './Appointment.js'
import React, { useState } from "react";



function Tile(props) {
//	const [isOpen, setIsFormOpen] = useState(false);
 

  const [view, setView] = useState(true)
  if (view) {
    return (
      <div className="tile" >
        <img
          alt=''
          src={props.image}
        />
        <div className="flex">
          <div className="leftItems">
		  <h1  >
		{props.area}<br />
		£{props.price}<br />
		{props.type}
	  </h1> 
           
          </div>
          <div className="rightItems">
            <Appointment houseId={props.houseId} />
            <button className='hide'
              onClick={() => {
                setView(false);
              }}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    );
  } return (
    <button className='show' onClick={() => { setView(true) }}>Show</button>
  )
}
export default Tile;

