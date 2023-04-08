import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, FormGroup } from "@mui/material";

export default function Interests() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [state, setState] = React.useState({
    Appdevelopment: true,
    GameDevelopment: false,
    Programming: false,
    Datascience: false,
    Webdevelopment: false,
    Datastructures: false,
    Machinelearning: false,
    Others: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    Appdevelopment,
    GameDevelopment,
    Programming,
    Datascience,
    Datastructures,
    Machinelearning,
    Others,
    Webdevelopment,
  } = state;
  const error =
    [
      Appdevelopment,
      GameDevelopment,
      Programming,
      Datascience,
      Datastructures,
      Machinelearning,
      Others,
      Webdevelopment,
    ].filter((v) => v).length !== 2;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <h2>INTERESTS</h2>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Appdevelopment}
                    onChange={handleChange}
                    name="Appdevelopment"
                  />
                }
                label="App Development "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={GameDevelopment}
                    onChange={handleChange}
                    name="GameDevelopment"
                  />
                }
                label="Game Development"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Programming}
                    onChange={handleChange}
                    name="Programming"
                  />
                }
                label="Programming "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Datascience}
                    onChange={handleChange}
                    name="Datascience"
                  />
                }
                label="Data Science "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Webdevelopment}
                    onChange={handleChange}
                    name="Webdevelopment"
                  />
                }
                label="Web Development "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Datastructures}
                    onChange={handleChange}
                    name="Datastructures"
                  />
                }
                label="Data Structures "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Machinelearning}
                    onChange={handleChange}
                    name="Machinelearning"
                  />
                }
                label="Machine Learning "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Others}
                    onChange={handleChange}
                    name="Others"
                  />
                }
                label="Others "
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
