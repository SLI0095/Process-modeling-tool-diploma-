import { ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";

export default function ActivityListItem() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton>
            <ListItemText primary="Activity name" secondary="activity type" />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
