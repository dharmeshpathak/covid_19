import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from "./StateCard"

const StateWise = ()=>{
    const [results,setResult] = useState([]);


    const [error,setError] =useState([]);

    
    

    
    useEffect(()=>{
            axios
            .get("https://covid19.mathdro.id/api/countries/india/confirmed")
            .then((res) =>{
                setResult(res.data)
                
            })
            .catch(err =>setError(err))},[results])




    
    return(
        <> 
       
      


        

     
        
       <div className = "container d-flex justify-content-center  flex-wrap align-content-xxl-center my-5" > 
      {results.map((value,index)=>{
            return(
                <Card key = {index} provinceState ={value.provinceState} active={value.active} confirmed={value.confirmed}  recovered={value.recovered} deaths = {value.deaths}/>)
        })}
        
       {error}
       
       </div>
       </>
    )
}
export default  StateWise;