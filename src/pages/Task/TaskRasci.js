import MyAppBar from "../../modules/MyAppBar";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import NewRasciModal from "../../modules/Task/NewRasciModal";

export default function TaskRasci() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <Typography variant={"h5"} component={"h2"}>
          Required
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <Typography variant={"h5"} component={"h2"} marginTop={3}>
          Accountable
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <Typography variant={"h5"} component={"h2"} marginTop={3}>
          Support
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <Typography variant={"h5"} component={"h2"} marginTop={3}>
          Consulted
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <Typography variant={"h5"} component={"h2"} marginTop={3}>
          Informed
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <NewRasciModal />
      </Container>
      <TaskSubMenuFooter />
    </>
  );
}
