import { React, useState, useEffect } from "react";
import Countries from "./Countries";
import axios from "axios";

function App() {
  //states
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  //useEffect to only get the data once
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  //setting the state of filter
  const handleFilter = (event) => {
    setFilter(event.target.value);
    console.log(filter);
  };

  //create new array. For each countries filter the result
  const filterResult = () => {
    let arr = [];
    for (const country of countries) {
      if (country.name.official.toLowerCase().includes(filter.toLowerCase())) {
        arr.push(country);
      }
    }
    return arr;
  };

  return (
    <div className="App">
      <h1>Countries</h1>
      <input onChange={handleFilter}></input>
      <Countries filterResult={filterResult} filter={filter} />
    </div>
  );
}

export default App;
