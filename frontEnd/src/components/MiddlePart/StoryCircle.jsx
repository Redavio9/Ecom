import React from 'react'
import { Avatar } from "@mui/material";
// import AddIcone from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
        <div lassName="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            // className="flex flex-col items-center mr-4 cursor-pointer"
            src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"

          >
          {/* <AddIcone xs={{ fontSize: "3rem" }} /> */}
          </Avatar>
          <p> Solix... </p>
        </div>
    </div>
  )
}

export default StoryCircle