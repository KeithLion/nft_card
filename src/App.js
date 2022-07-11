import './App.css';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import * as React from 'react'
import CardContent  from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
// import { shadows } from '@mui/system';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import mainSquare from './images/image-equilibrium.jpg'
import clock from './images/icon-clock.svg'
import prism from './images/icon-ethereum.svg'
import avatar from './images/image-avatar.png'



function App(){



  return (
<Paper sx={{bgcolor:'#0c131c', borderRadius: 0,padding:110}}>
{/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
<Card sx={{border: 1, width:'100%',maxWidth: 308, position: 'relative', bgcolor: '#141c28'}} variant='card'>
      <CardContent>
        
        <Button style={{display:' block', position: 'relative'}}>
<img src={mainSquare}  alt='' style={{maxWidth:'100%', borderRadius: 8, display:'block'}}/>

        </Button>


<Link  href='#' sx={{textDecoration: 'none',color:'#ffffff',':hover':{color:'#007f7b'}, fontFamily:'outfit,sans-serif', fontWeight:600}} >
        Equilibrium #3429 
</Link>

      <p style={{color:'#577db2', fontFamily:'outfit,sans-serif', fontWeight:400}}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      

<div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', fontFamily:'outfit,san-serif',fontWeight:400}}>
      <span style={{color:'#007f7b'}}>
        <img src={prism} alt=''/>
        0.041 ETH 
        </span> 
      <span style={{color:'#577db2'}}> 
<img src={clock} alt=''/>
      3 days left
      </span> 
        </Box>
</div>

        <hr></hr>
<div style={{fontFamily:'outfit,sans-serif', fontWeight:300}}>
        <span style={{color:'#577db2', display: 'inlineBlock'}}>
        <img src={avatar} alt='' style={{maxWidth: 25}}/>
          Creation of </span> 
        <Link href='#' sx={{textDecoration: 'none',color:'#ffffff',':hover':{color:'#007f7b'}}}> Jules Wyvern </Link> 
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