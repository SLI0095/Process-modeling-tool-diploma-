import MyAppBar from "../../modules/MyAppBar";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import PaperElement from "../../modules/PaperElement";
import NewElementButton from "../../modules/NewElementButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import config from "../../resources/config.json";

export default function WorkItems() {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    fetch(
      config.serverURL +
        "workItems/templates?userId=" +
        sessionStorage.getItem("userId")
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setWorkItems(result);
        },
        () => {
          alert("Could not load data.");
        }
      );
  }, []);

  return (
    <>
      <MyAppBar />
      <Container>
        <Grid container justifyContent={"flex-end"} marginTop={3}>
          <Grid item xs={6}>
            <Typography variant={"h4"} component={"h2"} marginY={3}>
              Work items
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent={"flex-end"} marginTop={4}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Show non-templates"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Show templates" />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          marginTop={2}
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <NewElementButton type="workItem" />
          {workItems.map((workItem) => (
            <PaperElement
              key={workItem.id}
              type={"workItem"}
              element={workItem}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
