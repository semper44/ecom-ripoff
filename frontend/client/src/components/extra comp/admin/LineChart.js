import React, {useContext} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { adminOverview } from '../../../stores/CartContxt';
import { ThemeData } from "../../../App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart for monthly users',
    },
  },
};


export function LineChart({chartdata}) {
  const{MonthlyUsers}=useContext(adminOverview)
  const Theme=useContext(ThemeData)


  let usersDataset=undefined
  if(MonthlyUsers){
    usersDataset={
      labels: ["current", "previous", "previous Two Months"],
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
          {
      label: 'Monthly Orders',
      data: MonthlyUsers,
      // you can set indiviual colors for each bar
      backgroundColor:'cyan',
      borderWidth: 0.3,
      borderColor:  Theme?"white":"black",
      
      }
      ]
    }

  }
  return <>
  {usersDataset &&<Line options={options} data={usersDataset} />}
  </> 
}
