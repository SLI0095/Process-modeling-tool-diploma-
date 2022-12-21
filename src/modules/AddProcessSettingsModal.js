import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useEffect, useRef } from "react";
import { Add } from "@mui/icons-material";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import config from "../resources/config.json";
import { useParams } from "react-router";

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

export default function AddProcessSettingsModal(props) {
  const [open, setOpen] = React.useState(false);
  const [processes, setProcesses] = React.useState([]);
  const addProcess = () => {
    const process = {
      id: selectedProcess.current.getElementsByTagName("input")[0].value,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(process),
    };
    console.log(process, taskId, props.type);
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          processId +
          "/addProcess?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    } else if (props.type === "task") {
      console.log(process, taskId);
      fetch(
        config.serverURL + "tasks/" + taskId + "/addProcess?userId=" + userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    } else if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          workItemId +
          "/addElement?userId=" +
          userId,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setOpen(false);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedProcess = useRef();
  const { workItemId } = useParams();
  const { taskId } = useParams();
  const { processId } = useParams();
  const { userId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "processes/templatesCanEdit?userId=" + userId)
      .then((res) => res.json())
      .then(
        (result) => {
          setProcesses(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, [userId]);

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
        Add process
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
                  <Grid item textAlign={"center"} xs={12}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ marginBottom: 2 }}
                    >
                      Adding process where will be item usable
                    </Typography>
                  </Grid>
                  <Grid item textAlign={"center"} xs={12}>
                    <FormControl>
                      <InputLabel id="label1">Process</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="Process"
                        ref={selectedProcess}
                      >
                        {processes.map((process) => (
                          <MenuItem key={process.id} value={process.id}>
                            {process.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item textAlign={"center"} xs={12}>
                    <Button
                      type="submit"
                      onClick={addProcess}
                      variant="contained"
                      sx={{ marginRight: 1 }}
                    >
                      Add
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleClose}
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
