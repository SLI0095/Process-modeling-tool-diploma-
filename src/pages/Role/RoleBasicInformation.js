import { useRef } from "react";
import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactQuill from "react-quill";
import * as React from "react";
import RoleSubMenuFooter from "../../modules/Role/RoleSubMenuFooter";

export default function RoleBasicInformation() {
  const saveChanges = () => {};

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const skills = useRef();
  const assignmentApproaches = useRef();
  const version = useRef();
  const changDate = useRef();
  const changeDescription = useRef();

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                Name:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField required margin={"normal"} inputRef={name} fullWidth />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Brief description:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
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
                Skills:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={skills} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Assigment approaches:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={assignmentApproaches} />
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
            <Grid item xs={2} marginTop={4} marginBottom={5}>
              <Button onClick={saveChanges} size={"large"} variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <RoleSubMenuFooter state="main" />
    </>
  );
}
