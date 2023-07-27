import React from 'react'
import { useContext } from 'react';
import Chart from "react-apexcharts";
import DataContext from './Datacontext';
import moment from "moment";


const Chartp = () => {
  const{events}=useContext(DataContext)
console.log(events)
  const startOfWeek = moment().startOf('week');
  const endOfWeek = moment().endOf('week');
  let datesOfWeek = [];
  let diabetologyWeek = [];
  let orthopaedicsWeek = [];
  let cardiologyWeek = [];

  const getDataOfWeek = () => {
    let currentDate = new Date(startOfWeek);
    while (currentDate <= endOfWeek) {
      datesOfWeek.push(new Date(currentDate));
      let diabetology = 0;
      let orthopaedics = 0;
      let cardiology = 0;
      events.forEach(ele => {
        if (new Date(ele.start).toDateString() === currentDate.toDateString()) {
          if (ele.department === 'Diabetology') {
            diabetology++;
          } else if (ele.department === 'Orthopedics') {
            orthopaedics++;
          } else if (ele.department === "Cardiology") {
            cardiology++;
          }
        }
      })
      diabetologyWeek.push(diabetology);
      orthopaedicsWeek.push(orthopaedics);
      cardiologyWeek.push(cardiology);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  getDataOfWeek();

  const labels = datesOfWeek.map((ele) => ele.toDateString().slice(4, 10));
 console.log(cardiologyWeek)
  const Data = {
    options: {
      chart: {
        zoom: {
          enabled: false,
          type: "x",
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      xaxis: {
        categories: labels,
        title: {
          text: "Date"
        }
      },
      yaxis: {
        lines: {
          show: false,
        },
        title: {
          text: "Patients"
        },
        min: 1,
        max: 11
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 2,
      },
      legend: {
        position: "top",
      },
    },
    series: [
      {
        name: "Diabetology",
        data: diabetologyWeek,
      },
      {
        name: "Orthopaedics",
        data: orthopaedicsWeek,
      },
      {
        name: "Cardiology",
        data: cardiologyWeek,
      },
    ],
  };
  return (
    <div className="app" style={{marginTop:"30px"}}>
    <div className="row">
      <div className="mixed-chart">
        <Chart
          options={Data.options}
          series={Data.series}
          type="line"
          width="690px"
        />
      </div>
    </div>
  </div>
  )
}

export default Chartp