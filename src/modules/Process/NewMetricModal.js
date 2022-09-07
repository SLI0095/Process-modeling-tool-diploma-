import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { useRef } from "react";
import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";

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

export default function NewMetricModal() {
  const [open, setOpen] = React.useState(false);
  const addMetric = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const metricName = useRef();
  const metricDescription = useRef();

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add new metric
      </Button>
      <div>
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
                      Adding new metric
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <TextField
                      margin={"normal"}
                      fullWidth
                      required
                      inputRef={metricName}
                      label="Metric name"
                    />
                  </Grid>
                  <Grid textAlign={"center"} xs={12}>
                    <TextField
                      margin={"normal"}
                      inputRef={metricDescription}
                      label="Metric description"
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </Grid>
                  <Grid item marginTop={2} xs={4}>
                    <Button
                      type="submit"
                      onClick={addMetric}
                      size={"large"}
                      variant="contained"
                    >
                      Save metric
                    </Button>
                  </Grid>
                  <Grid item marginTop={2} xs={3}>
                    <Button
                      type="submit"
                      onClick={handleClose}
                      size={"large"}
                      variant="contained"
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