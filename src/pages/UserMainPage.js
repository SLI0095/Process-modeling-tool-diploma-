import MyAppBar from "../modules/MyAppBar";
import { Container, Grid } from "@mui/material";
import ProcessPaper from "../modules/ProcessPaper";
import NewProcessButton from "../modules/NewProcessButton";

export default function UserMainPage() {
  return (
    <>
      <MyAppBar />
      <Container>
        <Grid
          marginTop={5}
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <NewProcessButton />
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
