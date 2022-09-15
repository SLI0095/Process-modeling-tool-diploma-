import MyAppBar from "../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../modules/Process/ProcessSubMenuFooter";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Checkbox, FormControlLabel, FormGroup, List } from "@mui/material";
import UserListItem from "../modules/UserListItem";
import AddUserModal from "../modules/Users/AddUserModal";
import MyListItem from "../modules/MyListItem";
import AddProcessSettingsModal from "../modules/AddProcessSettingsModal";
import ChangeOwnerModal from "../modules/Users/ChangeOwnerModal";
import TaskSubMenuFooter from "../modules/Task/TaskSubMenuFooter";
import WorkItemSubMenuFooter from "../modules/WorkItem/WorkItemSubMenuFooter";
import RoleSubMenuFooter from "../modules/Role/RoleSubMenuFooter";

export default function ElementSettings(props) {
  function getFooter(type) {
    if (type === "process") {
      return <ProcessSubMenuFooter state="settings" />;
    }
    if (type === "task") {
      return <TaskSubMenuFooter state="settings" />;
    }
    if (type === "workItem") {
      return <WorkItemSubMenuFooter state="settings" />;
    }
    if (type === "role") {
      return <RoleSubMenuFooter state="settings" />;
    }
  }
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

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Item usable in this processes
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem type="process" />
        </List>
        <AddProcessSettingsModal />

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
        <ChangeOwnerModal />
      </Container>
      {getFooter(props.type)}
    </>
  );
}
