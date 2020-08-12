import React ,{useState,useEffect} from 'react';
// import ReactDOM from 'react-dom';

import axios from 'axios';




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
          // use effect for DailySummery
        //   useEffect(() => {
        //     axios
        //     .get("https://covid19.mathdro.id/api/daily")
        //     .then(res=>{setSummary(res.data);
        //     })
        //     .catch(err=>{setError(error)
        //     });
           
        //   });
    //   useEffect(() => {
    //     axios
    //     .get(`https://covid19.mathdro.id/api/countries/${country}`)
    //     .then(res=>{setCity(res.data.confirmed);
    //     })
    //     .catch(err=>{setError(error)
    //     });
       
    //   },[country]);

    


    return(
    <>
    <div className ="my-5 py-5" style = {{backgroundColor:"lightgrey",
    backgroundBlendMode:"overlay",
    height:"100%",
    width:"100%"
    }} >
    <h1 style ={{textAlign:"center",
    color:"red",
    fontFamily:"Laila"}}>Total Number of cases in the world -  </h1>

   <p 
   style ={{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",
   fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"
   }}>
   Total active cases-{JSON.stringify(confirmed.value)}
   </p>
   <p style ={{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"}}>Total recovered cases-{JSON.stringify(recovered.value)}</p>
  
   <p style ={{textAlign:"center",fontSize:"20px",color:"grey",fontWeight:"bold",fontFamily:"Laila",
   padding:"5px",
   boxShadow:"2px"}}>Total Death cases-{JSON.stringify(deaths.value)}</p>
   {/* <p>Total Daily cases-{JSON.stringify(summary[0])}</p> */}
  
   </div>
 </>
    );
}
    

export default Home;

