import React from "react";
import Chart from "react-apexcharts";

const DonationProgress = () => {
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#302cf4"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#121a34"],
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      labels: {
        style: {
          colors: "#839cc7",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#839cc7",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 4,
      colors: ["#ff007c"],
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      borderColor: "#343b4f",
    },
  };

  const series = [
    {
      name: "A",
      data: [0, 100,800, 400, 600, 150, 400, 300, 290, 700, 600, 400],
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-white font-impact text-2xl my-5">
          Investment Overview
        </h1>
      </div>
      <div className="p-4 rounded-2xl shadow-lg bg-[#0d0d0d] ">
        <Chart options={options} series={series} type="area" height={300} />
      </div>
    </div>
  );
};

export default DonationProgress;
