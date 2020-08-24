import React from 'react'
import { Line } from 'react-chartjs-2'


function LineChart(props) {

    const data = {
        labels: [
          'Active',
          'Recovered',
          'Death'
          
          
        ],
        datasets: [
          {
            label: "Covid cases today * 10000",
           
             data: [props.active/10000, props.recoverd/10000, props.death/10000],
            // data: [4, 5, 8],
            borderColor: ['rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
            pointBorderColor: 'rgba(255, 206, 86, 0.2)'
          }
         
        ]
      }

      const options = {
        title: {
          display: true,
          text: 'Covid Stats'
        },
        scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         min: 0,
        //         max: 10,
        //         stepSize: 1
        //       }
        //     }
        //   ]
        }
      }

    return (
        <div>
        {console.log(props.active)}
            <Line   data={data} options={options} />
        </div>
    )
}

export default LineChart
