import React from 'react'
import { CardHeader, Avatar, Button } from '@mui/material'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
import { green} from '@mui/material/colors'



const popularUserCard = () => {
  return (
    <div>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
            <Button size='small'>
                Follow
            </Button>
        }
        title="joba"
        subheader="@joba"
        />
    </div>
  )
}

export default popularUserCard