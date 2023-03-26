//TODD - current project (button for switch and edit) my projects list - owner, shared projects(where is not owner), create new project button - modal
import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import UserListItem from "../../modules/UserListItem";
import CreateGroupModal from "../../modules/Groups/CreateGroupModal";
import * as React from "react";

export default function MainProjects() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Current project
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.isCreator.map((group) => (
            <UserListItem
              name={group.groupName}
              groupId={group.id}
              id={group.id}
              key={group.id}
              type="myGroup"
            />
          ))}
        </List>

        <CreateGroupModal />

        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Member of groups
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {user.groups.map((group) => (
            <UserListItem
              name={group.groupName}
              groupId={group.id}
              id={group.id}
              key={group.id}
              type="memberGroup"
            />
          ))}
        </List>
      </Container>
    </>
  );
}
