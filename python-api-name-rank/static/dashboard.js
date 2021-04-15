/* globals Chart:false, feather:false */

(function () {

  'use strict'
  
  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        "陳",
        '林',
        '黃',
        '張',
        '李',
        '王',
        '吳'
      ],
      datasets: [{
        data: [
          1909355,
          1421667,
          1037427,
          903235,
          879922,
          704973,
          694576
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
