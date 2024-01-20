import React,{useContext} from'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { adminOverview } from '../../../stores/CartContxt';


ChartJS.register(ArcElement, Tooltip, Legend);

 


const options={
  maintainAspectRatio: false,
}

export function PieChart() {
  const{ MostBoughtCategory}  =useContext(adminOverview)

  let mostbought=undefined
  console.log(MostBoughtCategory)
  if(MostBoughtCategory){
    mostbought = {
      labels: ["electronics","computing","home & office","fashion","baby product","game",],
      datasets: [
        {
          label: 'Most bought category',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 255, 0, 0.5)',  
            'rgba(255, 165, 0, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(50, 205, 50, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }


  return <Pie data={mostbought} options={options}/>;
}
