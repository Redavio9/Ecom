import React, { useState } from "react";
import { navigationMenu } from "./SidebarNav.js";
import { Avatar, Divider, Button, Menu, MenuItem, Card } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";  // Import the correct icon
import { string } from "yup";
// import { useHref } from "react-router";
// import { Navigate } from "react-router";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // Add logout logic here
    localStorage.removeItem("jwt");
    window.location.href = "/login";
    setAnchorEl(null);
  };

  // create function handle
  const handle = (href) => {
    return () => {
    
        console.log("clicked");
        window.location.href = href;
  }
}

  return (
    <Card className="h-screen flex justify-between flex-col py-5" sx={{ borderRadius: '12px', boxShadow: 1 }}>
      <div className="space-y-8 pl-5 pb-8">
        <div>
          <span className="logo font-mono font-bold text-2xl text-emerald-800">1337</span>
        </div>
      </div>

        <div className="space-y-8 pl-5 pb-8">
          {navigationMenu.map((item) => (
            <div key={item.title} className="cursor-pointer flex space-x-3 items-center" onClick={handle(item.href)}>
              <div className="text-emerald-800">{item.icon } </div>
              <p className="text-xl">{item.title}</p>
              
            </div>
          ))}
        </div>
      {/* </div> */}

      {/* Section user */}
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="https://randomuser.me/api/port" />
            <div>
              <p className="font-bold">Reda</p>
              <p className="text-xl text-gray-500">@Reda</p>
            </div>
          </div>

          {/* Button for opening menu */}
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert />  {/* Use the correct icon component */}
          </Button>

          {/* Menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card >
  );
};

export default Sidebar;
