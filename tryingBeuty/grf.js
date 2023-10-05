function buidGraf(){
    let place = document.getElementsByClassName('leftGr')[0].childNodes[1];
    console.log(place);
    create_canv(place);
}

function create_canv(place){
    let canvas = document.createElement('canvas');
    canvas.className = 'canvas';    
    place.append(canvas);
    create_graph(canvas);
}

function create_graph(canvas){
    new Chart(canvas, {
        type: 'line',
        data: {
          labels: objMass.map((obj)=>obj.date),
          
          datasets: [{
            label: '' ,
            data: objMass.map((obj)=>obj.weight),
            borderWidth: 1,
            tension: 0.1,
          }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
                grid: {
                  display: false,
                },
              },
          }
        }
      });
}
