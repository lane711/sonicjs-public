import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Average Request Latency</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "SonicJs is 6-8x faster than other popular technologies"
            },
            legend: {
              display: false
            }
          },
          indexAxis:"y"
        }}
      />
    </div>
  );
};