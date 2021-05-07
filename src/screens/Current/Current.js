/**
 * This is the '/current' page
 */

import React from "react";
import axios from "axios";

import AppBar from "../../components/AppBar/AppBar";
import CurrentCard from "./CurrentCard";
import Container from "@material-ui/core/Container";
import { formatMs } from "@material-ui/core";

const END_POINT = "https://api.openweathermap.org/data/2.5/weather?q=";
const APPID = "&APPID=eda439d629165a345559e6e9043cf085&units=";
const UNIT = "metric";

let inputCity = "";

const Current = () => {
  const [data, setData] = React.useState({});
  const [message, setMessage] = React.useState("Type in the search field to add city");
  const [inputdata, setinputData] = React.useState("");

  const getData = (city_name) => {
    const URL = `${END_POINT}${city_name}${APPID}${UNIT}`;

    // Storing data into the state to use, if city is not fount, send alert
    axios
      .get(URL)
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => {
        alert("Cannot find city", e);
      });
  };

  /**
   * This function will be triggered when the user press any key
   * When user pressed 'Enter',
   * clear the input field, pass the string in the input field to 'getData()',
   * and display the current data of the city the user entered
   */
  const handleOnKeyDown = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      inputCity && getData(inputCity);
      setMessage("");
      setinputData('');
    }
  };

  return (
    <div>
      <AppBar title="Weather App - Current"
              onChange={(e) => {
                inputCity = e.target.value;
                setinputData(inputCity);
              }}
              onKeyDown={(ev) => handleOnKeyDown(ev)}
              value={inputdata}
      />
      <h2 style={{textAlign:'center', paddingTop:'30px', color:'#123C69'}}>{message}</h2>
      <Container maxWidth="md" style={{ marginTop: "30px"}}>
        <CurrentCard city={inputCity} weatherOfToday={data} 
          style={{backgroundColor: "#123C69"}}
        />
      </Container>
    </div>
  );
};

export default Current;
