import React from 'react'
import { Card, Grid} from '@mui/material'
import Login from './login.jsx'
import Register from './register.jsx'
import { Routes, Route } from 'react-router-dom'


const Authentication = () => {
 // get the user from the store and check if the user is authenticated then redirect to the home page

 const token = localStorage.getItem('jwt')

 console.log('token', token)
  if (token) {
    
    window.location.href = '/';
  } 
  else 
  {
    return (
      <div>
          <Grid container>
              <Grid className='h-screen overflow-hidden' item xs={8}>
                  <img className="h-full" src="https://img.freepik.com/free-vector/futuristic-ai-web-tech-background-with-circuit-lines-design_1017-50183.jpg?t=st=1735593089~exp=1735596689~hmac=0d26bf3ee456efb015c65fa4da57b7e3696e44865b37cf2a479dfad25428398e&w=2000" alt="" />
              </Grid>
              <Grid item xs={4} className="bg-gray-50 ">
                <div className='px-20 flex flex-col justify-center h-full'>
                  <Card className='card p-8'>
                    <div className='flex flex-col items-center mb-5 space-y-1'>
                      <h1 className='logo text-center'> Solix </h1>
                      <p className='text-center text-sm w-[70&]'>Welcome Back! <br />
                      Connect with your friends, share your favorite moments, and stay updated with everything you love. </p>
                    </div>
                    <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                    </Routes>
                  </Card>

                </div>

              </Grid>
          </Grid>
      </div>
    )
  }  
}

export default Authentication