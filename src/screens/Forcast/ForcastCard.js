/**
 * This is the Card component you use for the Forcast page
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function ForcastCard(props) {
  const classes = useStyles();
  const weatherOfOneDay = props.weatherOfOneDay;
  return (
    <Card className={classes.root} style={{backgroundColor:"#EEE2DC", color:"#F2F2F2"}}>
      <CardContent>
        {/* pass in data here to display */}
        <Typography gutterBottom component="div" style={{backgroundColor:"#A4B3B6"}}>
          <Box textAlign="left" color="#24305E" m={1} fontSize="13px">
            {weatherOfOneDay.dt_txt}
          </Box>
          <Box textAlign="left" m={1} fontSize="17px">
            {weatherOfOneDay.weather[0].description}
          </Box>
          <Box textAlign="left" m={1} fontSize="18px" fontWeight="bold">
            Temperature: {weatherOfOneDay.main.temp}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Maximum Temperature: {weatherOfOneDay.main.temp_max}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Minimum Temperature: {weatherOfOneDay.main.temp_min}
          </Box>
          <hr />
          <Box textAlign="left" m={1} fontSize="18px" fontWeight="bold">
            Temperature: {weatherOfOneDay.main.temp}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Humidity: {weatherOfOneDay.main.humidity}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Pressure: {weatherOfOneDay.main.pressure}
          </Box>
          <hr />
          <Box textAlign="left" m={1} fontSize="18px" fontWeight="bold">
            Wind
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Wind speed: {weatherOfOneDay.wind.speed}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Wind degree: {weatherOfOneDay.wind.deg}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

// styles
// you can ignore this part
const useStyles = makeStyles({
  root: {
    width: 275,
    marginRight: "20px",
    marginBottom: "20px",
  },
});
