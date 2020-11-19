import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Chart from "common/Chart";

const Home = () => {
  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  const title = "# of Votes";
  const data = [12, 19, 3, 5, 2, 3];
  const scatterData = [
    {
      x: 23,
      y: 12,
    },
    {
      x: 5,
      y: 15,
    },
    {
      x: 20,
      y: 17,
    },
    {
      x: 7,
      y: 13,
    },
    {
      x: 18,
      y: 19,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "2.5%" }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ width: "85vw" }}
        >
          <Grid item style={{ width: "47.5%", marginRight: "5%" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Paper
                style={{ width: "100%", backgroundColor: "#393e46" }}
                elevation="3"
              >
                <Chart
                  variant="Line"
                  data={data}
                  labels={labels}
                  title={title}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid item style={{ width: "47.5%" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Paper
                style={{ width: "100%", backgroundColor: "#393e46" }}
                elevation="3"
              >
                <Chart
                  variant="Bar"
                  data={data}
                  labels={labels}
                  title={title}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginBottom: "2.5%" }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ width: "85vw" }}
        >
          <Grid item style={{ width: "47.5%", marginRight: "5%" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Paper
                style={{ width: "100%", backgroundColor: "#393e46" }}
                elevation="3"
              >
                <Chart
                  variant="Scatter"
                  data={scatterData}
                  labels={labels}
                  title={title}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid item style={{ width: "47.5%" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Paper
                style={{ width: "100%", backgroundColor: "#393e46" }}
                elevation="3"
              >
                <Chart
                  variant="Doughnut"
                  data={data}
                  labels={labels}
                  title={title}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginBottom: "2.5%" }}>
        <Paper
          elevation="3"
          style={{ backgroundColor: "#393e46", width: "85vw", height: "40vh" }}
        >
          <Typography variant="body1" style={{ color: "#eeeeee" }}>
            Statistic 1: 25%
          </Typography>
          <Typography variant="body1" style={{ color: "#eeeeee" }}>
            Statistic 2: 50%
          </Typography>
          <Typography variant="body1" style={{ color: "#eeeeee" }}>
            Statistic 3: 75%
          </Typography>
          <Typography variant="body1" style={{ color: "#eeeeee" }}>
            Statistic 4: 100%
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
