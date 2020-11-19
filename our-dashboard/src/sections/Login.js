import React, { useState } from "react";
import { Grid, TextField, Button, Paper } from "@material-ui/core";
import Logo from "assets/logo.svg";

const Login = (props) => {
  const [loginDetails, setLoginDetails] = useState({
    username: null,
    password: null,
  });

  return (
    <div>
      <Paper
        elevation="3"
        style={{
          backgroundColor: "#393e46",
          width: "25vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
          height: "10vh",
        }}
      >
        <img alt="Logo" src={Logo} style={{ height: "70%" }} />
      </Paper>

      <Paper
        elevation="3"
        style={{
          width: "25vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item style={{ margin: "2.5%" }}>
            <TextField
              variant="outlined"
              label="Username"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, username: e.target.value })
              }
            />
          </Grid>

          <Grid item style={{ margin: "2.5%" }}>
            <TextField
              variant="outlined"
              label="Password"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </Grid>

          <Grid
            item
            style={{ margin: "2.5%" }}
            onClick={() => props.setShowSection("Home")}
          >
            <Button>Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
