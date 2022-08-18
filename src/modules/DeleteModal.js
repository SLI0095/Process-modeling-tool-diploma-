import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

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

export default function DeleteModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //TODO send delete request
  const deleteElement = () => {};

  return (
    <>
      <MenuItem key={"delete"} onClick={handleOpen}>
        Delete
      </MenuItem>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form>
            <Box sx={style}>
              <Grid container spacing={1}>
                <Grid textAlign={"center"} xs={12}>
                  <Typography variant="h6" component="h2">
                    Are you sure you want delete this {props.type}:
                  </Typography>
                </Grid>
                <Grid textAlign={"center"} xs={12}>
                  <Typography variant="h6" component="h2">
                    {props.name}
                  </Typography>
                </Grid>
                <Grid xs={1}>
                  <Button
                    onClick={deleteElement}
                    size={"large"}
                    variant="contained"
                    sx={{
                      marginRight: 2,
                    }}
                  >
                    Yes
                  </Button>
                </Grid>
                <Grid xs={8} display={"flex"}>
                  <Button
                    onClick={handleClose}
                    size={"large"}
                    variant="contained"
                    sx={{
                      marginRight: 2,
                    }}
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Modal>
      </div>
    </>
  );
}
