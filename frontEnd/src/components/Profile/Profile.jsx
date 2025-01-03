import { Avatar, Card } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PostCard from "../Post/PostCard";
import UserReelCard from "../Reels/UserReelCard";



const tabs=[{value:"post",label:"Post"},{value:"reels",label:"Reels"},{value:"saved",label:"Saved"}, {value:"repost",label:"Repost"}]
const posts = [1,1,1,1,1,1,1,1]
const reels = [1,1,1,1,1,1,1,1]


function Profile() {
    const [value, setValue] = React.useState('post');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  // const {id} = useParams()
  return (
    <Card className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D1BAQFFp2ePlYBGIQ/company-background_10000/company-background_10000/0/1618416714415/42network_cover?e=2147483647&v=beta&t=WVJLMFp3wtotHGz5un0sSM0OHBnk2cmuMafpFq84_Eg"
            alt="profile"
            className="w-full h-full rounded-t-md"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-20 "
            sx={{ width: "10rem", height: "10rem" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM11pAVx_eyxMBzVX8slhaENfiB9yBLtV375cVUEgHRXiDqek-wG12njTY67XTil9oX_U&usqp=CAU"
          />
          <Button sx={{ borderRadius: "20px" }} variant="outlined">
            EDIT PROFILE
          </Button>
          
        </div>

        <div className="p-4">
          <h1 className="px-5 text-2xl font-bold">Solix</h1>
          <p className="px-5 text-sm">Devops</p>
        </div>
        <div className="flex px-9">
          <p className="flex pr-4">41 post</p>
          <p className="flex pr-4">41 followers</p>
          <p className="flex pr-4">41 following</p>
        </div>
        <div className="p-4">
            <Box sx={{ width: '100%', borderBottom:1, borderColor:'divider'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                
                {tabs.map((tab)=><Tab value={tab.value} label={tab.label} wrapped/>)}
            </Tabs>
            </Box>
            <div className="flex justify-center">
                {value === "post" ? <div className="space-y-5 w-[70%]"> {posts.map((post)=><div className="m-2 border border-slate-100 rounded-md"><PostCard/></div>)} </div> : 
                value === "reels" ? <div className="flex justify-center flex-wrap gap-2 m-4"> {reels.map((reel)=><UserReelCard/> )} </div>: 
                value === "saved" ? <div className=""> <h1>Saved</h1></div> :
                value === "repost" ? <div className=""> <h1> Repost</h1> </div> : null}




                {/* {value === "reels" && <h1>Reels</h1>}
                {value === "saved" && <h1>Saved</h1>}
                {value === "repost" && <h1>Repost</h1>} */}

            </div>
            {/* <div className="grid grid-cols-3 gap-4 p-5"> */}
        </div>
      </div>
    </Card >
  );
}

export default Profile;
