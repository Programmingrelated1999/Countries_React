import React from "react";

const Countries = ({ filterResult, filter }) => {
  if (filter === "") {
    return <p>Enter a country name</p>;
  }

  if (filterResult().length > 10) {
    return <p>Too Many Countries, please specify more</p>;
  }

  if (filterResult().length === 1) {
    const [country] = filterResult();
    let list = Object.values(country.languages);
    console.log(list);

    return (
      <div>
        <h1>{country.name.official}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>Languages: </h3>
        <ul>
          {list.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        {console.log(country.flags.png)}
        <img src={country.flags.png} />
      </div>
    );
  }

  return (
    <div>
      <ul>
        {filterResult().map((country) => (
          <li key={country.name.official}>{country.name.official}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
