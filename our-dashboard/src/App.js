import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Home } from "constants/sections";

function App() {
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00adb5", marginBottom: "2.5%" }}
      >
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
