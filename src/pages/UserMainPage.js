import MyAppBar from "../modules/MyAppBar";
import { Container, Grid } from "@mui/material";
import NewProcessButton from "../modules/Process/NewProcessButton";
import PaperElement from "../modules/PaperElement";

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
          <PaperElement />
          <PaperElement />
          <PaperElement />
          <PaperElement />
          <PaperElement />
        </Grid>
      </Container>
    </>
  );
}
