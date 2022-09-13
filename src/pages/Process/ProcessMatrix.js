import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";

export default function ProcessMatrix() {
  return (
    <>
      <MyAppBar />
      <Container
        sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}
      ></Container>
      <ProcessSubMenuFooter state="rasci" />
    </>
  );
}
