import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcone from '@mui/icons-material/Explore';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import CreatReelsIcon from '@mui/icons-material/ControlPoint';
import ProfileIcon from '@mui/icons-material/Person';
import CommunityIcon from '@mui/icons-material/People';



export const navigationMenu = [
  {
    title : "Home",
    href : "/",
    icon : <HomeIcon/>,
  },
  {
    title : "Reels",
    href : "/reels",
    icon : <ExploreIcone/>,
  },
  {
    title : "Notifications",
    href : "/notifications",
    icon : <NotificationIcon/>,
  },
  {
    title : "Messages",
    href : "/messages",
    icon : <MessageIcon/>,
  },
  {
    title : "Bookmarks",
    href : "/bookmarks",
    icon : <BookmarkIcon/>,
  },
  {
    title : "Lists",
    href : "/lists",
    icon : <ListIcon/>,
  },
  {
    title : "Profile",
    href : "/profile",
    icon : <ProfileIcon/>,
  },
  {
    title : "Community",
    href : "/community",
    icon : <CommunityIcon/>,
  },
  {
    title : "Create Reels",
    href : "/create-reels",
    icon : <CreatReelsIcon/>,
  }
];
