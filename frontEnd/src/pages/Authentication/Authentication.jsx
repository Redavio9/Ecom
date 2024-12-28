import React from 'react'
import { Card, Grid} from '@mui/material'
// import Login from './login.jsx'
import Register from './register.jsx'


const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
                <img className="h-full" src="https://us.images.westend61.de/0001363195pw/digitally-generated-image-of-network-connection-against-white-background-EYF04499.jpg" alt="" />
            </Grid>
            <Grid item xs={5}>
              <div className='px-20 flex flex-col justify-center h-full'>
                <Card className='card p-8'>
                  <div className='flex flex-col items-center mb-5 space-y-1'>
                    <h1 className='logo text-center'> Solix </h1>
                    <p className='text-center text-sm w-[70&]'>Welcome Back! <br />
                    Connect with your friends, share your favorite moments, and stay updated with everything you love. </p>
                  </div>
                  
                  <Register/>
                </Card>

              </div>

            </Grid>
        </Grid>
    </div>
  )
}

export default Authentication