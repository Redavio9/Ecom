import React, { useState } from "react";
import { navigationMenu } from "./SidebarNav.js";
import { Avatar, Divider, Button, Menu, MenuItem } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";  // Import the correct icon

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="card h-screen flex justify-between flex-col py-5">
      <div className="space-y-8 pl-5 pb-8">
        <div>
          <span className="logo font-bold text-xl">1337</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div key={item.title} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
