import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

const Information = () => {
  return (
    <>
      <h2>PROFESSIONAL INFORMATION</h2>
      <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} md={5} >

          {/* <h4>Highest education</h4> */}
          <FormControl sx={{ m: 1, minWidth: 365, backgroundColor: "white" }}>
            <InputLabel htmlFor="grouped-select">Graduation</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value={1}>Primary</MenuItem>
              <MenuItem value={2}>Secondary</MenuItem>
              <MenuItem value={2}>Higher Secondary</MenuItem>
              <MenuItem value={2}>Graduation</MenuItem>
              <MenuItem value={2}>Post Graduation</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <h4>What do you currently?</h4> */}
        <Grid item xs={12} md={5} >
          <FormControl sx={{ m: 1, minWidth: 365, backgroundColor: "white" }}>
            <InputLabel htmlFor="grouped-select">College Student</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value={1}>Schooling</MenuItem>
              <MenuItem value={2}>College Student</MenuItem>
              <MenuItem value={2}>Teaching</MenuItem>
              <MenuItem value={2}>Job</MenuItem>
              <MenuItem value={2}>Freelancing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
export default Information;
