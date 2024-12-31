import React from 'react'
// import searchUser from '../SearchUser/searchUser.jsx'
import PopularUserCard from './PopularUserCard.jsx' // Ensure it's PascalCase
import { Card } from '@mui/material';


const popularUser =  [1,1,1,1]

const HomeRight = () => {
  return (
    <Card className='m-5' sx={{ borderRadius: '12px', boxShadow: 3 }}>
      {/* <searchUser /> */}
      <div className='flex justify-between py-5 items-centre'>
        <p className='font-semibold opacity-70 px-5'>Suggestions for you</p>
        <p className='text-xs font-semibold opacity-95 px-5'>View All</p>

      </div>
      <div className=''>
        {popularUser.map((item) => <PopularUserCard/>)}
      </div>
    </Card>
  )
}

export default HomeRight