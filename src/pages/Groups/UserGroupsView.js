import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import UserListItem from "../../modules/UserListItem";
import { List } from "@mui/material";
import CreateGroupModal from "../../modules/Groups/CreateGroupModal";

export default function UserGroupsView() {
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
          My groups
        </Typography>

        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          //TODO options to delete and detail
          <UserListItem type="myGroup" />
          <UserListItem type="myGroup" />
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
          //TODO no options
          <UserListItem type="memberGroup" />
          <UserListItem type="memberGroup" />
        </List>
      </Container>
    </>
  );
}
