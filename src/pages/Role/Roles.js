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

export default function Roles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch(
      config.serverURL +
        "roles/templates?userId=" +
        sessionStorage.getItem("userId")
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRoles(result);
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
              Roles
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
          <NewElementButton type="role" />
          {roles.map((role) => (
            <PaperElement key={role.id} type={"role"} element={role} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
