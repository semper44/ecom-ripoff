import React, { useContext} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { adminOverview } from '../../../stores/CartContxt';
import { Box } from '@mui/material';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart for monthly orders',
    },
  },
};

export function BarChart() {
  const{Orders}=useContext(adminOverview)

  let ordersDataset=undefined
  if(Orders){
    ordersDataset={
      labels: ["current", "previous", "previous Two Months"],
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
          {
      label: 'Monthly Orders',
      data: Orders,
      // you can set indiviual colors for each bar
      backgroundColor:'cyan',
      borderWidth: 0.3,
      
      }
      ]
    }

  }
  return <Box sx={{height:"100%"}}>
    {ordersDataset && <Bar data={ordersDataset} options={options}  />}
  </Box>;
}