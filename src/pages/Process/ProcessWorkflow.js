import MyAppBar from "../../modules/MyAppBar";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import BpmnJS from "bpmn-js/lib/Modeler";
import BpmnPaletteModule from "bpmn-js/lib/features/palette";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Box, FormControl, Grid, InputLabel, Select } from "@mui/material";
import { Download, Save } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

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

//TODO modify modal

export default function ProcessWorkflow() {
  const [openTasks, setOpenTasks] = React.useState(false);
  const handleOpenTasks = () => setOpenTasks(true);
  const handleCloseTasks = () => setOpenTasks(false);
  const [openWorkItems, setOpenWorkItems] = React.useState(false);
  const handleOpenWorkItems = () => setOpenWorkItems(true);
  const handleCloseWorkItems = () => setOpenWorkItems(false);
  const modeler = useRef();
  const shapeElement = useRef(null);

  function bindModeler() {
    const $modelerContainer = document.querySelector("#canvas");
    modeler.current = new BpmnJS({
      container: $modelerContainer,
      keyboard: {
        bindTo: document.body,
      },
      BpmnPaletteModule,
    });
    modelerSetEvents();
    innitDiagram();
  }

  function innitDiagram(xml) {
    if (xml != null) {
      modeler.current.importXML(xml);
    } else {
      modeler.current.createDiagram();
    }
  }

  useEffect(() => {
    bindModeler();
    // eslint-disable-next-line
  }, []);

  function modelerSetEvents() {
    modeler.current.on("commandStack.shape.create.postExecute", (e) => {
      let element = e.context.shape;
      if (
        element.type === "bpmn:Task" &&
        element.businessObject.name === undefined
      ) {
        shapeElement.current = element.id;
        handleOpenTasks();
      } else if (
        element.type === "bpmn:DataObjectReference" &&
        element.businessObject.name === undefined
      ) {
        shapeElement.current = element.id;
        handleOpenWorkItems();
      }
    });
  }

  return (
    <>
      <MyAppBar />

      <div>
        <Modal
          open={openTasks}
          onClose={handleCloseTasks}
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
                      Select task/process you want to add
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">Task/process</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="Task/process"
                      >
                        <MenuItem value={"A"}>Role A</MenuItem>
                        <MenuItem value={"B"}>Role B</MenuItem>
                        <MenuItem value={"C"}>Role C</MenuItem>
                        <MenuItem value={"D"}>Role D</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                      onClick={handleCloseTasks}
                    >
                      Add new task/process
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleCloseTasks}
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                    >
                      Add selected
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </form>
        </Modal>
      </div>

      <div>
        <Modal
          open={openWorkItems}
          onClose={handleCloseWorkItems}
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
                      Select work item you want to add
                    </Typography>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <FormControl>
                      <InputLabel id="label1">Work item</InputLabel>
                      <Select
                        sx={{ minWidth: 175 }}
                        labelId="label1"
                        label="Work item"
                      >
                        <MenuItem value={"A"}>Role A</MenuItem>
                        <MenuItem value={"B"}>Role B</MenuItem>
                        <MenuItem value={"C"}>Role C</MenuItem>
                        <MenuItem value={"D"}>Role D</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid textAlign={"center"} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginRight: 1 }}
                      onClick={handleCloseWorkItems}
                    >
                      Add new work item
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleCloseWorkItems}
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                    >
                      Add selected
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </form>
        </Modal>
      </div>

      <Container sx={{ marginTop: 5, width: "100%", marginBottom: 5 }}>
        <div className="canvas" id="canvas"></div>
        <Box paddingTop={5}>
          <Button startIcon={<Save />} variant={"contained"}>
            Save
          </Button>
          <Button
            startIcon={<Download />}
            sx={{ marginLeft: 2 }}
            variant={"contained"}
          >
            Download BPMN
          </Button>
        </Box>
      </Container>
      <Container
        sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}
      ></Container>
      <ProcessSubMenuFooter state="workflow" />
    </>
  );
}
