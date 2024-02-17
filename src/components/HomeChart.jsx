// App.js
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { useState } from 'react'
import { Data } from '../data/homechart'
import { BarChart } from './HomeChartBar'

Chart.register(CategoryScale)

export function HomeChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.platform),
    datasets: [
      {
        label: 'Average Request Latency',
        data: Data.map((data) => data.latency),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })

  return (
    <div className="HomeChart">
      <BarChart chartData={chartData} />
    </div>
  )
}
