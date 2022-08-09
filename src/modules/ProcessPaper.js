import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ProcessPaper() {
  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Typography
            variant={"h6"}
            component={"h3"}
            sx={{
              paddingX: 2,
              paddingY: 2,
            }}
          >
            Process name
          </Typography>
          <Typography
            variant={"body1"}
            component={"p"}
            sx={{
              paddingX: 2,
              paddingBottom: 2,
            }}
          >
            Process description - Sed ut perspiciatis, unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
