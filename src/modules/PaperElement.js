import { Grid, Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaperElementMenu from "./PaperElementMenu";

export default function PaperElement(props) {
  function getLink(type) {
    if (type === "process") {
      return (
        <Link
          href={"/user/" + 1 + "/processes/" + 1}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          Process name
        </Link>
      );
    }
    if (type === "task") {
      return (
        <Link
          href={"/user/" + 1 + "/tasks/" + 1}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          Task name
        </Link>
      );
    }
    if (type === "workItem") {
      return (
        <Link
          href={"/user/" + 1 + "/workItems/" + 1}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          Work item name
        </Link>
      );
    }
    if (type === "role") {
      return (
        <Link
          href={"/user/" + 1 + "/roles/" + 1}
          variant={"inherit"}
          color={"inherit"}
          underline={"hover"}
        >
          Role name
        </Link>
      );
    }

    return <></>;
  }

  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Typography
              variant={"h6"}
              component={"h3"}
              sx={{
                paddingX: 2,
                paddingY: 2,
              }}
            >
              {getLink(props.type)}
            </Typography>
            <PaperElementMenu />
          </Box>
          <Typography
            variant={"body1"}
            component={"p"}
            sx={{
              paddingX: 2,
              paddingBottom: 2,
            }}
          >
            Description - Sed ut perspiciatis, unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
