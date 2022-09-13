import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import NewStepModal from "../../modules/Task/NewStepModal";
import TaskSubMenuFooter from "../../modules/Task/TaskSubMenuFooter";

export default function TaskSteps() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem type="step" />
          <MyListItem type="step" />
        </List>
        <NewStepModal />
      </Container>
      <TaskSubMenuFooter state="steps" />
    </>
  );
}
