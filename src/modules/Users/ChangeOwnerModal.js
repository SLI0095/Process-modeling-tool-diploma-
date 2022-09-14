import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useRef } from "react";
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

export default function ChangeOwnerModal() {
  const [open, setOpen] = React.useState(false);
  const changeOwner = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedUser = useRef();

  return (
    <>
      <Button sx={{ marginX: 2 }} variant="contained" onClick={handleOpen}>
        Change owner
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
                  <Grid textAlign={"center"} xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Changing owner of item
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <FormControl>
                      <InputLabel id="label1">User</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="User"
                        ref={selectedUser}
                      >
                        <MenuItem value={"A"}>User A</MenuItem>
                        <MenuItem value={"B"}>User B</MenuItem>
                        <MenuItem value={"C"}>User C</MenuItem>
                        <MenuItem value={"D"}>User D</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <Button
                      type="submit"
                      onClick={changeOwner}
                      size={"large"}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Set owner
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
