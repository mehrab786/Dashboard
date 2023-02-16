import React, {useState, useEffect} from 'react'
import { Bar, Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets:[],
    });

const [chartOptions,setChartOptions] = useState({});

useEffect (()=>{
    setChartData({
        labels:['Mon', 'Tues', 'Wed', 'Thurs','Fri', 'Sat','Sun'],
        datasets:[
            {
                labels: 'Sales $',
                data: [1881,22051,13536,21455,24785,45264,14535], 
                borderColor:'rgb(53,162,235)',
                backgroundColor:'rgb(53,162,235,0.4)',
            },
        ]
    })
    setChartOptions({
        plugins:{
            legend:{
                position:'top',
            },
            title:{
                display: true,
                text:'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
},[])
  return (
    <div>
        <div className=' w-full col-auto lg:h-[70vh]  m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    </div>
  )
}

export default BarChart;