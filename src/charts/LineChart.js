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
            label: "Covid cases today * 1000",
           
             data: [props.active/1000, props.recoverd/1000, props.death/1000],
            // data: [4, 5, 8],
            borderColor: ['rgba(255, 152, 0, 0.7)'],
            backgroundColor: ['rgba(255, 235, 59, 0.3) '],
            pointBackgroundColor: 'rgba(255, 206, 86, 0.8)',
            pointBorderColor: 'rgba(255, 206, 86, 0.8)'
          }
         
        ]
      }

      const options = {
        title: {
          display: true,
          text: 'Covid Stats'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                // min: 0,
                // max: 10,
                stepSize: 5000
              }
            }
          ]
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
