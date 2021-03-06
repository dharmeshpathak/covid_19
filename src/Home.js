import React ,{useState,useEffect} from 'react';
// import ReactDOM from 'react-dom';

import axios from 'axios';
import LineChart from './charts/LineChart';











function Home() {


    const [confirmed,setConfirmed] = useState([]);
     const [recovered,setRecovered] = useState([]);
     const [deaths,setDeath] = useState([]);
    //  const [summary,setSummary] = useState([]);
    const [error,setError] = useState(false);
    

    // use effect for confirmed
    useEffect(() => {
        axios
        .get("https://covid19.mathdro.id/api/")
        .then(res=>{setConfirmed(res.data.confirmed);
        })
        .catch(err=>{setError(error)
        });
       
      });
          // use effect for recovered

      useEffect(() => {
        axios
        .get("https://covid19.mathdro.id/api/")
        .then(res=>{setRecovered(res.data.recovered);
        })
        .catch(err=>{setError(error)
        });
       
      });
    //        // use effect for Deaths
           useEffect(() => {
            axios
            .get("https://covid19.mathdro.id/api/")
            .then(res=>{setDeath(res.data.deaths);
            })
            .catch(err=>{setError(error)
            });
           
          });
          

    


    return(
    <>
    <div className ="my-5 py-5 shadow p-3 mb-5 bg-white rounded" style = {{backgroundColor:"white",
    backgroundBlendMode:"overlay",
    height:"100%",
    width:"100%"
    }} >
    <h1 style ={{textAlign:"center",
    color:"red",
    fontFamily:"Laila"}}>Total Number of cases in the world  </h1>

   <p 
   style ={{textAlign:"center",fontSize:"20px",color:"black",fontWeight:"bold",
   fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"
   }}>
   Total confirmed cases-{JSON.stringify(confirmed.value)}
   </p>
   <p style ={{textAlign:"center",fontSize:"20px",color:"black",fontWeight:"bold",fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"}}>Total recovered cases-{JSON.stringify(recovered.value)}</p>
  
   <p style ={{textAlign:"center",fontSize:"20px",color:"black",fontWeight:"bold",fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"}}>Total Death cases-{JSON.stringify(deaths.value)}</p>
   {/* <p>Total Daily cases-{JSON.stringify(summary[0])}</p> */}
  
   </div>
   <div className="mb-5 shadow-sm p-3 mb-5 bg-white rounded">
     <LineChart active={JSON.stringify(confirmed.value)} recoverd={JSON.stringify(recovered.value)} death ={JSON.stringify(deaths.value)}   />
   </div>
 </>
    );
}
    

export default Home;

