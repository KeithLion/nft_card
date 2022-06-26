import './App.css';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import * as React from 'react'
import CardContent  from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { shadows } from '@mui/system';
// import { createTheme } from '@mui/system';
// import { ThemeProvider } from '@emotion/react';
import mainSquare from './images/image-equilibrium.jpg'




function App() {

  // const theme = createTheme({
  //   palette: {
  //       primary:{
  //         softBlue: '#577db2',
  //         cyan: '#007f7b'
  //       },
  //       neutral: {
  //         // different shades of dark blue
  //         main: '#0c131c',
  //         card: '#141c28',
  //         line: '#2e3744',
  //         white: '#ffffff'
  //       },
  //   },
  // })

  return (
    // <ThemeProvider theme={theme}>

<Paper sx={{bgcolor:'#11255e', borderRadius: 0, height: 200, padding: 25}}>
<Card sx={{maxWidth: 300, maxHeight: 400, mx:'auto', border: 1}} variant='card'>
      <CardContent>
        
      <Typography component='div'>
{/* <img src={mainSquare} /> */}
        Equilibrium #3429 
      </Typography>

      <Typography component='div'>
        Our Equilibrium collection promotes balance and calm.
      </Typography>

      <Typography component='div'>
        <Box sx={{display: 'flex',  justifyContent: 'space-between'}}>

      <span>0.041 ETH </span> <span> 3 days left</span> 
        </Box>
      </Typography>
        <hr></hr>
      <Typography component='div'>
        <span>Creation of </span> <span> Jules Wyvern </span> 
      </Typography>

      {/* <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'
        >Frontend Mentor</a
        >. Coded by <a href="https://github.com/KeithLion">Keith Norton</a>.
      </div> */}

          </CardContent>
          </Card>
</Paper>
  );
}

export default App;