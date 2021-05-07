/**
 * You don't need to modify this component
 */

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TimelineIcon from '@material-ui/icons/Timeline';

import { useHistory } from 'react-router-dom'

import './bottom-nav.css'

const valueMap = {
    0 : '/',
    1 : '/forcast',
    2 : '/current',
    '/':0,
    '/forcast':1,
    '/current':2
}

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(null);
  const history = useHistory();

  return (
    <div className='bottom-nav-wrapper'>
        <BottomNavigation style={{backgroundColor:'#EEE2DC'}}
            value={value || valueMap[history.location.pathname]}
            onChange = {(event, newValue) => {
              setValue(newValue)
              history.push(valueMap[newValue])
            }}
            showLabels
        >
        <BottomNavigationAction label="About" icon={<HomeIcon />} />
        <BottomNavigationAction label="Forcast" icon={<TimelineIcon />} />
        <BottomNavigationAction label="Current" icon={<WbSunnyIcon />} />
        </BottomNavigation>
    </div>
  );
}