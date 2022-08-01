import './App.css';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import * as React from 'react'
import CardContent  from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
// import { shadows } from '@mui/system';
import Link from '@mui/material/Link';
import mainSquare from './images/image-equilibrium.jpg'
import clock from './images/icon-clock.svg'
import prism from './images/icon-ethereum.svg'
import avatar from './images/image-avatar.png'



function App(){



  return (
<Paper sx={{bgcolor:'#0c131c', borderRadius: 0, height:600, width:'100%'}}>

<Card sx={{borderRadius:3, width:'100%',maxWidth: 300, position: 'relative', bgcolor: '#141c28', margin:' auto',top:'10%'}} variant='card'>
      <CardContent sx={{fontFamily:'outfit,san-serif'}}>
        
        <a href='#' style={{display:' block', position: 'relative',padding:0,borderRadius:8, paddingBottom:15}}>

<img src={mainSquare}  alt='' style={{maxWidth:'100%', borderRadius: 8, display:'block',':hover':{color:'#00fff6'}}}/>


        </a>


<Link  href='#' sx={{textDecoration: 'none',color:'#ffffff',':hover':{color:'#007f7b'}, fontFamily:'outfit,sans-serif', fontWeight:600}} >
        Equilibrium #3429 
</Link>

      <p style={{color:'#577db2', fontWeight:400}}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      

<div>
        <Box sx={{display: 'flex', justifyContent: 'space-between',fontWeight:400}}>
      <span style={{color:'#007f7b'}}>
        <img src={prism} alt=''/>
        0.041 ETH 
        </span> 
      <span style={{color:'#577db2'}}> 
      <span>
<img src={clock} alt=''/>
      </span>
      3 days left
      </span> 
        </Box>
</div>

        <hr/>
<div style={{ fontWeight:300}}>
        <img src={avatar} alt='' style={{maxWidth: 25}}/>
        <span style={{color:'#577db2', display: 'inlineBlock'}}>
          Creation of 
          </span> 
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