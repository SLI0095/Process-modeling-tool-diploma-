import MyAppBar from "../../modules/MyAppBar";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import NewMetricModal from "../../modules/Process/NewMetricModal";

export default function ProcessMetrics() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <NewMetricModal />
      </Container>
      <ProcessSubMenuFooter />
    </>
  );
}
