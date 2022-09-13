import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Checkbox, FormControlLabel, FormGroup, List } from "@mui/material";
import UserListItem from "../../modules/UserListItem";
import Button from "@mui/material/Button";
import AddUserModal from "../../modules/Users/AddUserModal";

export default function ProcessSettings() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Basic settings
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Marked as template" />
        </FormGroup>
        <Typography variant={"body2"} fontStyle={"italic"} marginY={2}>
          Items marked as template can be use in other processes.
        </Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Marked as private" />
        </FormGroup>
        <Typography variant={"body2"} fontStyle={"italic"} marginY={2}>
          Items marked as private are visible only for owner.
        </Typography>

        <Typography variant={"h4"} component={"h2"} marginTop={5}>
          User settings
        </Typography>
        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Owner of the item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <UserListItem type="owner" />
        </List>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Who can edit item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <UserListItem type="user" />
          <UserListItem type="user" />
        </List>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Who can view item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <UserListItem type="user" />
          <UserListItem type="user" />
        </List>
        <AddUserModal />
        <Button sx={{ marginX: 2 }} variant={"contained"}>
          Change owner
        </Button>
      </Container>
      <ProcessSubMenuFooter state="settings" />
    </>
  );
}
