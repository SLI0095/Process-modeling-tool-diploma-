import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import { Edit } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

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

export default function WorkItemStateEditModal() {
  const [open, setOpen] = React.useState(false);
  const saveState = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const stateName = useRef();
  const stateDescription = useRef();

  return (
    <>
      <IconButton
        edge="end"
        aria-label="edit"
        id="edit-button"
        onClick={() => handleOpen()}
      >
        <Edit />
      </IconButton>
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
                <Grid container spacing={1}>
                  <Grid textAlign={"center"} xs={12}>
                    <Typography variant="h6" component="h2">
                      Editing state
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={stateName}
                      label="State name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={stateDescription}
                      label="State description"
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <Button
                      type="submit"
                      onClick={saveState}
                      size={"large"}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Save state
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      size={"large"}
                      variant="contained"
                      sx={{ marginRight: 1 }}
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
