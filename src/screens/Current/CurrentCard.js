/**
 * This is the Card component you use for the Current page
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
export default function CurrentData(props) {
  const classes = useStyles();
  const { weatherOfToday } = props;

  return weatherOfToday.name ? (
    <Card className={classes.root} style={{backgroundColor:"#EEE2DC", color:"#F2F2F2"}}>
      <CardContent>
      <Typography gutterBottom component="div" style={{backgroundColor:"#A4B3B6"}}>
          <Box textAlign="left" color="#24305E" m={1} fontSize="16px" fontWeight="bold">
            {weatherOfToday.name}
          </Box>
          <Box textAlign="left" m={1} fontSize="18px">
            {weatherOfToday.weather[0].description}
          </Box>
          <Box textAlign="left" m={1} fontSize="19px">
            Temperature: {weatherOfToday.main.temp}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Maximum Temperature: {weatherOfToday.main.temp_max}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Minimum Temperature: {weatherOfToday.main.temp_min}
          </Box>
          <hr />
          <Box textAlign="left" m={1} fontSize="14px">
            Humidity: {weatherOfToday.main.humidity}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Pressure: {weatherOfToday.main.pressure}
          </Box>
          <hr />
          <Box textAlign="left" m={1} fontSize="19px">
            Wind
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Wind speed: {weatherOfToday.wind.speed}
          </Box>
          <Box textAlign="left" m={1} fontSize="14px">
            Wind degree: {weatherOfToday.wind.deg}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  ) : null
}

// styles
// you can ignore this part
const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: 'auto'
  }
});