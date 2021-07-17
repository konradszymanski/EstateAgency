import Appointment from './Appointment.js'
import React, { useState } from "react";

let headers = document.getElementsByTagName('h1');
const addId = () =>{
	for(let i=0; i < headers.length; i++) 
			{
			headers[i].setAttribute("id", 'header' + i)
			}
		}
		addId()
function Tile(props) {
//	const [isOpen, setIsFormOpen] = useState(false);
 
  const [view, setView] = useState(true)
  const [showH1, setH1] = useState(true)
  if (view) {
    return (
	<div className="tile" >
		<img
		alt=''
		src={props.image}
		/>
			<div className="flex">
				<div className="leftItems">
					{showH1 ? <h1>
					{props.area}<br />
					£{props.price}<br />
					{props.type}
					</h1> : ''
  }
				</div>
					<div className="rightItems">
					<Appointment setH1={setH1} houseId={props.houseId} />
				<button className='hide' onClick={() => {setView(false);}}>Hide</button>
			</div>
		</div>
	</div>
    );
  } return (
    <button className='show' onClick={() => { setView(true) }}>Show</button>
  )
}
export default Tile;

