import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Line, Bar, Scatter, Doughnut } from "react-chartjs-2";

const Home = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  const scatterData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
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
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
          },
        ],
      },
    },
  };

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
                <Line data={data} />
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
                <Bar data={data} />
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
                <Scatter data={scatterData} />
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
                <Doughnut data={data} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
