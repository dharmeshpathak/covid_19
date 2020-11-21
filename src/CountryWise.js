import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./charts/LineChart";

function CountryWise() {
  const [city, setCity] = useState([]);

  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeath] = useState([]);
  const [error, setError] = useState(false);
  const [name, setName] = useState("india");
  const [country, setCountry] = useState("india");
  const [lastUpdate, setUpdated] = useState([]);

  const onSubmit = () => {
    if (name === "") {
      setCountry("India");
    }

    else{
      setCountry(name);
    }
  };

  //  for contry cases confirmed
  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(res => {
        setCity(res.data.confirmed);
      })
      .catch(err => {
        setError(error);
      });
  }, [error, country]);

  //  for contry cases recovered
  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(res => {
        setRecovered(res.data.recovered);
      })
      .catch(err => {
        setError(error);
      });
  }, [error, country]);

  //  for contry death cases
  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(res => {
        setDeath(res.data.deaths);
        // setUpdated(res.data.lastUpdate)
      })
      .catch(err => {
        setError(error);
      });
  }, [error, country]);

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((res) => {
        
         setUpdated(res.data)
      })
      .catch(err => {
        setError(error);
      });
  }, [error, country]);

  //  const d =  new Date(lastUpdate.lastUpdate);
  //  console.log(d)

  return (
    <>
    {/* <h1>{d} </h1> */}
      <div
        className="my-5"
        style={{ textAlign: "center", color: "black", marginBottom: "100px" }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            marginBottom: "100px",
            fontFamily: "Laila",
            fontWeight: "bold"
          }}
        >
          Get Latest updates about your country covid cases
        </h1>

        <input
          placeholder="Enter your country name"
          value={name}
          name="input"
          onChange={e => setName(e.target.value.trim())}
          style={{
            borderStyle: "solid",
            borderColor: "red",
            padding: "2px",
            paddingLeft: "5px",
            color: "red"
          }}
        />
        <button
          onClick={onSubmit}
          style={{
            borderStyle: "solid",
            borderColor: "white",
            padding: "2px",
            color: "white",
            backgroundColor:"red",
            fontFamily: "calibiri",
            texTtransform: "capitalize"
          }}
        >
          Show Country Data
        </button>

        <p
          style={{
            marginTop: "50px",
            fontSize: "20px",
            fontFamily: "Laila",
            fontWeight: "bold"
          }}
        >
          Total confirmed cases in {country}-{city.value}
          {/* Total active cases in {country}-{JSON.stringify(city.value)} */}
        </p>

        <p
          style={{
            marginTop: "50px",
            fontSize: "20px",
            fontFamily: "Laila",
            fontWeight: "bold"
          }}
        >
          Total recovered cases in {country}-{JSON.stringify(recovered.value)}
        </p>

        <p
          style={{
            marginTop: "50px",
            fontSize: "20px",
            fontFamily: "Laila",
            fontWeight: "bold"
          }}
        >
          Total Death cases in {country}-{JSON.stringify(deaths.value)}
        </p>
       
        <p
          style={{
            marginTop: "50px",
            fontSize: "20px",
            fontFamily: "Laila",
            fontWeight: "bold"
          }}
        >
         Last updated-{lastUpdate.lastUpdate}
        </p>
        
      </div>
      <div className = "mb-5 shadow p-3 mb-5 bg-white rounded ">
        <LineChart active={JSON.stringify(city.value)} recoverd={JSON.stringify(recovered.value)} death ={JSON.stringify(deaths.value)}  />
      </div>
      {/* {console.log(JSON.stringify(lastUpdate.lastUpdate))} */}
    </>
  );
}

export default CountryWise;
