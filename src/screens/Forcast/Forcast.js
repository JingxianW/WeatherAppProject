/**
 * This is the 'forcast' page
 */

import React from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AppBar from "../../components/AppBar/AppBar";
import ForcastCard from "./ForcastCard";

const END_POINT = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APPID = "&APPID=eda439d629165a345559e6e9043cf085&units=";
const UNIT = "metric";

let inputCity = "";
const Forcast = () => {
  const [response, setResponse] = React.useState({});
  const [city, setCity] = React.useState("San Diego");
  const [inputData, setInputData] = React.useState("");

  const getData = (city_name) => {
    const URL = `${END_POINT}${city_name}${APPID}${UNIT}`;
   
    // Storing data into the state to use, if city is not found, send alert
    axios
      .get(URL)
      .then((r) => {
        setResponse(r.data);
      })
      .catch((e) => {
        alert("Cannot find city", e);
      });
  };

  /**
   * This function will be triggered when the user press any key
   * When user pressed 'Enter',
   * clear the input field, pass the string in the input field to 'getData()',
   * and display the forcast data of the city the user entered
   */
  const handleOnKeyDown = (ev) => {
    // if 'Enter' is pressed, things in this block will execute
    if (ev.key === "Enter") {
      ev.preventDefault();
      inputCity && setCity(inputCity);
      setInputData('');
    }
  };

  // This function is like 'componentDidMount'
  // Initial state of the component here
  React.useEffect(() => {
    getData(city);
  }, [city]);

  // Use .map() here to render the list of weather in different cities to the screen
  const ForcastCards = (response && response.list && response.list.map((item, index) => {
   return <ForcastCard key={index}  weatherOfOneDay={item} />;
  })) ||
  null;

  return (
    <div>
      <AppBar title="Weather App - Forcast"
              onChange={(e) => {
                inputCity = e.target.value;
                setInputData(inputCity);
              }}
              onKeyDown={handleOnKeyDown}
              value={inputData}
      />

      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          style={{ paddingTop: "30px", textAlign: "center", backgroundColor: "#123C69", fontFamily:"Roboto", color: "#FFFFFF", marginTop:"10px", width:"20px", fontWeight:"bold"}}
        >
          {/* display the name of the current city here */}
          {response.city && response.city.name || ''}
        </Typography>
        <div className="cards-wrapper">{ForcastCards}</div>
      </Container>
    </div>
  );
};

export default Forcast;
