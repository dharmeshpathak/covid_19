import React ,{useState,useEffect} from 'react';
import axios from 'axios';




function CountryWise() {

    const [city,setCity] = useState([]);
    
    const [recovered,setRecovered] = useState([]);
    const [deaths,setDeath] = useState([]);
    const [error,setError] = useState(false);
    const [name,setName] = useState("india");
    const [country,setCountry] = useState("india");
    
    const onSubmit=()=>{
      if(name===null)
        {setCountry("India")}

      setCountry(name)  

    }

    //  for contry cases confirmed
      useEffect(() => {
        axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(res=>{setCity(res.data.confirmed);})
        .catch(err=>{setError(error)
        });
       
      },[error,country]);

      //  for contry cases recovered
      useEffect(() => {
        axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(res=>{setRecovered(res.data.recovered);})
        .catch(err=>{setError(error)
        });
       
      },[error,country]);

      //  for contry death cases 
      useEffect(() => {
        axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(res=>{setDeath(res.data.deaths);})
        .catch(err=>{setError(error)
        });
       
      },[error,country]);

    


    return(
    <>
    <div style ={{textAlign:"center",
    color:"grey"
    ,marginBottom:"100px"
    }}>
    <h1 style ={{textAlign:"center",
    color:"grey"
    ,marginBottom:"100px",fontFamily:"Laila",fontWeight:"bold"
    }}>Get Latest updates about your country covid cases</h1>

    <input placeholder ="Enter your country name"
    value = {name} name = "input" onChange={e => setName(e.target.value)} style={{borderStyle:"solid",
    borderColor:"grey",padding:"2px",paddingLeft:"5px",color:"red"
    }}/>
    <button onClick = {onSubmit} style={{borderStyle:"solid",
    borderColor:"lightgrey",padding:"2px",color:"black",fontFamily:"calibiri",texTtransform:"capitalize"
    }}>Show Country Data</button>
    
    
    
    
  
   

  
   <p style = {{
     marginTop:"50px",
     fontSize:"20px",
     fontFamily:"Laila",
     fontWeight:"bold"

   }}>Total active cases in {country}-{JSON.stringify(city.value)}</p>

<p style = {{
     marginTop:"50px",
     fontSize:"20px",
     fontFamily:"Laila",
     fontWeight:"bold"

   }}>Total recovered cases in {country}-{JSON.stringify(recovered.value)}</p>

<p style = {{
     marginTop:"50px",
     fontSize:"20px",
     fontFamily:"Laila",
     fontWeight:"bold"

   }}>Total Death cases in {country}-{JSON.stringify(deaths.value)}</p>



{/* <div className="progress" style={{textAlign:"center",width:"25%"}}>
  <div className="progress-bar bg-success" role="progressbar" style={{width: city.value/1000,textAlign:"center"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Confirmed cases</div>
</div>
<div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width:  recovered.value/1000,textAlign:"center"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Recovered</div>
</div>
<div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width: deaths.value/1000,textAlign:"center"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Deaths</div>
</div> */}


   
</div>
  
 </>
    );
}
    

export default CountryWise;

