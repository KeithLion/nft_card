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
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';




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

<Paper sx={{bgcolor:'#11255e', borderRadius: 0, padding: 25, width:'100%'}}>
<Card sx={{border: 1, maxWidth: 308, position: 'relative'}} variant='card'>
      <CardContent>
        <Button style={{display:' block', position: 'relative'}}>

<img src={mainSquare}  alt='' style={{maxWidth:'100%', borderRadius: 8, display:'block'}}/>
        </Button>


<Link  href='#' sx={{textDecoration: 'none',':hover':{color:'black'}}} >
        Equilibrium #3429 
</Link>

      <p>
        Our Equilibrium collection promotes balance and calm.
      </p>
      

<div>
        <Box sx={{display: 'flex',  justifyContent: 'space-between'}}>
      <span>0.041 ETH </span> <span> 3 days left</span> 
        </Box>
</div>

        <hr></hr>
<div>
        <span>

          Creation of </span> 
        <Link href='#' sx={{textDecoration: 'none',':hover':{color:'black'}}}> Jules Wyvern </Link> 
</div>


          </CardContent>
          </Card>
      {/* <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'
        >Frontend Mentor</a
        >. Coded by <a href="https://github.com/KeithLion">Keith Norton</a>.
      </div> */}
</Paper>
  );
}

export default App;