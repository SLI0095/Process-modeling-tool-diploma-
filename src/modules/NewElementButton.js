import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { AddCircle } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function NewElementButton() {
  const handleClick = () => {};

  return (
    <Grid item xs={3} align={"center"}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <IconButton
          aria-label="Add new"
          id="long-button"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            minWidth: 75,
            minHeight: 75,
          }}
        >
          <AddCircle
            sx={{
              minWidth: 75,
              minHeight: 75,
              color: blue[600],
            }}
          />
        </IconButton>
      </div>
    </Grid>
  );
}
