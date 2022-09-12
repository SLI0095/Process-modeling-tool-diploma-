import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import WorkItemSubMenuFooter from "../../modules/WorkItem/WorkItemSubMenuFooter";
import NewWorkItemStateModal from "../../modules/WorkItem/NewWorkItemStateModal";

export default function WorkItemStates() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem type="WIState" />
          <MyListItem type="WIState" />
        </List>
        <NewWorkItemStateModal />
      </Container>
      <WorkItemSubMenuFooter />
    </>
  );
}
