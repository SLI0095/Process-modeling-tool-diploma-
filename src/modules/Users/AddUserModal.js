import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useRef } from "react";
import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddUserModal() {
  const [open, setOpen] = React.useState(false);
  const addRasci = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedUser = useRef();
  const selectedRight = useRef();

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add user rights
      </Button>
      <div style={{ height: 0, width: 0, display: "inline-flex" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Container sx={{ width: "50%" }}>
                <Grid container spacing={1} lineHeight={4.5}>
                  <Grid textAlign={"center"} item xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Adding new user right
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">User or group</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="User or group"
                        ref={selectedUser}
                      >
                        <MenuItem value={"A"}>Role A</MenuItem>
                        <MenuItem value={"B"}>Role B</MenuItem>
                        <MenuItem value={"C"}>Role C</MenuItem>
                        <MenuItem value={"D"}>Role D</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label2">Right</InputLabel>
                      <Select
                        defaultValue={"edit"}
                        labelId="label2"
                        label="Right"
                        ref={selectedRight}
                        sx={{ minWidth: 175 }}
                      >
                        <MenuItem value={"edit"}>Can edit</MenuItem>
                        <MenuItem value={"view"}>Can view</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      onClick={addRasci}
                      size={"large"}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Add
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      size={"large"}
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                    >
                      Close
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
