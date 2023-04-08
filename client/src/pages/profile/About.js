import { CardContent, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import "./about.scss";
import { useSelector } from "react-redux"
import { selectUser } from "../../app/slices/AuthSlice"

const About = ({ getdata }) => {
  const loggedUser = useSelector(selectUser)

  const handleChange = (e) => {
    const { name, value } = e.target;
    getdata({ [name]: value })
  }
  return (
    <>
      <CardContent

      >
        <h2>ABOUT ME</h2>
        <Grid xs={6} item sx={{ color: "#fff" }}>
          <TextField
            sx={{ backgroundColor: "white", outline: "none", border: 0 }}
            multiline
            rows={5}
            varient="outlined"
            name="about"
            value={loggedUser?.about}
            onChnage={handleChange}
            fullWidth
            required
          />
        </Grid>
      </CardContent>
      {/* </Container> */}
    </>
  );
};

export default About;
