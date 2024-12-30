import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MiddlePart from "../../components/MiddlePart/MiddlePart.jsx";
import Reels from "../../components/Reels/Reels.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import CreateReelsForm from "../../components/Reels/CreatReelsForm.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRight from "../../components/HomeRight/HomeRight.jsx";

function HomePage() {
  const location = useLocation();  // Pour récupérer le chemin actuel

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        {/* Sidebar */}
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        {/* Section principale */}
        <Grid
          lg={location.pathname === "/" ? 6 : 6}  // Ajuste la taille du grid en fonction de la route
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

        {/* HomeRight - À afficher uniquement sur une route spécifique */}
        <Grid item lg={3} className="relative">
          <div className="sticky top-0 w-full">
            {/* Placer HomeRight dans une route spécifique */}
            {/* <Routes>
              <Route path="/home-right" element={<HomeRight />} />
            </Routes> */}
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
