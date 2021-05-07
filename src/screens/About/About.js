import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const About = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:'#123C69'}}>
                    <Typography variant="h6">
                        Weather App - About
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth='md' style={{backgroundColor:'#EEE2DC', paddingTop:'10px', paddingBottom:'15px'}} >
                {/* TODO: add your own description of this weather app here */}
                <h2 style={{textAlign:'center', color:'#AC3B61'}}>About</h2>
                <p style={{textAlign:'center', color:'#123C69'}}>This is a weather app.</p>
                <p style={{textAlign:'center', color:'#123C69'}}>See current weather in the /current tab</p>
                <p style={{textAlign:'center', color:'#123C69'}}>Or forcasted weather in the /forcast tab</p>
            </Container>
        </div>

    )
}

export default About