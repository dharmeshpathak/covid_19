import React from 'react'


function StateCard(props) {
    return (
        <>
            <div style={{display:"flex",textAlign:"center",padding:"20px"}}>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem"}} >
  <ul className="list-group list-group-flush">
  <li className="list-group-item" style={{backgroundColor:"red" ,color:"white",fontFamily:"Helvetica"}}>{props.provinceState}</li>
  <li className="list-group-item" style={{fontFamily:"Laila",color:"red"}}>Confirmed Cases- {props.confirmed}</li>
    
     <li className="list-group-item" style={{fontFamily:"Laila",color:"red"}}>Active Cases- {props.active}</li>
   
    <li className="list-group-item" style={{fontFamily:"Laila",color:"red"}}>Recovered Cases- {props.recovered}</li>
    <li className="list-group-item" style={{fontFamily:"Laila",color:"red"}}>Death Cases- {props.deaths}</li>
    
  </ul>
        </div>
        </div>
        </>
    )
}

export default StateCard

