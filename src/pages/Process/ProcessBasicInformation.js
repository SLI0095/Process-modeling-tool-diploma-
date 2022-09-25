import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { Save } from "@mui/icons-material";

export default function ProcessBasicInformation() {
  const saveChanges = () => {};

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const purpose = useRef();
  const scope = useRef();
  const usageNotes = useRef();
  const alternatives = useRef();
  const howToStaff = useRef();
  const keyConsiderations = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  //TODO send changes + fetch at start info
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant={"h5"} component={"label"}>
              Name:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField margin={"normal"} inputRef={name} fullWidth />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Brief description:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin={"normal"}
              inputRef={briefDescription}
              multiline
              rows={5}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Main description:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={mainDescription} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Purpose:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={purpose} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Scope:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={scope} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Usage notes:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={usageNotes} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Alternatives:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={alternatives} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              How to staff:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={howToStaff} />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Key considerations:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={keyConsiderations} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h5"} component={"label"}>
              Version:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField margin={"normal"} inputRef={version} fullWidth />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Change date:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin={"normal"}
              inputRef={changDate}
              type="date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Typography variant={"h5"} component={"label"}>
              Change description:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactQuill theme="snow" ref={changeDescription} />
          </Grid>
          <Grid item xs={12} marginTop={2} marginBottom={5}>
            <Button
              startIcon={<Save />}
              onClick={saveChanges}
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </Grid>
        <ProcessSubMenuFooter state="main" />
      </Container>
    </>
  );
}
