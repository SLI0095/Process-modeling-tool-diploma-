import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import DeleteModalListItem from "./DeleteModalListItem";
import MetricEditModal from "./Process/MetricEditModal";
import WorkItemStateEditModal from "./WorkItem/WorkItemStateEditModal";
import StepEditModal from "./Task/StepEditModal";

export default function MyListItem(props) {
  function getEdit(type) {
    if (type === "WIState") {
      return <WorkItemStateEditModal />;
    }
    if (type === "step") {
      return <StepEditModal />;
    }
    if (type === "metric") {
      return <MetricEditModal />;
    }

    return <></>;
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          marginBottom: 2,
        }}
      >
        <ListItem>
          <ListItemText primary="Name" secondary="Description" />
          <ListItemSecondaryAction>
            {getEdit(props.type)}
            <DeleteModalListItem />
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
