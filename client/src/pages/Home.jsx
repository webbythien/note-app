import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import {Box} from '@mui/system'
import UserMenu from "../components/UserMenu";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import FolderList from "../components/FolderList";
import { AuthContext } from "../context/AuthProvider";
function Home() {
  const {folders}= useLoaderData();
  const {user}=useContext(AuthContext)
  const navigate = useNavigate()
  if(!user){
    navigate("/login")
    return 
  }
  
  return (
    <>
      <Typography variant="h4" sx={{ mb: "20px" }}>
        Note app
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
        <UserMenu/>
      </Box>
      
      <Grid
        container
        sx={{ height: '50vh', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}
      >
        <Grid item xs={3} sx={{ height: '100%' }}>
          <FolderList folders={folders} />
        </Grid>
        <Grid item xs={9} sx={{ height: '100%' }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
