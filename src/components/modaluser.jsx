import React from "react";
import Date from "./data";
function Modaldata(props){
    return(
        <div>
            {props.updatedlist.map(modaluser => <div key={modaluser.id}>
            <h1 style={{fontStyle:"italic", margin:"0px"}}>Welcome {modaluser.real_name}</h1>
            <p style={{margin:"0px"}}>Your Id: {modaluser.id}</p>
            <div style={{padding:"5px", margin:"5px"}}><p>Select Date</p><Date /></div>
            <div >
                <div className="time">
                    <h2 style={{margin:"0px",color:'red'}}>Active Time</h2>
                    <h3 className="h3">{modaluser.activity_periods[0].start_time}</h3>
                    <h3 className="h3">{modaluser.activity_periods[1].start_time}</h3>
                    <h3>{modaluser.activity_periods[2].start_time}</h3>
                </div>
                <div className="time">
                    <h2 style={{margin:"0px",color:'green'}}>End Time</h2>
                    <h3 className="h3">{modaluser.activity_periods[0].end_time}</h3>
                    <h3 className="h3">{modaluser.activity_periods[1].end_time}</h3>
                    <h3>{modaluser.activity_periods[2].end_time}</h3>
                </div>
            </div>
            </div>)}    
        </div>
    )
}

export default Modaldata;