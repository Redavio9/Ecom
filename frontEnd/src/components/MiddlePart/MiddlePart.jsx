import { Avatar, Card, IconButton} from "@mui/material";
import React from "react";
import AddIcone from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";


const Story=[1,2,3,4,5,6,7,8]
const post=[1,2,3,4,5,6,7,8,9,10,11,12]
const MiddlePart = () => {
  const handleOpenCreatPost = () => {
    console.log("open");
  }
  return (

    <div className="px-20">
      <section className="flex items-center p-5 ">
        <div lassName="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            // className="flex flex-col items-center mr-4 cursor-pointer"
            // src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"

          >
          <AddIcone xs={{ fontSize: "3rem" }} />
          </Avatar>
          <p> New </p>
        </div>
        {Story.map((item) => <StoryCircle/>)}
      </section>

      <Card className="p-5 mt-5">
        {/* Avatar and Input */}
        <div className="flex justify-between items-center">
          <Avatar src="https://img.freepik.com/premium-photo/marketing-manager-digital-avatar-generative-ai_934475-9082.jpg" />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="outline-none w-[90%] bg-slate-100 rounded-full px-5 py-2 border"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-9 mt-5">
          {/* Photo Button */}
          <div className="flex flex-col items-center">
            <IconButton color="primary" onClick={handleOpenCreatPost}>
              <ImageIcon />
            </IconButton>
            <span className="text-sm opacity-75">Photo</span>
          </div>

          {/* Video Button */}
          <div className="flex flex-col items-center">
            <IconButton color="primary" onClick={handleOpenCreatPost}>
              <VideocamIcon />
            </IconButton>
            <span className="text-sm opacity-75">Video</span>
          </div>

          {/* Article Button */}
          <div className="flex flex-col items-center">
            <IconButton color="primary" onClick={handleOpenCreatPost}>
              <ArticleIcon />
            </IconButton>
            <span className="text-sm opacity-75">Article</span>
        </div>
      </div>
    </Card>
        <div className="mt-5 space-y-5 ">
          {post.map((item) => <PostCard/>)}
          {/* <PostCard/> */}
        </div>
    </div>
  );
};

export default MiddlePart;
