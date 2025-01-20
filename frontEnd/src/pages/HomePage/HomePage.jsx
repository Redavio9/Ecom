import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MiddlePart from "../../components/MiddlePart/MiddlePart.jsx";
import Reels from "../../components/Reels/Reels.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import CreateReelsForm from "../../components/Reels/CreatReelsForm.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRight from "../../components/HomeRight/HomeRight.jsx";
import { useDispatch } from "react-redux";
// import { GetProfileAction } from "../../Redux/Auth/auth.action";

function HomePage() {
  console.log("HomePage");
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");

  // Fetch posts only if JWT is available
  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(GetProfileAction(jwt));
  //   }
  // }, [jwt, dispatch]);

  const showHomeRight = ["/"].includes(location.pathname);  // List routes that need HomeRight

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        {/* Sidebar */}
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        {/* Main Section */}
        <Grid
          lg={location?.pathname === "/" ? 6 : 9}  // Safe check for location.pathname
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        {/* HomeRight - Only show on specific route */}
        {showHomeRight && (
          <Grid item lg={3} className="relative">
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default HomePage;
