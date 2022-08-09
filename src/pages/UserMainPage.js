import MyAppBar from "../modules/MyAppBar";
import { Container, Grid } from "@mui/material";
import ProcessPaper from "../modules/ProcessPaper";

export default function UserMainPage() {
  return (
    <>
      <MyAppBar />
      <Container>
        <Grid marginTop={5} container spacing={2}>
          <ProcessPaper />
          <ProcessPaper />
          <ProcessPaper />
          <ProcessPaper />
          <ProcessPaper />
        </Grid>
      </Container>
    </>
  );
}
