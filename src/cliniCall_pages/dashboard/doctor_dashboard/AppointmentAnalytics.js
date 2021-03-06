import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

class AppointmentAnalytics extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "rounded",
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      legend: {
        offsetY: -10,
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "No. of Appointments",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
    series: [
      {
        name: "Physical",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Online",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Appointment Type</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={400}
          />
        </CardBody>
      </Card>
    );
  }
}
export default AppointmentAnalytics;
