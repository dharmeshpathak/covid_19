import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from "./StateCard"

const StateWise = ()=>{
    // const [results,setResult] = useState([]);
    const [zero,setZero] =useState([]);
    const [one,setOne] =useState([]);
     const [two,setTwo] =useState([]);
     const [three,setThree] =useState([]);
     const [four,setFour] =useState([]);
     const [five,setFive] =useState([]);
     const [six,setSix] =useState([]);
     const [seven,setSeven] =useState([]);
     const [eight,setEight] =useState([])
     const [nine,setNine] =useState([]);
     const [ten,setTen] =useState([]);
     const [oneone,setOneone] =useState([]);
     const [onetwo,setOneTwo] =useState([]);
     const [oneThree,setOnethree] =useState([]);
     const [onefour,setOnefour] =useState([]);
     const [XV,setXV] =useState([]);
     const [XVI,setXVI] =useState([]);
     const [XVII,setXVII] =useState([]);
     const [XVIII,setXVIII] =useState([]);
     const [XIX,setXIX] =useState([]);
     const [XX,setXX] =useState([]);
     const [XXI,setXXI] =useState([]);
     const [XXII,setXXII] =useState([]);
     const [XXIII,setXXIII] =useState([]);
     const [XXIV,setXXIV] =useState([]);
     const [XXV,setXXV] =useState([]);
     const [XXVI,setXXVI] =useState([]);
     const [XXVII,setXXVII] =useState([]);
     const [XXVIII,setXXVIII] =useState([]);
     const [XXIX,setXXIX] =useState([]);
     const [XXX,setXXX] =useState([]);
     const [XXXI,setXXXI] =useState([]);
     const [XXXII,setXXXII] =useState([]);
     const [XXXIII,setXXXIII] =useState([]);
     const [XXXIV,setXXXIV] =useState([]);
     

    const [error,setError] =useState([]);

    
    
//---------------UseEffects------------------------->



    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setZero(res.data[0]))
        .catch(err =>setError(err))


    },[])

    // useEffect(()=>{
    //     axios
    //     .get("https://covid19.mathdro.id/api/countries/india/confirmed")
    //     .then(res => setResult(res.data))
    //     .catch(err =>setError(err))


    // },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setOne(res.data[1]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setTwo(res.data[2]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setThree(res.data[3]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setFour(res.data[4]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setFive(res.data[5]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setSix(res.data[6]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setSeven(res.data[7]))
        .catch(err =>setError(err))


    },[])

    
    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setEight(res.data[8]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setNine(res.data[9]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setTen(res.data[10]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setOneone(res.data[11]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setOneTwo(res.data[12]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setOnethree(res.data[13]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setOnefour(res.data[14]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXV(res.data[15]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXVI(res.data[16]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXVII(res.data[17]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXVIII(res.data[18]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXIX(res.data[19]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXX(res.data[20]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXI(res.data[21]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXII(res.data[22]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXIII(res.data[23]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXIV(res.data[24]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXV(res.data[25]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXVI(res.data[26]))
        .catch(err =>setError(err))


    },[])
    
    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXVII(res.data[27]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXVIII(res.data[28]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXIX(res.data[29]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXX(res.data[30]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXXI(res.data[31]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXXI(res.data[31]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXXII(res.data[32]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXXIII(res.data[33]))
        .catch(err =>setError(err))


    },[])

    useEffect(()=>{
        axios
        .get("https://covid19.mathdro.id/api/countries/india/confirmed")
        .then(res => setXXXIV(res.data[34]))
        .catch(err =>setError(err))


    },[])


    const arr = [zero,one,two,three,four,five,six,seven,eight,nine,ten,oneone,onetwo,oneThree,onefour,XV,XVI,XVII,XVIII,XIX,XX,XXI,XXII,XXIII,XXIV,XXV,XXVI,XXVII,XXVIII,XXIX,XXX,XXXI,XXXII,XXXIII,XXXIV]

    
    return(
        <> 
       
      


        

      <div style={{display:"flex",flexDirection:"row",
  flexWrap: "wrap",paddingLeft :"80px" }}> 
      {arr.map((value,index)=>{
            return(
                <Card key = {index} provinceState ={value.provinceState} active={value.active} confirmed={value.confirmed}  recovered={value.recovered} deaths = {value.deaths}/>)
        })}
        {error}
       </div>
        
    
       </>
    )
}
export default  StateWise;