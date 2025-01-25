import React from 'react'
import { Card, Grid} from '@mui/material'
import Login from './login.jsx'
import Register from './register.jsx'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import backgound  from '../../static/images/bac.jpg'
import backgound from '../../static/images/bac.jpg';
// import style css
import './Authentication.css'


const Authentication = () => {
 // get the user from the store and check if the user is authenticated then redirect to the home page

 const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");  // récupère le JWT du localStorage
 useEffect(() => {
  if (jwt) { // vérifier si jwt existe
    navigate("/");  // on récupère le profil de l'utilisateur
  }
}, [jwt]);

  if (jwt) {
    
    navigate('/');
  } 
  else 
  {
    return (
      <div style={{ backgroundImage: `url(${backgound})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
              {/* <Grid item xs={12} className=" flex justify-center items-center h-screen bg-gray-50 "> */}
              <Grid item xs={12} className="flex items-center h-screen">
                <div className='px-20 flex flex-col justify-center h-full'>
                  <Card className='card p-8 bg-[#09f0fb] shadow-lg'>
                    <div className='flex flex-col items-center mb-5 space-y-1'>
                      <h1 className='logo text-center'> Solix </h1>
                      <p className='text-center text-sm w-[70%]'>
                        Welcome Back! <br />
                        Connect with your friends, share your favorite moments, and stay updated with everything you love.
                      </p>
                    </div>
                    <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                    </Routes>
                  </Card>
                </div>
              </Grid>
      </div>
    )
  }  
}

export default Authentication



{/* <Grid item xs={12} className="flex justify-center items-center h-screen bg-black">
  <div className="flex flex-col justify-center items-center h-full w-full">
    <Card className="card p-8">
      <div className="flex flex-col items-center mb-5 space-y-1">
        <h1 className="logo text-center">Solix</h1>
        <p className="text-center text-sm w-[70%]">
          Welcome Back! <br />
          Connect with your friends, share your favorite moments, and stay updated with everything you love.
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Card>
  </div>
</Grid> */}