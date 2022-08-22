import MyAppBar from "../../modules/MyAppBar";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import MyListItem from "../../modules/MyListItem";
import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function ProcessMetrics() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 5 }}>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <MyListItem />
          <MyListItem />
        </List>
        <Button variant="contained" startIcon={<Add />}>
          Add new metric
        </Button>
      </Container>
      <ProcessSubMenuFooter />
    </>
  );
}
