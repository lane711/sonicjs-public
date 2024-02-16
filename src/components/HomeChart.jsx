export function HomeChart(props) {
    const code = `
        <script>
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
        </script>
      `
    const link = `https://cdn.jsdelivr.net/npm/chart.js`
  
    return (
      <>
        <div>home chart</div>
        <canvas id="myChart"></canvas>
        <script async src={link}></script>
        <script dangerouslySetInnerHTML={{ __html: code }} />
      </>
    )
  }
