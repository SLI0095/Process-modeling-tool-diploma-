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
import config from "../../resources/config.json";
import { useEffect, useState } from "react";

export default function Processes() {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    fetch(
      config.serverURL +
        "processes/templates?userId=" +
        sessionStorage.getItem("userId")
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setProcesses(result);
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
              Processes
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
          <NewElementButton type="process" />
          {processes.map((process) => (
            <PaperElement key={process.id} type={"process"} element={process} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
