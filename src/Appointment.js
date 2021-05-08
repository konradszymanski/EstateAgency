import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
function Appointment(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsFormOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const sendSMS = () => {
        async function doSMS() {
            let payload={ 
                houseNumber:props.houseId,
                msg:document.getElementById("msg-"+ props.houseId).value,
                tel:document.getElementById("tel-"+ props.houseId).value,
                email:document.getElementById("email-"+ props.houseId).value,
                time:document.getElementById("time-"+ props.houseId).value,
                date:document.getElementById("datePicker-"+ props.houseId).value,
                name:document.getElementById("name-"+ props.houseId).value
            }
        
            console.log (payload)
            console.log (props)
            let response = await fetch("http://localhost:3001/sms", {
                method: "POST", body: JSON.stringify(payload), headers: {
                     'Accept': 'application/json', 'Content-Type': 'application/json' 
                }                
            })
            let result = await response.json()
        }
        doSMS()
    }
    if (isOpen) {
        return (
            <div>
                <label>Preferred date:</label><DatePicker id={`datePicker-${props.houseId}`} selected={startDate} onChange={date => setStartDate(date)} /><br />
                <label>Preferred time:</label><input id={`time-${props.houseId}`} type='text'></input><br />
                <label>Contact email:</label><input id={`email-${props.houseId}`} type='text'></input><br />
                <label>Contact phone:</label><input id={`tel-${props.houseId}`} type='number'></input><br />
                <label>Customer Name:</label><input id={`name-${props.houseId}`} type='text'></input><br />
                <label>Notes/comments:</label><br /><textarea id={`msg-${props.houseId}`} rows="5" cols="40"></textarea><br />
                <button onClick={() => { setIsFormOpen(false); setIsBooked(true); sendSMS()}}>Submit</button>
            </div>
        );
    }
    return (
        <button onClick={() => setIsFormOpen(true)}>{isBooked ? "Booked" : "Request viewing"}</button>
    )
}
export default Appointment;