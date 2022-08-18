import MyAppBar from "../../modules/MyAppBar";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ReactQuill from "react-quill";

export default function NewWorkItem() {
  const saveWorkItem = () => {};
  const getBack = () => {
    //TODO back to all work items
  };

  const name = useRef();
  const briefDescription = useRef();
  const mainDescription = useRef();
  const workItemType = useRef();
  const urlAddress = useRef();
  const templateText = useRef();
  const purpose = useRef();
  const keyConsiderations = useRef();
  const briefOutline = useRef();
  const notation = useRef();
  const impactOfNotHaving = useRef();
  const reasonForNotNeeding = useRef();
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
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                Work item type:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin={"normal"}
                inputRef={workItemType}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"h5"} component={"label"}>
                URL address:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={"url"}
                margin={"normal"}
                inputRef={urlAddress}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Template for work item:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={templateText} />
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
                Key considerations:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={keyConsiderations} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Brief outline:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={briefOutline} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Notation:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={notation} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Impact of not having:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={impactOfNotHaving} />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant={"h5"} component={"label"}>
                Reasons for not needing:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill theme="snow" ref={reasonForNotNeeding} />
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
              <Button onClick={saveWorkItem} size={"large"} variant="contained">
                Create
              </Button>
            </Grid>
            <Grid item xs={8} marginTop={4} marginBottom={5} display={"flex"}>
              <Button onClick={getBack} size={"large"} variant="contained">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
