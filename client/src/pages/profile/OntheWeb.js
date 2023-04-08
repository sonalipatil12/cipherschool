import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormInputField from "../../shared/formtextfield/FormInputField";
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import { selectUser } from "../../app/slices/AuthSlice"
const Ontheweb = () => {
  const loggedUser = useSelector(selectUser)
  return (
    <>
      <h2>ON THE WEB</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {},
        }}
        autoComplete="off"
      >
        <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>

          <Grid item xs={12} md={5}>
            <FormInputField
              name="Linkedin"

            />
          </Grid>
          <Grid item xs={12} md={5} >
            <FormInputField
              name="GitHub"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>

          <Grid item xs={12} md={5}>
            <FormInputField
              name="Facebook"
            />
          </Grid>
          <Grid item xs={12} md={5} >
            <FormInputField
              name="Twitter"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>

          <Grid item xs={12} md={5}>
            <FormInputField
              name="Instagram"
            />
          </Grid>
          <Grid item xs={12} md={5} >
            <FormInputField
              name="Your Website"
            />
          </Grid>
        </Grid>



      </Box>
    </>
  );
};
export default Ontheweb;
