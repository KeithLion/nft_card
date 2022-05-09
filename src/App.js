import './App.css';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import * as React from 'react'
import CardContent  from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/system';




function App() {


  const theme = createTheme({
    palette: {
        primary:{
          softBlue: '#577db2',
          cyan: '#007f7b'
        },
        neutral: {
          // different shades of dark blue
          main: '#0c131c',
          card: '#141c28',
          line: '#2e3744',
          white: '#ffffff'
        },
    },
  })

  return (

    <Card sx={{maxWidth: 275, maxHeight: 300}}>
      <CardContent>
        

      <Typography component='div'>
        Equilibrium #3429 Our Equilibrium collection promotes balance and calm.
      </Typography>
      <div>0.041 ETH 3 days left</div>

      Creation of Jules Wyvern

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Keith Norton</a>.
      </div>

          </CardContent>
          </Card>
  );
}

export default App;
