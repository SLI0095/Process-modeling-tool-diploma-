import MyAppBar from "../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../modules/Process/ProcessSubMenuFooter";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  Snackbar,
} from "@mui/material";
import UserListItem from "../modules/UserListItem";
import AddUserModal from "../modules/Users/AddUserModal";
import MyListItem from "../modules/MyListItem";
import AddProcessSettingsModal from "../modules/AddProcessSettingsModal";
import ChangeOwnerModal from "../modules/Users/ChangeOwnerModal";
import TaskSubMenuFooter from "../modules/Task/TaskSubMenuFooter";
import WorkItemSubMenuFooter from "../modules/WorkItem/WorkItemSubMenuFooter";
import RoleSubMenuFooter from "../modules/Role/RoleSubMenuFooter";
import AddTaskSettingsModal from "../modules/AddTaskSettingsModal";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import config from "../resources/config.json";

export default function ElementSettings(props) {
  const [item, setItem] = useState({
    id: -1,
    canEdit: [],
    hasAccess: [],
    isTemplate: false,
    owner: { username: "" },
  });
  const [selected, setSelected] = useState(false);
  const { workItemId } = useParams();
  const { taskId } = useParams();
  const { roleId } = useParams();
  const { processId } = useParams();
  const { userId } = useParams();

  const [openSnack, setOpenSnack] = React.useState(false);
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    if (props.type === "workItem") {
      fetch(config.serverURL + "workItems/" + workItemId)
        .then((res) => res.json())
        .then(
          (result) => {
            setSelected(result.isTemplate);
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "role") {
      fetch(config.serverURL + "roles/" + roleId)
        .then((res) => res.json())
        .then(
          (result) => {
            setSelected(result.isTemplate);
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "process") {
      fetch(config.serverURL + "processes/" + processId)
        .then((res) => res.json())
        .then(
          (result) => {
            setSelected(result.isTemplate);
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
    if (props.type === "task") {
      fetch(config.serverURL + "tasks/" + taskId)
        .then((res) => res.json())
        .then(
          (result) => {
            setSelected(result.isTemplate);
            setItem(result);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }, [processId, props.type, roleId, taskId, workItemId]);

  const saveTemplateChange = (checked) => {
    const requestOptions = {
      method: "PUT",
    };
    if (props.type === "workItem") {
      fetch(
        config.serverURL +
          "workItems/" +
          workItemId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
            setOpenSnack(true);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    }
    if (props.type === "role") {
      fetch(
        config.serverURL +
          "roles/" +
          roleId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
            setOpenSnack(true);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    }
    if (props.type === "process") {
      fetch(
        config.serverURL +
          "processes/" +
          processId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
            setOpenSnack(true);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    }
    if (props.type === "task") {
      fetch(
        config.serverURL +
          "tasks/" +
          taskId +
          "/setTemplate?userId=" +
          userId +
          "&isTemplate=" +
          checked,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            setSelected(checked);
            setOpenSnack(true);
            return;
          }
          return response.json();
        })
        .then((data) => {
          if (data !== undefined) {
            alert(data.message);
          }
        });
    }
  };

  function getFooter(type) {
    if (type === "process") {
      return <ProcessSubMenuFooter state="settings" />;
    }
    if (type === "task") {
      return <TaskSubMenuFooter state="settings" />;
    }
    if (type === "workItem") {
      return <WorkItemSubMenuFooter state="settings" />;
    }
    if (type === "role") {
      return <RoleSubMenuFooter state="settings" />;
    }
  }

  function getUsableIn(type) {
    if (type === "process") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <MyListItem type="process" />
          </List>
          <AddProcessSettingsModal />
        </>
      );
    }
    if (type === "task") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <MyListItem type="process" />
          </List>
          <AddProcessSettingsModal />
        </>
      );
    }
    if (type === "workItem") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this processes
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <MyListItem type="task" />
          </List>
          <AddProcessSettingsModal />
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this tasks
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <MyListItem type="task" />
          </List>
          <AddTaskSettingsModal />
        </>
      );
    }
    if (type === "role") {
      return (
        <>
          <Typography variant={"h7"} component={"h3"} marginTop={3}>
            Item usable in this tasks
          </Typography>
          <List
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <MyListItem type="task" />
          </List>
          <AddTaskSettingsModal />
        </>
      );
    }
  }

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 10 }}>
        <Typography
          variant={"h4"}
          component={"h2"}
          marginTop={3}
          marginBottom={3}
        >
          Basic settings
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selected}
                onChange={(e) => saveTemplateChange(e.target.checked)}
              />
            }
            label="Marked as template"
          />
        </FormGroup>
        <Typography variant={"body2"} fontStyle={"italic"} marginY={2}>
          Items marked as template can be use in all other processes or tasks.
        </Typography>
        {getUsableIn(props.type)}
        <Typography variant={"h4"} component={"h2"} marginTop={5}>
          User settings
        </Typography>
        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Owner of the item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <UserListItem
            type="owner"
            name={item.owner !== null ? item.owner.username : ""}
          />
        </List>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Who can edit item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {item.canEdit.map((userType) => (
            <UserListItem
              user={userType}
              name={
                userType.username !== undefined
                  ? userType.username
                  : userType.groupName
              }
              id={userType.id}
              key={userType.id}
              type="userEdit"
              elementType={props.type}
              elementId={item.id}
            />
          ))}
        </List>

        <Typography variant={"h7"} component={"h3"} marginTop={3}>
          Who can view item
        </Typography>
        <List
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {item.hasAccess.map((userType) => (
            <UserListItem
              user={userType}
              name={
                userType.username !== undefined
                  ? userType.username
                  : userType.groupName
              }
              id={userType.id}
              key={userType.id}
              type="userAccess"
              elementType={props.type}
              elementId={item.id}
            />
          ))}
        </List>
        <Snackbar
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="success"
            sx={{ width: "100%" }}
          >
            Changes saved.
          </Alert>
        </Snackbar>
        <AddUserModal type={props.type} itemId={item.id} />
        <ChangeOwnerModal />
      </Container>
      {getFooter(props.type)}
    </>
  );
}
