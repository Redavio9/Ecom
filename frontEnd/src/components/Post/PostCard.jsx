import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions} from '@mui/material'
import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
import post1Image from '../../static/images/post1.png'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import ExpandMore from '@mui/material/IconButton'


const PostCard = () => {
  return (
    <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="rarraji"
        subheader="@rarraji"
        />


        <CardMedia
        component="img"
        // height="100"
        image={post1Image}
        alt="rarraji"
        />


        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>

        <CardActions disableSpacing>
            <div>
                <IconButton >
                    {true ? <FavoriteIcon /> : <FavoriteIcon />}
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
                <IconButton>
                    <CommentIcon />
                </IconButton>
            </div>
            {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore> */}
        </CardActions>

    </Card>
  )
}

export default PostCard