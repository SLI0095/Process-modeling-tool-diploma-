import { ListItem, ListItemText, Paper } from "@mui/material";
import ListItemMenu from "./ListItemMenu";

export default function MyListItem() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem secondaryAction={<ListItemMenu />}>
          <ListItemText primary="Name" secondary="Description" />
        </ListItem>
      </Paper>
    </>
  );
}
