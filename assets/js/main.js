const data = {
    
  labels: ['Luis', 'Maria', 'Mirna', 'Juan', 'Viridiana', 'Saúl', 'Dolores','Hannia'],
    datasets: [ {
      data: [41, 18, 38, 31, 11, 48, 20, 39],
      label: 'Edad',
      backgroundColor: [
        'rgba(66, 165, 245, 0.3)',
        'rgba(126, 87, 194, 0.3)',
        'rgba(255, 167, 38, 0.3)',
        'rgba(38, 198, 218, 0.3)',
        'rgba(236, 64, 122, 0.3)',
        'rgba(89, 105, 141, 0.3)',
        'rgba(102, 187, 106, 0.3)',
        'rgba(255, 238, 88, 0.3)' 
      ],
      borderColor: [
        'rgba(66, 165, 245, 1)',
        'rgba(126, 87, 194, 1)',
        'rgba(255, 167, 38, 1)',
        'rgba(38, 198, 218, 1)',
        'rgba(236, 64, 122, 1)',
        'rgba(89, 105, 141, 1)',
        'rgba(102, 187, 106, 1)',
        'rgba(255, 238, 88, 1)'
      ],
      borderWidth: 1
    }]
};

const configBar = {
  type: 'bar',
  data,
  options: { 
    animation: {
      /* borderColor: {
        type: 'color',
        duration: 2000,
        easing: 'linear',
        from: 'blue',
        to: 'red',
        loop: true
    }, */
      delay: (context) => {
          let delay = 0;
          if (context.type === 'data') {
              delay = context.dataIndex * 400 + context.datasetIndex * 100;
          }
          return delay;
      },
  },
    scales: {
      y: {
        min: 0,
        max: 50,
          ticks:{
            beginAtZero: true,
            color: 'white'
          } 
      },
      x: {
          ticks:{
            beginAtZero: true,
            color: 'white'
          }
      }
    }
  }
};

const barChart = new Chart(
    document.getElementById('barChart').getContext('2d'),
    configBar
);
/*  */
const datas = {
    
  labels: ['Luis', 'Maria', 'Mirna', 'Juan', 'Viridiana', 'Saúl', 'Dolores','Hannia'],
    datasets: [ {
      data: [41, 18, 38, 31, 11, 48, 20, 39],
      label: 'Sueldo',
      backgroundColor: [
        'rgba(66, 165, 245, 0.3)',
        'rgba(126, 87, 194, 0.3)',
        'rgba(255, 167, 38, 0.3)',
        'rgba(38, 198, 218, 0.3)',
        'rgba(236, 64, 122, 0.3)',
        'rgba(89, 105, 141, 0.3)',
        'rgba(102, 187, 106, 0.3)',
        'rgba(255, 238, 88, 0.3)' 
      ],
      borderColor: [
        'rgba(66, 165, 245, 1)',
        'rgba(126, 87, 194, 1)',
        'rgba(255, 167, 38, 1)',
        'rgba(38, 198, 218, 1)',
        'rgba(236, 64, 122, 1)',
        'rgba(89, 105, 141, 1)',
        'rgba(102, 187, 106, 1)',
        'rgba(255, 238, 88, 1)'
      ],
      borderWidth: 1
    }]
};

const configLine = {
  type: 'line',
  data,
  options: { 
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: {
        min: 0,
        max: 50,
          ticks:{
            beginAtZero: true,
            color: 'white'
          } 
      },
      x: {
          ticks:{
            beginAtZero: true,
            color: 'white'
          }
      }
    }
  }
};

const lineChart = new Chart(
    document.getElementById('lineChart').getContext('2d'),
    configLine
);