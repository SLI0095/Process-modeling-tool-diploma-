import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";

import DeleteModalListItem from "./DeleteModalListItem";
import RemoveUserFromGroupModal from "./Groups/RemoveUserFromGroupModal";
import IconButton from "@mui/material/IconButton";
import { Info } from "@mui/icons-material";
import * as React from "react";
import { useNavigate } from "react-router";

export default function UserListItem(props) {
  let navigate = useNavigate();

  const openGroupDetail = () => {
    console.log(props.groupId);
    navigate(
      "/user/" + sessionStorage.getItem("userId") + "/groups/" + props.groupId
    );
  };

  function getDelete(type) {
    if (type === "user") {
      return <DeleteModalListItem />;
    }
    if (type === "member") {
      return <RemoveUserFromGroupModal user={props.user} />;
    }
    if (type === "myGroup") {
      return (
        <>
          <IconButton
            edge={"end"}
            aria-label="remove"
            id="remove-button"
            onClick={() => openGroupDetail()}
            sx={{
              marginLeft: 2,
            }}
          >
            <Info />
          </IconButton>
        </>
      );
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
          <ListItemText primary={props.name} />
          <ListItemSecondaryAction>
            {getDelete(props.type)}
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
}
