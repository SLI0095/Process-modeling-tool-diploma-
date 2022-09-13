import MyAppBar from "../../modules/MyAppBar";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import NewProcessButton from "../../modules/Process/NewProcessButton";
import PaperElement from "../../modules/PaperElement";

export default function Processes() {
  return (
    <>
      <MyAppBar />
      <Container>
        <Grid container justifyContent={"flex-end"} marginTop={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show non-templates"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Show templates" />
          </FormGroup>
        </Grid>

        <Grid
          marginTop={2}
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
