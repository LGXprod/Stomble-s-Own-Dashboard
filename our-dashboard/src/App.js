import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Home, MLPerf, QData } from "constants/sections";
import Logo from "assets/logo.svg";

function App() {
  const [showSection, setShowSection] = useState();

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00adb5", marginBottom: "2.5%" }}
      >
        <div style={{ width: "80%" }}>
          <Toolbar>
            <img alt="Logo" src={Logo} style={{ marginRight: "20%" }} />
            <Button
              style={{ margin: "0 auto", width: "50%" }}
              color="inherit"
              onClick={() => setShowSection("Home")}
            >
              Home
            </Button>
            <Button
              style={{ margin: "0 auto", width: "50%" }}
              color="inherit"
              onClick={() => setShowSection("MLPerf")}
            >
              ML Performance
            </Button>
            <Button
              style={{ margin: "0 auto", width: "50%" }}
              color="inherit"
              onClick={() => setShowSection("QData")}
            >
              Query Data
            </Button>
          </Toolbar>
        </div>
      </AppBar>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        {(() => {
          switch (showSection) {
            case "Home":
              return <Home />;
            case "MLPerf":
              return <MLPerf />;
            case "QData":
              return <QData />;
            default:
              return <Home />;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
