import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { List } from "@mui/material";
import ActivityListItem from "../../modules/Process/ActivityListItem";

export default function ProcessActivities() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <List>
          <ActivityListItem />
          <ActivityListItem />
        </List>
      </Container>
      <ProcessSubMenuFooter state="activities" />
    </>
  );
}
