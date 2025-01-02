import { Avatar } from '@mui/material';
import React from 'react'
// import { useParams } from 'react-router-dom';

function Profile () {
    // const {id} = useParams()
  return (



    <div className='py-10 w-[70%]'>
        <div className='rounded-md'>
            <div className='h-[15rem]'>
                <img src='https://media.licdn.com/dms/image/v2/C4D1BAQFFp2ePlYBGIQ/company-background_10000/company-background_10000/0/1618416714415/42network_cover?e=2147483647&v=beta&t=WVJLMFp3wtotHGz5un0sSM0OHBnk2cmuMafpFq84_Eg' alt='profile' className='w-full h-full rounded-t-md'/>
            </div>
            <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
                <Avatar sx={{width:"10rem", height:"10rem"}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM11pAVx_eyxMBzVX8slhaENfiB9yBLtV375cVUEgHRXiDqek-wG12njTY67XTil9oX_U&usqp=CAU'/>
            </div>
            <div className='px-5 flex justify-center '>
                <h1 className='text-2xl font-bold text-center'>John Doe</h1>
                <p className='text-center text-sm'>Developer</p>
            </div>

        </div>

    </div>
  )
}

export default Profile