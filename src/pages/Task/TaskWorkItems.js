import MyAppBar from "../../modules/MyAppBar";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddInputOutputModal from "../../modules/Task/AddInputOutputModal";

export default function TaskWorkItems() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <Typography variant={"h4"} component={"h2"}>
          Inputs
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <AddInputOutputModal type={"input"} />
        <Typography variant={"h4"} component={"h2"} marginTop={3}>
          Outputs
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <AddInputOutputModal type={"output"} />
      </Container>
      <TaskSubMenuFooter state="workItems" />
    </>
  );
}
